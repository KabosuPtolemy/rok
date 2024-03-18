package finance.rok.backend.filter;

import finance.rok.backend.helper.UserCredentialsHelper;
import finance.rok.backend.model.Authority;
import finance.rok.backend.model.User;
import finance.rok.backend.repository.UserRepository;
import finance.rok.backend.service.JwtTokenService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static finance.rok.backend.util.Constants.*;

public class CustomAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    private static final AntPathRequestMatcher AUTH_REQUEST_MATCHER =
            new AntPathRequestMatcher("/auth/login", "POST");
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenService jwtTokenService;

    public CustomAuthenticationFilter(
            AuthenticationManager authenticationManager,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtTokenService jwtTokenService
    ) {
        super(AUTH_REQUEST_MATCHER, authenticationManager);
        super.setContinueChainBeforeSuccessfulAuthentication(true);
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenService = jwtTokenService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String authHeader = request.getHeader(AUTHORIZATION_HEADER);

        if (authHeader == null || !authHeader.contains(BASIC_PREFIX)) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "No credentials provided");
            return null;
        }

        Map<String, String> credentials =
                UserCredentialsHelper.extractCredentials(authHeader.replace(BASIC_PREFIX, ""));

        if (UserCredentialsHelper.areCredentialsEmpty(credentials)) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "Invalid credentials");
        } else {
            Optional<User> optionalUser = userRepository.findByEmail(credentials.get(EMAIL));

            if (optionalUser.isPresent() && isUserValid(optionalUser.get(), credentials.get(PASSWORD))) {
                List<SimpleGrantedAuthority> authorities = toGrantedAuthorityList(optionalUser.get().getAuthorities());
                Authentication authentication = new UsernamePasswordAuthenticationToken(
                        credentials.get(EMAIL),
                        optionalUser.get().getPassword(),
                        authorities
                );

                SecurityContext context = SecurityContextHolder.getContext();
                context.setAuthentication(authentication);
                SecurityContextHolder.setContext(context);

                List<String> stringAuthorities = authorities.stream().map(SimpleGrantedAuthority::getAuthority).toList();
                String jwtToken = jwtTokenService.generateToken(credentials.get(EMAIL), stringAuthorities);
                response.setHeader(AUTHORIZATION_HEADER, JWT_PREFIX + jwtToken);

                return authentication;
            } else {
                throw new BadCredentialsException("Invalid credentials");
            }
        }
        return null;
    }



    private boolean isUserValid(User user, String password) {
        return passwordEncoder.matches(password, user.getPassword())
                && Boolean.TRUE.equals(user.getEnabled());
    }

    private List<SimpleGrantedAuthority> toGrantedAuthorityList(List<Authority> authorities) {
        return authorities.stream().map(a -> new SimpleGrantedAuthority(a.getName())).toList();
    }

}

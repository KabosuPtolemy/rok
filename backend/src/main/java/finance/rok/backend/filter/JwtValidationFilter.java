package finance.rok.backend.filter;

import finance.rok.backend.model.User;
import finance.rok.backend.repository.UserRepository;
import finance.rok.backend.service.JwtTokenService;
import finance.rok.backend.util.Constants;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
public class JwtValidationFilter extends OncePerRequestFilter {

    private final JwtTokenService jwtTokenService;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain
    ) throws ServletException, IOException {
        String jwtToken = request.getHeader(Constants.AUTHORIZATION_HEADER);

        if (jwtToken == null || jwtToken.equals("")) {
            throw new BadCredentialsException("No JWT provided");
        }

        jwtToken = jwtToken.replace(Constants.JWT_PREFIX, "");

        SecurityContext context = SecurityContextHolder.getContext();

        boolean isTokenValid = jwtTokenService.isTokenExpired(jwtToken);

        if (!isTokenValid) {
            context.setAuthentication(null);
            throw new BadCredentialsException("Invalid token provided");
        } else {
            Optional<User> optionalUser = userRepository.findByEmail(jwtTokenService.getEmailFromToken(jwtToken));
            if (optionalUser.isEmpty()) {
                throw new BadCredentialsException("Invalid token provided");
            }
            var authentication = new UsernamePasswordAuthenticationToken(
                    jwtTokenService.getEmailFromToken(jwtToken),
                    optionalUser.get().getPassword(),
                    jwtTokenService.getAuthoritiesFromToken(jwtToken)
            );

            context.setAuthentication(authentication);
        }
        SecurityContextHolder.setContext(context);
        chain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        List<String> allowedEndpoints = List.of(
                "/auth/login",
                "/auth/register",
                "/user-validation/confirm-account",
                "/favicon.ico"
        );
        return allowedEndpoints.contains(request.getServletPath());
    }
}

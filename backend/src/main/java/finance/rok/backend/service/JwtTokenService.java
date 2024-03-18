package finance.rok.backend.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Date;
import java.util.List;

public interface JwtTokenService {

    String getEmailFromToken(String token);

    List<SimpleGrantedAuthority> getAuthoritiesFromToken(String token);

    Date getExpirationDateFromToken(String token);

    Boolean isTokenExpired(String token);

    String generateToken(String email, List<String> authorities);

}

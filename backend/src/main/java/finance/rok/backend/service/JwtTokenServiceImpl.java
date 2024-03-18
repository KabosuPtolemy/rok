package finance.rok.backend.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.List;
import java.util.function.Function;

import static finance.rok.backend.util.Constants.JWT_TOKEN_VALIDITY;

@Service
public class JwtTokenServiceImpl implements JwtTokenService {

    private final String secret;

    public JwtTokenServiceImpl(@Value("${jwt.secret}") String secret) {
        this.secret = secret;
    }

    @Override
    public String getEmailFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    @Override
    public List<SimpleGrantedAuthority> getAuthoritiesFromToken(String token) {
        Claims claims = getAllClaimsFromToken(token);
        List<String> authorities = (List<String>) claims.get("authorities");
        return authorities.stream().map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token) {
        SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    //check if the token has expired
    @Override
    public Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return new Date().before(expiration);
    }

    @Override
    public String generateToken(String email, List<String> authorities) {
        try {
            SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());
            return Jwts.builder()
                    .setIssuer("ROK Finance")
                    .claim("authorities", authorities)
                    .setSubject(email)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
                    .signWith(key)
                    .compact();
        } catch (Exception e) {
            return null;
        }
    }

}

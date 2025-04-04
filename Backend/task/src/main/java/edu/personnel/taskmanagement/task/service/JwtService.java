package edu.personnel.taskmanagement.task.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    public String generateToken(UserDetails userDetails);
    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails);
    public boolean isTokenValid(String token, UserDetails userDetails);
    public String extractUsername(String token);
    public boolean isTokenExpired(String token);
    public String buildToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails,
            Long jwtExpiration);
    public SecretKey getSigningKey();
    public Claims extractAllClaims(String token);
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver);
    public Date extractExpiration(String token);
}

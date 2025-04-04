package edu.personnel.taskmanagement.task.service.impl;

import edu.personnel.taskmanagement.task.dto.AuthenticationRequest;
import edu.personnel.taskmanagement.task.dto.AuthenticationResponse;
import edu.personnel.taskmanagement.task.dto.RegistrationRequest;
import edu.personnel.taskmanagement.task.entity.User;
import edu.personnel.taskmanagement.task.repository.UserRepository;
import edu.personnel.taskmanagement.task.service.AuthenticationService;
import edu.personnel.taskmanagement.task.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void register(RegistrationRequest registrationRequest) {
        var user = User.builder()
                .username(registrationRequest.getUsername())
                .password(passwordEncoder.encode(registrationRequest.getPassword()))
                .build();
        userRepository.save(user);
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        var auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword())
        );
        var claims = new HashMap<String, Object>();
        var user = ((User) auth.getPrincipal());
        claims.put("username", user.getUsername());
        var jwtToken = jwtService.generateToken(claims,user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}

package edu.personnel.taskmanagement.task.service;

import edu.personnel.taskmanagement.task.dto.AuthenticationRequest;
import edu.personnel.taskmanagement.task.dto.AuthenticationResponse;
import edu.personnel.taskmanagement.task.dto.RegistrationRequest;
import jakarta.validation.Valid;

public interface AuthenticationService {
    void register(RegistrationRequest registrationRequest);

    AuthenticationResponse authenticate(@Valid AuthenticationRequest authenticationRequest);
}

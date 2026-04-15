package com.example.TaskManager.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.TaskManager.model.Role;
import com.example.TaskManager.model.User;
import com.example.TaskManager.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder encoder;

    public User register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        return repo.save(user);
    }
}
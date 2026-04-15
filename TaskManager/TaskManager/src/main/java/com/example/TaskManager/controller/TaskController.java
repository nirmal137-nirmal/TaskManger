package com.example.TaskManager.controller;


import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.example.TaskManager.model.Task;
import com.example.TaskManager.service.TaskService;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService service;

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public Task create(@RequestBody Task t) {
        return service.save(t);
    }

    @GetMapping
    public List<Task> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
package com.example.TaskManager.service;


import java.util.List;
import org.springframework.stereotype.Service;

import com.example.TaskManager.model.Task;
import com.example.TaskManager.repository.TaskRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repo;

    public Task save(Task t) {
        return repo.save(t);
    }

    public List<Task> getAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
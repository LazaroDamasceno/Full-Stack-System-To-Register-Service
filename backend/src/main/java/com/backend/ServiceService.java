package com.backend;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceService {

    final
    ServiceRepository repository;

    public List<ServiceEntity> getAll() {
        return repository.findAll();
    }

    public ServiceEntity getById(int id) {
        return repository.findById(id);
    }

    public ServiceEntity add(ServiceEntity entity) {
        return repository.saveAndFlush(entity);
    }

    public ServiceEntity update(ServiceEntity entity) {
        return repository.saveAndFlush(entity);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}

package com.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer> {
    ServiceEntity findById(int id);
    void deleteById(int id);
}

package com.backend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/services")
@AllArgsConstructor
public class ServiceController {

    final
    ServiceService service;

    public List<ServiceEntity> getAll() {
        return service.getAll();
    }

    public ServiceEntity getById(@PathVariable(value = "id") int id) {
        return service.getById(id);
    }

    public ServiceEntity add(@RequestBody ServiceEntity entity) {
        return service.add(entity);
    }

    public ServiceEntity update(@RequestBody ServiceEntity entity) {
        return service.update(entity);
    }

    public void delete(@PathVariable(value = "id") int id) {
        service.delete(id);
    }

}

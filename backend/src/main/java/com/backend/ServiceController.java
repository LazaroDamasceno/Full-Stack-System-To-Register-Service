package com.backend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@AllArgsConstructor
public class ServiceController {

    final
    ServiceService service;

    @GetMapping("/")
    public List<ServiceEntity> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ServiceEntity getById(@PathVariable(value = "id") int id) {
        return service.getById(id);
    }

    @PostMapping("/add")
    public ServiceEntity add(@RequestBody ServiceEntity entity) {
        return service.add(entity);
    }

    @PutMapping("/update")
    public ServiceEntity update(@RequestBody ServiceEntity entity) {
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public void delete(@PathVariable(value = "id") int id) {
        service.delete(id);
    }

}

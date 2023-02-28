package com.backend;

import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@AllArgsConstructor
@CrossOrigin("http://http://localhost:5173/")
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

    @GetMapping("/pending")
    public List<ServiceEntity> getServicesWithPendingPayment() {
        return service.getServicesWithPendingPayment();
    }

    @GetMapping("/cancelled")
    public List<ServiceEntity> getCancelledServices() {
        return service.getCancelledServices();
    }

    @PostMapping("/add")
    public ServiceEntity add(@RequestBody ServiceEntity entity) {
        return service.add(entity);
    }

    @PutMapping("/update")
    public ServiceEntity update(@RequestBody ServiceEntity entity) {
        return service.update(entity);
    }

    @PutMapping("/cancel/{id}")
    public ServiceEntity cancelService(@PathVariable(value = "id") int id) {
        return service.cancelService(id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable(value = "id") Integer id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

}

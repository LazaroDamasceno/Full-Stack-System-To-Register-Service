package com.backend;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.Date;
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

    public List<ServiceEntity> getServicesWithPendingPayment() {
        return getAll().stream().filter(e -> e.getStatus().equals("PENDING")).toList();
    }

    public List<ServiceEntity> getCancelledServices() {
        return getAll().stream().filter(e -> e.getStatus().equals("CANCELLED")).toList();
    }

    public ServiceEntity add(ServiceEntity entity) {
        if (entity.getPricePaid() == null
                || entity.getPricePaid() == 0
                || entity.getPaymentDate() == null)
        {
            entity.setStatus("PENDING");
        } else {
            entity.setStatus("FINISHED");
        }
        return repository.saveAndFlush(entity);
    }

    public ServiceEntity update(ServiceEntity entity) {
        if (entity.getPricePaid() != null
                && entity.getPricePaid() > 0
                && entity.getPaymentDate() != null
        ) {
            entity.setStatus("FINISHED");
        }
        return repository.saveAndFlush(entity);
    }

    public ServiceEntity cancelService(int id) {
        ServiceEntity entity = getById(id);
        entity.setStatus("CANCELLED");
        entity.setEndingDate(new Date());
        return repository.saveAndFlush(entity);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}

package com.backend;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "SERVICE")
@Data
public class ServiceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private int id;
    @Column(nullable = false)
    private String recipient;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false)
    private String description;
    private double pricePaid;
    private Date commenceData = new Date();
    private Date endingDate;
    private Date paymentDate;

}

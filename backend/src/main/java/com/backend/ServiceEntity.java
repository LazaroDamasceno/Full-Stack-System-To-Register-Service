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
    private Integer id;

    @Column(nullable = false)
    private String recipient;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String description;

     Double pricePaid;

    @(TemporalType.DATE)
    private Date startingDate = new Date();

    @Temporal(TemporalType.DATE)
    private Date endingDate;

    @Temporal(TemporalType.DATE)

    Date paymentDate;

    String status;

}

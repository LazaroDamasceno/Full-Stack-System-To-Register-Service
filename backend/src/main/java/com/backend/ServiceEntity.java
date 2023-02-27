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
    private Double pricePaid;
    @Temporal(TemporalType.DATE)
    private Date commenceData = new Date();
    @Temporal(TemporalType.DATE)
    private Date endingDate;
    @Temporal(TemporalType.DATE)
    private Date paymentDate;

}

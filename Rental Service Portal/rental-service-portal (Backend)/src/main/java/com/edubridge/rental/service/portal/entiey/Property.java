package com.edubridge.rental.service.portal.entiey;

import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String available;
    private Double securityDeposit;
    private Double price;
    private String areaOfProperty;
    private String imagesUrl; 
    private String address;
    
    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private PropertyCategory category;
    
    // Getters and Setters
    
    
}

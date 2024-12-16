package com.edubridge.rental.service.portal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edubridge.rental.service.portal.entiey.Property;

@CrossOrigin("http://localhost:4200")
@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    // Add custom queries if required
}

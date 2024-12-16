package com.edubridge.rental.service.portal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edubridge.rental.service.portal.entiey.PropertyCategory;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "propertyCategory", path="property-category")
public interface PropertyCategoryRepository extends JpaRepository<PropertyCategory, Long> {


}

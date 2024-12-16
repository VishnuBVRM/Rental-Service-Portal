package com.edubridge.rental.service.portal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.rental.service.portal.entiey.Property;
import com.edubridge.rental.service.portal.entiey.PropertyCategory;
import com.edubridge.rental.service.portal.repo.PropertyCategoryRepository;
import com.edubridge.rental.service.portal.repo.PropertyRepository;

@Service
public class PropertyCategoryService {

	@Autowired
	private PropertyCategoryRepository propertyCategoryRepository;

	@Autowired
	private PropertyRepository propertyRepository;

	public Property addPropertyToCategory(Long categoryId, Property property) {

		Optional<PropertyCategory> optional = propertyCategoryRepository.findById(categoryId);

		if (optional.isPresent()) {
			PropertyCategory category = optional.get();
			property.setCategory(category);
			return propertyRepository.save(property);
		} else {
			throw new RuntimeException("Category not found");
		}
	}

}

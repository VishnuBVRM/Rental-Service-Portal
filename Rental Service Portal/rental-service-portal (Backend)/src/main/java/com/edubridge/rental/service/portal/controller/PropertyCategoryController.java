package com.edubridge.rental.service.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.rental.service.portal.entiey.Property;
import com.edubridge.rental.service.portal.service.PropertyCategoryService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PropertyCategoryController {
	
	@Autowired
	private PropertyCategoryService propertyCategoryService;
	/*
	
	http://localhost:8080/api/v1/category/1/properties
	*/
	@PostMapping("/category/{categoryId}/properties")
	public ResponseEntity<Property> addPropertyToCategory(
			@PathVariable Long  categoryId, @RequestBody Property property){
		
		propertyCategoryService.addPropertyToCategory(categoryId, property);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

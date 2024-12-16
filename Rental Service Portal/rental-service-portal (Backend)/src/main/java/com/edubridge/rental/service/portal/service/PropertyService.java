package com.edubridge.rental.service.portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.rental.service.portal.repo.PropertyRepository;

@Service
public class PropertyService {
	@Autowired
	private PropertyRepository repo;
	
}

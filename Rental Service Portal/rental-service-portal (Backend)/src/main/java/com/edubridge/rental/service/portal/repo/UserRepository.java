package com.edubridge.rental.service.portal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.rental.service.portal.entiey.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Add custom queries if needed
}

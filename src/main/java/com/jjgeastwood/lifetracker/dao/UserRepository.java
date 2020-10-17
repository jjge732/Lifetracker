package com.jjgeastwood.lifetracker.dao;

import com.jjgeastwood.lifetracker.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
}
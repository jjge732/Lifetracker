package com.jjgeastwood.lifetracker.dao;

import com.jjgeastwood.lifetracker.models.Meal;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MealRepository extends PagingAndSortingRepository<Meal, Long> {
}

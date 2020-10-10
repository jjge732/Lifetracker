package com.jjgeastwood.lifetracker.models;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface MealRepository extends PagingAndSortingRepository<Meal, Long> {
}

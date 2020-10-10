package com.jjgeastwood.lifetracker.models;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface FoodRepository extends PagingAndSortingRepository<Food, Long> {
}

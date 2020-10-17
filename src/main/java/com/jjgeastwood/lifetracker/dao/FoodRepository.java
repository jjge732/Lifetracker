package com.jjgeastwood.lifetracker.dao;

import com.jjgeastwood.lifetracker.models.Food;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface FoodRepository extends PagingAndSortingRepository<Food, Long> {
}

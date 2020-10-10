package com.jjgeastwood.lifetracker.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final JournalEntryRepository journalEntryRepository;
    private final MealRepository mealRepository;
    private final FoodRepository foodRepository;

    @Autowired
    public DatabaseLoader(
        UserRepository userRepository,
        JournalEntryRepository journalEntryRepository,
        MealRepository mealRepository,
        FoodRepository foodRepository
    ) {
        this.userRepository = userRepository;
        this.journalEntryRepository = journalEntryRepository;
        this.mealRepository = mealRepository;
        this.foodRepository = foodRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        User user = new User("test@gmail.com", "password");
        JournalEntry journalEntry = new JournalEntry(user);
        Meal meal = new Meal(journalEntry, "Breakfast");
        Food food = new Food(meal,"Yogurt",5,5,5);
        this.userRepository.save(user);
        this.journalEntryRepository.save(journalEntry);
        this.mealRepository.save(meal);
        this.foodRepository.save(food);
//        meal.getFoods().add(food);
//        this.mealRepository.save(meal);
    }
}
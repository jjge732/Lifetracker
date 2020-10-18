package com.jjgeastwood.lifetracker.services;

import com.jjgeastwood.lifetracker.dao.FoodRepository;
import com.jjgeastwood.lifetracker.dao.JournalEntryRepository;
import com.jjgeastwood.lifetracker.dao.MealRepository;
import com.jjgeastwood.lifetracker.dao.UserRepository;
import com.jjgeastwood.lifetracker.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final JournalEntryRepository journalEntryRepository;
    private final MealRepository mealRepository;
    private final FoodRepository foodRepository;
    private final SimpleDateFormat sdf;

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
        this.sdf = new SimpleDateFormat("dd/M/yyyy");
    }

    @Override
    public void run(String... strings) throws Exception {
        User user = new User("test@gmail.com", "password");
        this.userRepository.save(user);
        JournalEntry journalEntry = new JournalEntry(user, sdf.format(new Date()));
        Meal meal = new Meal(journalEntry, "Breakfast");
        Food food = new Food(meal,"Yogurt",5,5,5);
        this.userRepository.save(journalEntry.getUser());
        this.journalEntryRepository.save(journalEntry);
        this.mealRepository.save(meal);
        this.foodRepository.save(food);
    }
}
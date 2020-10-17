package com.jjgeastwood.lifetracker.services;

import com.jjgeastwood.lifetracker.dao.FoodRepository;
import com.jjgeastwood.lifetracker.dao.JournalEntryRepository;
import com.jjgeastwood.lifetracker.dao.MealRepository;
import com.jjgeastwood.lifetracker.dao.UserRepository;
import com.jjgeastwood.lifetracker.models.JournalEntry;
import com.jjgeastwood.lifetracker.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JournalEntryRepository journalEntryRepository;
    private final MealRepository mealRepository;
    private final FoodRepository foodRepository;

    @Autowired
    public UserService(
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

    public User loginUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public JournalEntry getJournalEntryByUserAndDate(User user, String entryDate) {
        return journalEntryRepository.findByUserAndEntryDate(user, entryDate);
    }
}

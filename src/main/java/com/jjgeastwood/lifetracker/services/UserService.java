package com.jjgeastwood.lifetracker.services;

import com.jjgeastwood.lifetracker.dao.FoodRepository;
import com.jjgeastwood.lifetracker.dao.JournalEntryRepository;
import com.jjgeastwood.lifetracker.dao.MealRepository;
import com.jjgeastwood.lifetracker.dao.UserRepository;
import com.jjgeastwood.lifetracker.models.JournalEntry;
import com.jjgeastwood.lifetracker.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public User signUpUser(String email, String password) {
        User user = new User(email, password);
        return userRepository.save(user);
    }

    public JournalEntry createJournalEntryForUserAndDate(User user, String entryDate) {
        return journalEntryRepository.save(new JournalEntry(user, entryDate));
    }

    public JournalEntry getOrCreateJournalEntryForUserAndDate(User user, String entryDate) {
        JournalEntry journalEntry = journalEntryRepository.findByUserAndEntryDate(user, entryDate);
        if (journalEntry != null) {
            return journalEntry;
        } else {
            return createJournalEntryForUserAndDate(user, entryDate);
        }
    }
}

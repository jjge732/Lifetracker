package com.jjgeastwood.lifetracker.dao;

import com.jjgeastwood.lifetracker.models.JournalEntry;
import com.jjgeastwood.lifetracker.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface JournalEntryRepository extends PagingAndSortingRepository<JournalEntry, Long> {
    JournalEntry findByUserAndEntryDate(User user, String entryDate);
}

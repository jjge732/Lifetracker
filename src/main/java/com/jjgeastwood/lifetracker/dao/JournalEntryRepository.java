package com.jjgeastwood.lifetracker.dao;

import com.jjgeastwood.lifetracker.models.JournalEntry;
import com.jjgeastwood.lifetracker.models.JournalEntryId;
import com.jjgeastwood.lifetracker.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface JournalEntryRepository extends PagingAndSortingRepository<JournalEntry, JournalEntryId> {
//    JournalEntry findByUserAndEntryDate(User user, String entryDate);
}

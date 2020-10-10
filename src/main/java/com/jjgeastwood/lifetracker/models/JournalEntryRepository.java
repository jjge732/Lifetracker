package com.jjgeastwood.lifetracker.models;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface JournalEntryRepository extends PagingAndSortingRepository<JournalEntry, Long> {
}

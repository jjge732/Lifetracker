package com.jjgeastwood.lifetracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import static javax.persistence.CascadeType.REMOVE;

@Entity
@Table(name="journal_entries")
public class JournalEntry implements Serializable {

    @EmbeddedId
    @Column(name="journal_entry_id")
    JournalEntryId journalEntryId;

    @OneToMany(cascade=REMOVE, mappedBy = "journalEntryId")
    private List<Meal> meals;

    private Date createdAt;
    private Date updatedAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id", insertable = false, updatable = false)
    private User user;

    private @Version
    @JsonIgnore
    Date version;

    private JournalEntry() {}

    public JournalEntry(User user, String entryDate) {
        this.user = user;
        this.meals = new ArrayList<>();
        this.journalEntryId = new JournalEntryId(user, entryDate);
        this.createdAt = this.updatedAt = new Date();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JournalEntry journalEntry = (JournalEntry) o;
        return Objects.equals(journalEntryId, journalEntry.journalEntryId) &&
                Objects.equals(meals, journalEntry.meals);
    }

    @Override
    public int hashCode() {
        return Objects.hash(journalEntryId, meals);
    }

    public JournalEntryId getJournalEntryId() {
        return journalEntryId;
    }

    public void setJournalEntryId(JournalEntryId journalEntryId) {
        this.journalEntryId = journalEntryId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<Meal> getMeals() {
        return meals;
    }

    public void setMeals(List<Meal> meals) {
        this.meals = meals;
    }

    public void addMeal(Meal meal) {
        this.meals.add(meal);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        if (this.user == null) {
            this.user = user;
        }
        this.user.addJournalEntry(this);
    }

    public Date getVersion() {
        return version;
    }

    public void setVersion(Date version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "JournalEntry{" +
                ", meals='" + meals + '\'' +
                ", created_on='" + createdAt + '\'' +
                ", last_updated='" + updatedAt + '\'' +
                ", version=" + version +
                '}';
    }
}

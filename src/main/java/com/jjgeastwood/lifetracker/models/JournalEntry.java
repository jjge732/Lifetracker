package com.jjgeastwood.lifetracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import static javax.persistence.CascadeType.REMOVE;

@Entity
@Table(name="journal_entries")
public class JournalEntry {

    @Id @GeneratedValue
    private long id;

    @Column(name="entry_date")
    String entryDate;

    @OneToMany(cascade=REMOVE, mappedBy = "journalEntry")
    private List<Meal> meals;

    private Date createdAt;
    private Date updatedAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private @Version
    @JsonIgnore
    Date version;

    private JournalEntry() {}

    public JournalEntry(User user, String entryDate) {
        this.user = user;
        this.meals = new ArrayList<>();
        this.entryDate = entryDate;
        this.createdAt = this.updatedAt = new Date();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JournalEntry journalEntry = (JournalEntry) o;
        return Objects.equals(entryDate, journalEntry.entryDate) &&
                Objects.equals(meals, journalEntry.meals);
    }

    @Override
    public int hashCode() {
        return Objects.hash(entryDate, meals);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(String entryDate) {
        this.entryDate = entryDate;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
                "entryDate=" + entryDate +
                ", meals='" + meals + '\'' +
                ", created_on='" + createdAt + '\'' +
                ", last_updated='" + updatedAt + '\'' +
                ", version=" + version +
                '}';
    }
}

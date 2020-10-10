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

    private @Id
    @GeneratedValue
    Long id;

    @OneToMany(cascade=REMOVE, mappedBy = "journalEntry")
    private List<Meal> meals;

    private Date createdAt;

    private Date updatedAt;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private @Version
    @JsonIgnore
    Long version;

    private JournalEntry() {}

    public JournalEntry(User user) {
        this.user = user;
        this.meals = new ArrayList<>();
        this.createdAt = this.updatedAt = new Date();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JournalEntry JournalEntry = (JournalEntry) o;
        return Objects.equals(id, JournalEntry.id) &&
                Objects.equals(meals, JournalEntry.meals);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, meals);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "JournalEntry{" +
                "id=" + id +
                ", meals='" + meals + '\'' +
                ", created_on='" + createdAt + '\'' +
                ", last_updated='" + updatedAt + '\'' +
                ", version=" + version +
                '}';
    }
}

package com.jjgeastwood.lifetracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import static javax.persistence.CascadeType.REMOVE;

@Entity
@Table(name="meals")
public class Meal {

    private @Id
    @GeneratedValue
    Long id;

    private String name;

    @ManyToMany(mappedBy = "meals")
    private List<Food> foods;

    private Date createdAt;

    private Date updatedAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="journal_entry")
    private JournalEntry journalEntry;

    private @Version
    @JsonIgnore
    Long version;

    private Meal() {}

    public Meal(JournalEntry journalEntry, String name) {
        this.name = name;
        this.foods = new ArrayList<>();
        this.journalEntry = journalEntry;
        this.createdAt = this.updatedAt = new Date();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Meal meal = (Meal) o;
        return Objects.equals(id, meal.id) &&
                Objects.equals(foods, meal.foods);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, foods);
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFoods(List<Food> foods) {
        this.foods = foods;
    }

    public List<Food> getFoods() {
        return foods;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "Meal{" +
                "id=" + id +
                ", foods='" + foods + '\'' +
                ", created_on='" + createdAt + '\'' +
                ", last_updated='" + updatedAt + '\'' +
                ", version=" + version +
                '}';
    }
}

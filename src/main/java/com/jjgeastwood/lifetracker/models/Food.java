package com.jjgeastwood.lifetracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name="foods")
public class Food {

    private @Id
    @GeneratedValue
    Long id;

    private String name;
    private int protein;
    private int carbs;
    private int fats;

    private Date createdAt;

    private Date updatedAt;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "meals_foods",
        joinColumns = { @JoinColumn(name = "meal_id") }
    )
    private Set<Meal> meals;

    private @Version
    @JsonIgnore
    Long version;

    private Food() {}

    public Food(Meal meal, String name, int protein, int carbs, int fats) {
        this.meals = new HashSet<>();
        if (meal != null) {
            this.meals.add(meal);
        }
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fats = fats;
        this.createdAt = this.updatedAt = new Date();
    }

    public Food(String name, int protein, int carbs, int fats) {
        this(null, name, protein, carbs, fats);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Food food = (Food) o;
        return Objects.equals(id, food.id) &&
                Objects.equals(protein, food.protein) &&
                Objects.equals(carbs, food.carbs) &&
                Objects.equals(fats, food.fats);

    }

    @Override
    public int hashCode() {
        return Objects.hash(id, protein, carbs, fats);
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

    public Set<Meal> getMeals() {
        return meals;
    }

    public void setMeals(Set<Meal> meals) {
        this.meals = meals;
    }

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public int getCarbs() {
        return carbs;
    }

    public void setCarbs(int carbs) {
        this.carbs = carbs;
    }

    public int getFats() {
        return fats;
    }

    public void setFats(int fats) {
        this.fats = fats;
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
                ", protein='" + protein + '\'' +
                ", carbs='" + carbs + '\'' +
                ", fats='" + fats + '\'' +
                ", created_on='" + createdAt + '\'' +
                ", last_updated='" + updatedAt + '\'' +
                ", version=" + version +
                '}';
    }
}

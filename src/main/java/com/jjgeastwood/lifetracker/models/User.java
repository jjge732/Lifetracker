package com.jjgeastwood.lifetracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import static javax.persistence.CascadeType.REMOVE;
import static javax.persistence.FetchType.EAGER;

@Entity
@Table(name="users")
public class User {

    private @Id @GeneratedValue Long id;
    private String email;
    private String password;

    private @Version @JsonIgnore Long version;

    @OneToMany(fetch=EAGER, cascade=REMOVE, mappedBy = "user")
    private Set<JournalEntry> journalEntries;

    private User() {}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.journalEntries = new HashSet<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User User = (User) o;
        return Objects.equals(id, User.id) &&
                Objects.equals(email, User.email) &&
                Objects.equals(password, User.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setJournalEntries(Set<JournalEntry> journalEntries) {
        this.journalEntries = journalEntries;
    }

    public Set<JournalEntry> getJournalEntries() {
        return journalEntries;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", journal='" + journalEntries + '\'' +
                ", version=" + version +
                '}';
    }
}

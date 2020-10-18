package com.jjgeastwood.lifetracker.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class JournalEntryId implements Serializable {

    @Column(name="user_id")
    private long userId;
    @Column(name="entry_date")
    private String entryDate;

    public JournalEntryId() {}

    public JournalEntryId(User user, String entryDate) {
        this.userId = user.getId();
        this.entryDate = entryDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JournalEntryId that = (JournalEntryId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(entryDate, that.entryDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, entryDate);
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(User user) {
        this.userId = user.getId();
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(String entryDate) {
        this.entryDate = entryDate;
    }
}

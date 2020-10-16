package com.jjgeastwood.lifetracker.models;

public class AuthenticatedUserResponse {
    private int activeUserId;

    public AuthenticatedUserResponse() {}

    public int getActiveUserId() {
        return activeUserId;
    }

    public void setActiveUserId(int activeUserId) {
        this.activeUserId = activeUserId;
    }
}

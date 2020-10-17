package com.jjgeastwood.lifetracker.models;

public class AuthenticatedUserResponse {
    private long activeUserId;

    private AuthenticatedUserResponse() {}

    public AuthenticatedUserResponse(long activeUserId) {
        this.activeUserId = activeUserId;
    }


    public long getActiveUserId() {
        return activeUserId;
    }

    public void setActiveUserId(long activeUserId) {
        this.activeUserId = activeUserId;
    }
}

package com.jjgeastwood.lifetracker.controllers;

import com.jjgeastwood.lifetracker.models.AuthenticatedUserResponse;
import com.jjgeastwood.lifetracker.models.LoginForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class APIController {

    @PostMapping(value = "/signin")
    @ResponseBody
    public AuthenticatedUserResponse signIn(@RequestBody LoginForm loginForm) {
        return new AuthenticatedUserResponse();
    }

}
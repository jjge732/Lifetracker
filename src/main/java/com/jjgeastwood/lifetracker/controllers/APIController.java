package com.jjgeastwood.lifetracker.controllers;

import com.jjgeastwood.lifetracker.models.JournalEntry;
import com.jjgeastwood.lifetracker.models.LoginForm;
import com.jjgeastwood.lifetracker.models.User;
import com.jjgeastwood.lifetracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/api")
public class APIController {

    private final UserService userService;
    private final SimpleDateFormat sdf;

    @Autowired
    APIController(UserService userService) {
        this.userService = userService;
        this.sdf = new SimpleDateFormat("dd/M/yyyy");
    }

    @PostMapping(value = "/signin")
    @ResponseBody
    public JournalEntry signIn(@RequestBody LoginForm loginForm) {
        User user = userService.loginUser(loginForm.getEmail(), loginForm.getPassword());
        return userService.getJournalEntryByUserAndDate(user, sdf.format(new Date()));
    }

}
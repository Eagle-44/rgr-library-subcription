package com.androsiuk.lab_patterns.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin
@RequestMapping("/")
public class WebController {

    @RequestMapping("/home.html")
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("home.html");
        return modelAndView;
    }

    @RequestMapping("/admin_page.html")
    public ModelAndView adminPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin_page.html");
        return modelAndView;
    }

    @RequestMapping("/monthly_report.html")
    public ModelAndView monthlyReport() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("monthly_report.html");
        return modelAndView;
    }

    @RequestMapping("/return_book_page.html")
    public ModelAndView returnBookPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("return_book_page.html");
        return modelAndView;
    }

    @RequestMapping("/user_account.html")
    public ModelAndView userAccount() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("user_account.html");
        return modelAndView;
    }

}

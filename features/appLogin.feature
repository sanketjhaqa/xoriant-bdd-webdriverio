Feature: To Validate Login Functionality

    Scenario: To Validate User should be able to login with "Valid Credentials"
        Given User should be on login page
        When User log into the app with "standard_user" and "secret_sauce"
        Then User should see text "PRODUCTS"


    Scenario: To Validate Login when Username is "Valid" and Password is "Invalid"
        Given User should be on login page
        When User log into the app with "standard_user" and "InvalidPassword"
        Then User should see text "Username and password do not match any user in this service."


    Scenario: To Validate Login when Username is "InValid" and Password is "Valid"
        Given User should be on login page
        When User log into the app with "wrongUserName" and "secret_sauce"
        Then User should see text "Username and password do not match any user in this service."


    Scenario: To Validate Login when Username and Password is "Invalid"
        Given User should be on login page
        When User log into the app with "random" and "randomTest"
        Then User should see text "Username and password do not match any user in this service."


    Scenario: To Validate Login when Username and Password is "Blank"
        Given User should be on login page
        When User log into the app with "" and ""
        Then User should see text "Username is required"


    Scenario: To Validate Login when Username and Password is "Empty Space"
        Given User should be on login page
        When User log into the app with " " and " "
        Then User should see text "Username and password do not match any user in this service."


Feature: To Validate Login Functionality

    Scenario Outline: To Check Login With Different Dataset
        Given User should be on login page
        When User log into the app with "<username>" and "<password>"
        Then User should see text "PRODUCTS" on dashboard

    Examples: With Valid Data Set
        | username      | password     |
        | standard_user | secret_sauce |
        | random        | random       |  

            

Feature: To Validate Login Functionality

    Scenario Outline: To Check Login With Different Dataset
        Given User should be on login page
        When User log into the app with "<username>" and "<password>"
        Then User should see text "<message>"

    Examples: With Valid Data Set
        | username      | password     | message                                                      |
        | standard_user | secret_sauce | PRODUCTS                                                     |
        | random        | random       | Username and password do not match any user in this service. |

            

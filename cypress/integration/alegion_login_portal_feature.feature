Feature: Alegion Login Portal


@Core
@Negative
Scenario: Login to alegion login page with an invalid user
	Given I open Alegion Login Page
	When I entered an invalid user cred of email "invalid_email@gmail.com" and password "wrong_password"
	Then I verify error message "User does not exist."
	
@Core
@Negative
Scenario: Login to alegion login page with an invalid user email format
	Given I open Alegion Login Page
	When I entered an invalid user cred of email "invalid_email.com" and password "correct_password"
	Then I verify error message "Incorrect email format"
	
@Core
@Negative
Scenario: Contact support redirection test 
	Given I open Alegion Login Page
	When I click on "https://support.alegion.com" link
	Then I verify webpage url "https://support.alegion.com/hc/en-us"
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://portal.alegion.com/'


Given('I open Alegion Login Page', () => {
	cy.visit(url)
})
  
When('I entered an invalid user cred of email {string} and password {string}', (email, password) => {
	cy.get('input#auth-login-email-input')
	.type(email)
	  
	cy.get('input#auth-login-password-input')
	.type(password)

	cy.get('button#auth-login-submit').click()
})

When('I click on {string} link', (link_text) => {
	cy.get('a[href="'+link_text+'"]')
	.click()
})

When('I click on "I am human" checkbox', () => {
	//cy.get('iframe[title="widget containing checkbox for hCaptcha security challenge"]')
	cy.frameLoaded('iframe[title="widget containing checkbox for hCaptcha security challenge"]')
	.iframe('[title="widget containing checkbox for hCaptcha security challenge"]')
	.find('div#checkbox')
	.click()
})

Then('I verify error message {string}', (error_message_str) => {
	cy.contains(error_message_str)
})

Then('I verify webpage url {string}', (webpage_url) => {
	cy.url().should('include', webpage_url)
})


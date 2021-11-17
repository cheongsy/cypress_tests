# cypress_tests

## Pre-requisites
1. Install Node.js. Check the option to install the necessary tools which includes Chocolatey, python package, etc.

## How to run tests
1. Navigate to the project path. (E.g. C:\MyGitRepositories\cypress_tests)
2. To reinstall packages, run this command: npm install
3. To open cypress test runner, run this command:
* Powershell terminal: &"$(npm bin)\cypress" open
* VS Code terminal: $(npm bin)/cypress open
4. Click on the alegion login portal feature to run the test.


## How to run tests in headless mode
1. Navigate to the project path. (E.g. C:\MyGitRepositories\cypress_tests)
2. Run this command: 
* Powershell terminal: &"$(npm bin)\cypress" run --spec **/*.feature

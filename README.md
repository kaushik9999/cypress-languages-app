# RUNNING THE PROJECT

To run Language List app on your local machine, please follow these steps:

1. Fork the project to your Github:

   - Once you have it on your Github, you can clone it and start working on it.

2. Open the project:

   - Open your preferred text editor (we recommend Visual Studio Code).
   - In the text editor, go to `File` > `Open Folder`.
   - Navigate to the cloned project directory and select it to open.

3. Install dependencies:

   - Open a terminal within the text editor or navigate to the project directory using a separate terminal or command prompt.
   - Run the following command to install the project dependencies:
     ```
     npm install
     ```

4. Ensure Node.js LTS is installed:

   - Before running the project, ensure that you have Node.js LTS (Long-Term Support) installed on your machine.
   - You can download the latest LTS version of Node.js from the official Node.js website (https://nodejs.org).

5. Run the project:
   - Once the dependencies are installed, you can start the development server.
   - In the terminal, run the following command:
     ```
     npm run dev
     ```
   - The development server will start, and you'll see an output indicating that the app is running.
   - By default, the app will be accessible at `http://localhost:3000` in your web browser.
   - DISCLAIMER: Remember that this challenge is Front-End focused. There is an API that serves data to the project included under the `pages/api` folder. It returns hard-coded data and it is there only to support the front-end. You are, therefore, not expected to change/test anything from there. In a Next.js application, you also don't need to run or install anything extra so this API works and serve data to the Front-End: the `npm run dev` command you used to run the front-end app will also ensure the back-end works.

Please note that these instructions assume you have Git and npm (Node Package Manager) already installed on your machine. If not, please install them before proceeding.

If you encounter any issues or errors during the setup process, don't hesitate on letting us now.

# TASK 1 - API Test - Completed

There is an API in the project which performs hashing. It accepts email in the request body and returns the calculated hash number. Please use any tools such as Postman, CURL, Insomnia, etc to test and submit a QA report for this testing.
	
**Completed:**
   Tested the hasher API using Postman and created a testing report for the same. Please find this report inside APIQAReport folder as QAReport_HasherApi_Testing.pdf. Please download it before 
   opening it.

# TASKS 2 - 5 - Completed

In the next tasks, you are required to perform automated testing on a React/Next.js application. You are expected to write end-to-end tests using Cypress, unit tests using Jest (or Vitest), and component tests using React Testing Library. Setting up the testing tools (Cypress, Jest/Vitest, and React Testing Library) is part of the evaluation, and you are expected to configure them.

### TASK 2 - Setup - Completed

Before proceeding with the test, please make sure you have completed the following setup steps:

1. Install the necessary tools:
   - Cypress;
   - Jest or Vitest: Choose either Jest or Vitest as your preferred unit testing framework;
   - React Testing Library

**Completed:**

      1. Installed all the necessary tools 
      2. Cypress
      3. Jest
      4. React Testing Library

### TASK 3 - E2E - Completed

- You are expected to automate the test of the Login -> View Languages flow, using Cypress.

**Completed:**

   Automated Login and View Language flows using Cypress

      Run Instructions:
         1. clone the repo.
         2. npm install
         3. npm run dev
         4. npx cypress open OR npm run e2e (this command will run tests in headless mode)

npx cypress open command will open a dashboard, where you can find all the test suites listed(login_test.cy.js for login/languages_list_tests.cy.js for languages list flow), you can click on any of the suites to run it. 

### TASK 4 - Unit Tests - Completed

- You are expected to automate the tests of a minimum of at least 3 react components, pages or function.

**Completed:**

   Automated unit tests for components(Input,Card and Header) and pages(PageApp & PagePublic).

- You are free to choose which Pages, Components, Functions or parts of the code you will test. Choose wisely. Feel free to use JEST/VITEST and React Testing Library.

**Completed:**

   Developed unit tests for components(Input,Card and Header) and pages(PageApp & PagePublic). I used Jest and React Testing Library for this task.
   Configures test command to run the tests. 

         Run Instructions:
           1. npm test

### TASK 5 - Test Scripts - Completed

Once you have set up the testing tools and written the automated tests, you should add the following scripts to the package.json file so the tests can be run:

1. E2E Tests:

   - Command `npm run test:e2e` to execute the E2E tests using Cypress.

**Completed:**
   Added command npm run test:e2e to execute the E2E tests using Cypress.

2. Jest/Vitest and React Testing Library Tests:
   - Command `npm test` to execute the Jest/Vitest and React Testing Library tests.

**Completed:**
   Added command npm test to execute the unit tests.

### TASK BONUS: CI/CD Integration Script

As a bonus, you can create an additional script to run both the E2E tests and Jest/Vitest tests together, and export the Next.js application in a build-ready format, simulating what would happen in a CI/CD pipeline.

**Completed: The Unit Testing Part**
   Added github workflow for unit tests to run through GitHub Actions, Cypress e2e tests workflow is pending for implementation.

# EVALUATION

    - Ability to automate end-to-end (E2E) tests: Evaluate your capability to write automated tests that cover the entire user flow and interact with the application as a user would.

    - Ability to automate component, function, and module tests: Assess your proficiency in writing automated tests for individual components, functions, and modules of the application, ensuring they function correctly in isolation.

    - Ability to write consistent and independent tests: Measure your skill in writing tests that consistently produce predictable results, avoiding flaky tests that may fail intermittently.

    - Ability to install and configure automated testing tools: Evaluate your capability to set up and configure testing tools such as Cypress for E2E tests, Jest/Vitest for unit tests, and React Testing Library for component tests.

    - Proficiency in Git and Git hygiene: Assess your understanding of Git version control and your ability to maintain good Git hygiene, including proper commit messages, branching, and merging practices.

    - Ability to configure test running scripts: Evaluate your capability to set up scripts in the project's package.json file to execute the automated tests, ensuring they are easily runnable by team members.

    - Ability to run tests in a CI/CD environment: Assess your proficiency in configuring the automated tests to run seamlessly within a continuous integration and continuous deployment (CI/CD) environment.

    - Ability to comprehend system functionality and user flows: Evaluate your understanding of how the system functions and your capability to identify and automate user flows, replicating real-world scenarios.

    - Ability to identify corner cases, bugs, and improvement opportunities: Assess your capability to identify edge cases, bugs, and situations not adequately addressed by the code, along with providing suggestions for improvement.

    - Ability to identify and document test cases: Evaluate your proficiency in identifying and documenting test cases, ensuring comprehensive coverage of the application's functionality.

    - Ability to suggest code improvements aligned with best practices: Measure your capability to suggest code improvements and refactoring that align with established best practices and improve the code's quality and maintainability.

    - Ability to perform API testing and submit results.

# DELIVERABLES

Complete the QA Engineer code test, please ensure that you deliver the following items:

## Task 1

QA Report:

- It should indicate the steps performed and the results obtained.
- You are free to deliver the report in whatever format you think is best suited for the task.

## Tasks 2 - 5

Fork this Project:

- Fork the project from this repository to your Github.
- Include all the test tasks you performed, such as E2E tests, component tests, and function/module tests in the forked repository.
- Make sure to add the necessary setup instructions, including the installation and configuration of dependencies and the testing scripts, as suggested throughout the test.
- Document your work, providing a structured overview of what you accomplished during the tasks. You are free to document it in whatever format you think is best suited for the tasks.
- If you have identified areas for code improvement, feel free to make suggestions and provide recommendations aligned with coding best practices.

## Please note the following points while submitting the Tasks:

    - Ensure that the codebase is clean, organized, and follows industry-standard best practices.
    - Include all relevant files, such as test files, configuration files, and updated documentation files, in the PR.
    - If required, provide any additional documentation or instructions to guide the reviewer through your work.

Once you have completed the tasks, please invite the user `rafaelfischerguildhawk` to the forked repository, and send an email to Katie.stagg@guildhawk.com (cc rafael.fischer@guildhawk.com), letting us know the tasks can be reviewed.

Your Test will be reviewed by our team, and we will assess your implementation based on the provided evaluation criteria. Additionally, we will consider the quality and clarity of your documentation, including any suggestions for code improvements and process enhancements.

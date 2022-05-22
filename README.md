# QA_UI_Tech_Assignment

**QA_UI_Tech_Assignment** is an automation testing repository using [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) and [Testcafe](https://testcafe.io/) to automate the most important test scenarios from [www.saucedemo.com](https://www.saucedemo.com/).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Extra: CI/CD with GitHub Actions](#extra-cicd-with-github-actions)
- [Test Plan](#test-plan)
  - [Objective](#objective)
  - [Selection and approach](#selection-and-approach)
  - [Test Suite](#test-suite)
  - [Test deliverables](#test-deliverables)
  - [Insights about test execution results](#insights-about-test-execution-results)
- [Future improvements / Next steps for the suite](#future-improvements--next-steps-for-the-suite)
- [License](#license)

## Installation

#### Requirements
In order to run the tests you need to have installed:
- [Node.js v12.22.8](https://nodejs.org/download/release/v12.22.8/)
- At least one of the next web browsers:
  - [Chrome](https://www.google.com/chrome/)
  - [Firefox](https://www.mozilla.org/en-US/firefox/new/)
  - [Safari](https://www.apple.com/safari/)

Once the requirements have been installed, clone the repo into your local machine and use the next [npm](https://www.npmjs.com/) command being in the root directory to install the project:

```bash
$ npm install
```

## Usage

- The Fixtures / Scenarios are not arranged in any particular order and will execute in testcafe's default alphabetical order (execution order can be customized by ordering the test file if desired).
- Each Fixture / Scenario is independent of one another, this means that is not necessary to run any previous test to execute whichever test on the suite.
- The test suite supports the execution of all tests with the next combinations of browsers and modes, just run one of the next predefined `npm` scripts commands to execute the complete test suite.

Example:
```bash
$ npm run <command>

e.g.
$ npm run test-all-chrome
```

#### Chrome
| Description | Command |
| :----------- | :------- |
| Chrome with window size of 1440x800 | `test-all-chrome` |
| Chrome in headless mode | `test-all-headless-chrome` |
| Chrome simulating an iPhone X | `test-all-iphoneX-chrome` |

#### Firefox
| Description | Command |
| :----------- | :------- |
| Firefox with window size of 1440x800 | `test-all-firefox` |
| Firefox in headless mode | `test-all-headless-firefox` |

#### Safari
| Description | Command |
| :----------- | :------- |
| Safari with default window size | `test-all-firefox` |

  > **Note:** Please refer to [Testcafe's Browser Support documentation](https://testcafe.io/documentation/402828/guides/concepts/browsers#browser-support) to have a complete list of supported browsers.

#### Directly running the suite with Testcafe command

To run the test suite with different settings or specific fixtures or tests please refer to [Testcafe's Run Tests documentation](https://testcafe.io/documentation/402830/guides/basic-guides/run-tests).

## Extra: CI/CD with GitHub Actions
The project integrates [GitHub Actions](https://github.com/features/actions) as its CI/CD platform.

A workflow is already integrated into this repo which automates a full test run in an [Ubuntu](https://ubuntu.com/) virtual machine every time a pull request is created for the `main` branch.

The `.yml` file with the setup can be found in this repo's path: [.github/workflows/saucedemo-test-automation.yml](.github/workflows/saucedemo-test-automation.yml)

##  Test Plan

### Objective

To analyze the scope and provide decent test coverage for the product within a limited time frame with a maximum of 5 automated test scenarios which cover the most important user flows.

### Selection and approach

When having limited resources a QA should have the correct criteria to select and prioritize the most valuable set of tests that will be covered, in this case, the goal of an e-commerce website such as [www.saucedemo.com](https://www.saucedemo.com/) is to sell goods through its platform, therefore the main / most important user flow will be the one that completes the necessary steps in order to finish a successful order.

My approach was to divide this flow into 5 scenarios based on different website modules/pages, each scenario covers the basic, positive and minimum test cases to complete a successful order in their respective module/page plus additional variations such as edge or negative cases.

### Test Suite

| Module / Page                  | Test Scenario / Fixture                                           | Test Case                                                 | Status |
| ------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------- | ------ |
| Login                          | Verify the Login functionality                                    | TC1 - Login with a valid user                             | Passed |
|                                |                                                                   | TC2 - Login with an invalid user                          | Passed |
| Products                       | Verify the Products page functionality and capabilities           | TC3 - Logout from product's page                          | Passed |
|                                |                                                                   | TC4 - Add a single random item to the shopping cart       | Passed |
|                                |                                                                   | TC5 - Add all displayed items to the shopping cart        | Passed |
| Cart                           | Verify the Shopping Cart functionality                            | TC6 - Remove 1 random item from shopping cart             | Passed |
|                                |                                                                   | TC7 - Remove all items from shopping cart                 | Passed |
| Checkout: Your Information     | Verify the user\\'s information filling functionality on Checkout | TC8 - Continue purchase with empty postal code field      | Passed |
|                                |                                                                   | TC9 - Fill all user\\'s information and continue purchase | Passed |
| Checkout: Overview & Complete! | Verify the correct completion of the order on Checkout            | TC10 - Finish an order with all items                     | Passed |


### Test deliverables

| Title | Description |
| ------ | ------- |
| Test repository | A repository containing the code, commands, and documentation about the test coverage and how to run the tests |

### Insights about test execution results

The [www.saucedemo.com](https://www.saucedemo.com/) website is a good exercise to practice basic QA / Automation principles, however being just a demo there are several important defects that I would not expect in a real e-commerce website, for example:
- There's no way of registering a new user.
- You can continue to checkout and even finish an order without any items on the cart.
- There aren't any verifications for the possible inputs you can use on the "Checkout: Your Information" form, for example as long as you fill them with something you can fill all the fields with special characters only or even white spaces and it will allow you to complete the order.
- If you check your product's description page from the shopping cart the only button/option will lead you to the products page instead of returning to the cart page.
- The SWAGLABS logo shown in the header of every page doesn't redirect to anything.
- Both "Terms of Service" and "Privacy Policy" links in the footer don't work.

## Future improvements / Next steps for the suite

- Concurrency: Concurrency is not supported since a global counter keeps track of how many items should be displayed in the cart icon, with different threads adding products at the same time this fails, a different approach is needed to remove this feature to successfully run concurrent tests using the same or different browsers.
-   Use [testcafe's roles](https://testcafe.io/documentation/402845/guides/advanced-guides/authentication#header) for different users
-   Add [screenshots](https://testcafe.io/documentation/402638/reference/configuration-file#screenshots) on failure or even video of the whole test suite
-   Increase coverage (for example checking all links, etc)
-   [Metadata and Filtering](https://testcafe.io/documentation/403436/guides/advanced-guides/metadata-and-filtering) for fixtures or tests, some useful filtering cases are:
    -   By priority
    -   By test suite/type: Smoke, Regression, by module, etc
   - Ongoing code maintenance to keep it clean and scalable.

## License
[MIT](https://choosealicense.com/licenses/mit/)
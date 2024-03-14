Feature: E2E E-Commerece website automation

  @regression
  Scenario: E2E product adding
    Given I open ecommerce website
    When I add products to the cart
    And I valdiate the total prices
    Then select the country and validate the success message



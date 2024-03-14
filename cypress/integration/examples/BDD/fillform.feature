Feature: Filling the form using datatable cucumber
#   @regression
#   Scenario: Fill the form
#     Given I open the website to fill the form
#     When I fill the data in the form
#       | Gender |
#       | Male   |
#       | Female |
#       | Male   |
#       | Female |
#       | Male   |

  Scenario Outline: Filling form using examples
    Given I open the website to fill the form
    When I fill the data in the form using examples "<Name>","<Gender>","<Email>","<Password>","<DOB>"

    Examples: 
      | Name    | Gender | Email      | Password  | DOB        |
      | Gopi    | Male   | a@b.com    | Gopikirab | 1996-05-24 |
      | Deeksha | Female  | a@bhjh.com | jhjhjhj   | 1996-05-24 |

Feature: Car Menu Feature

    Scenario: Land on the home page
        Given I am on the car safety page

    Scenario Outline: Verify Electric Car Menu Options
        When I navigate to cars menu
        When I click on the "Electric" tab
        Then I should see <carMenu> options for <carType> for Electric Cars

        Examples:
            | carMenu         | carType |
            | "XC40 Recharge" | "SUV"   |

    Scenario Outline: Verify Hybrid Car Menu Options
        When I navigate to cars menu
        When I click on the "Hybrid" tab
        Then I should see <carMenu> options for <carType> for Hybrid Cars

        Examples:
            | carMenu         | carType   |
            | "XC90 Recharge" | "SUV"     |
            | "XC60 Recharge" | "SUV"     |
            | "XC40 Recharge" | "SUV"     |
            | "V90 Recharge"  | "Estates" |
            | "V60 Recharge"  | "Estates" |
            | "S90 Recharge"  | "Sedans"  |
            | "S60 Recharge"  | "Sedans"  |

    Scenario Outline: Verify Mild Hybrid Car Menu Options
        When I navigate to cars menu
        When I click on the "Mild-Hybrid" tab
        Then I should see <carMenu> options for <carType> for Mild Hybrid Cars

        Examples:
            | carMenu | carType   |
            | "XC90"  | "SUV"     |
            | "XC60"  | "SUV"     |
            | "XC40"  | "SUV"     |
            | "V90"   | "Estates" |
            | "V60"   | "Estates" |
            | "S90"   | "Sedans"  |
            | "S60"   | "Sedans"  |
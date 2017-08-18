Feature: Hear megaphone

  Megaphones have a range of approximately 5000m

  Scenario: In range megaphone is heard
    Given Lucy is at 0, 0
    And Sean is at 0, 9
    When Sean megaphones
    Then Lucy should hear Sean

  Scenario: Out of range megaphone is not heard
    Given Lucy is at 0, 0
    And Sean is at 0, 5000
    When Sean megaphones
    Then Lucy should hear nothing
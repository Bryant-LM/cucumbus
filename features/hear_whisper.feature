Feature: Hear Whisper

  Whispers have a range of approximately 10m

  Scenario: In range whisper is heard
    Given Lucy is at 0, 0
    And Sean is at 0, 9
    When Sean whispers
    Then Lucy whispers hear Sean

  Scenario: Out of range whisper is not heard
    Given Lucy is at 0, 0
    And Sean is at 0, 100
    When Sean whispers
    Then Lucy whispers hear nothing
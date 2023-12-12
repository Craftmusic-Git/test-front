export enum OnboardingStateEnum {
  NOT_REGISTER = "NOT_REGISTER",
  REGISTERED = "REGISTERED",

  /**
   * Username, and code of conduct checked
   */
  USER_INFORMATION_DONE = "USER_INFORMATION_DONE",

  /**
   * Guild join
   */
  USER_ONBOARDING_COMPLETED = "USER_ONBOARDING_COMPLETED",
}
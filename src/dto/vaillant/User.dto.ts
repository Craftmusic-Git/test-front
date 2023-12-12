import { OnboardingStateEnum } from "@/dto/vaillant/OnboardingState.enum";

export default class UserDto {
  constructor( username: string, discordId: string, onboardingState: OnboardingStateEnum ){
    this.username = username;
    this.discordId = discordId;
    this.onboardingState = onboardingState;
  }

  id?: number;

  username: string;

  discordId: string;

  onboardingState: OnboardingStateEnum;
}
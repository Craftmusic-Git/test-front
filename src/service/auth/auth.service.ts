import AuthClient from "@/clients/auth.client";
import UserDto from "@/dto/vaillant/User.dto";
import { UserNotFoundError } from "@/Error/user-not-found.error";


export class AuthService {

  private AuthClient = new AuthClient();

  public async signIn( user: UserDto ): Promise<UserDto> {
    if (!this.validateUser(user)) {
      throw new Error("User is not valid");
    }

    try {
      const signInResponse = await this.AuthClient.login(user);

      if (signInResponse) {
        return signInResponse;
      }
    }
    catch (error) {
      if (error instanceof UserNotFoundError) {
        return this.register(user)
      }
    }

    throw new UserNotFoundError("User not found");
  }

  private validateUser(user: UserDto): boolean {
    return !!user.discordId && user.discordId !== "";
  }

  private register(user: UserDto): Promise<UserDto> {
    return this.AuthClient.register(user);
  }
}
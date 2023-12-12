import UserDto from "@/dto/vaillant/User.dto";
import { UserNotFoundError } from "@/Error/user-not-found.error";
import { DiscordIdNotFoundError } from "@/Error/discord-id-not-found.error";

export default class AuthClient {

  static readonly BACK_AUTH_URL = "/login";

  static readonly BACK_AUTH_REGISTER_URL = "/register";

  public async login( user: UserDto ): Promise<UserDto>{
    return fetch(`${process.env.BACK_API_URL}${AuthClient.BACK_AUTH_URL}/signin`, {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify(user),
    }).then(value => {
      if (value.status === 404) {
        throw new UserNotFoundError("User not found");
      }
      return value.json();
    })

  }

  public async register( user: UserDto ): Promise<UserDto>{
    return fetch(`${process.env.BACK_API_URL}${AuthClient.BACK_AUTH_REGISTER_URL}/register`, {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify(user),
    }).then(value => value.json())
      .catch(reason => {
        throw new Error(reason);
      });
  }
}
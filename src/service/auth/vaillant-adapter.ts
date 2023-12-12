import { Adapter } from "next-auth/adapters";
import { AuthService } from "@/service/auth/auth.service";

export const VaillantAdapter = ( config: any ): Adapter => {
  const authService = new AuthService();

  return {
    createUser: user => {
      return;
    },
    getUser: id => {
      return;
    },
    getUserByEmail: email => {
      return;
    },
    getUserByAccount: providerAccountId => {
      return;
    },
    updateUser: user => {
      return;
    },
    deleteUser: userId => {
      return;
    },
    linkAccount: account => {
      return;
    },
    unlinkAccount: providerAccountId => {
      return;
    },
    createSession: session => {
      return;
    },
    getSessionAndUser: sessionToken => {
      return;
    },
    updateSession: session => {
      return;
    },
    deleteSession: sessionToken => {
      return;
    },
  } as Adapter;
}
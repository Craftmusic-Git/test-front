import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord"

const handler = NextAuth({
  providers: [DiscordProvider({
    clientId: process.env.DISCORD_CLIENT_ID ?? "1021441762079801344",
    clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "gWuu45jtNip5Map2rUbfV_Tv8mkjH5fr",
  })],
  secret: "MySuperSecretSecret",
  callbacks: {
    async signIn( {user, account, profile} ){
      console.log("signIn")
      console.log(user)
      console.log(account)
      console.log(profile)
      return true
    },
    async redirect( {url, baseUrl} ){
      console.log("redirect")
      console.log(url)
      console.log(baseUrl)
      return baseUrl
    },
    async session( {session, user} ){
      console.log("session")
      console.log(session)
      console.log(user)
      return session
    },
    async jwt( {token, account, profile, isNewUser} ){
      console.log("jwt")
      console.log(token)
      console.log(account)
      console.log(profile)
      console.log(isNewUser)
      return token
    }

  }
})

export { handler as GET, handler as POST }
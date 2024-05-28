import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
export const options = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
    profile(profile){
        console.log("profile", profile)

        let userRole="Github User"
        if(profile.email.includes("simon")){
            userRole="Admin"
        }
        return {
            ...profile,
            role:userRole
        }
    },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        profile(profile){
            console.log("profile", profile)
    return {
                ...profile,
                id:profile.sub,
                role:userRole
            }
        },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name:'credentials',
      credentials:{
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }

      },
      async authorize(credentials, req) {
            const res=await fetch('https://techverse-bzdz.onrender.com/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(credentials)
            })

      const user = await res.json()
      if (res.ok && user) {
        console.log(user.username)
        return user
        
      }
      return null
      }
    
    })
  ],
  callbacks:{
    async jwt({token, user}){
      if(user){
        token.role=user.role
      }
      return token
    },
    async session(session, token){
      session.role=token.role
      return session
    }
  }
}

export default NextAuth(options)
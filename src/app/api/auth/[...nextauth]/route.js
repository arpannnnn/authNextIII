import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import { users } from "../../../../../components/users";
import { signIn } from "next-auth/react";
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Acer Account',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if(!credentials || !credentials?.email ||!credentials?.password)
                return null;
                const user = users.find((u) => u.email === credentials?.email);
                if (user?.password === credentials?.password) {
                    return user
                }
                return null
            }
        })
    ],
    pages:{
        signIn:'/login'
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
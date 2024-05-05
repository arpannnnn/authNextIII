import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Acer Account',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials?.email || !credentials?.password)
                    throw new Error('Email or password is invalid');
                //const user = users.find((u) => u.email === credentials?.email);
                const formData = {
                    email: credentials.email,
                    password: credentials.password
                }
                const payload = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)

                }
                const res = await fetch('http://localhost:3000/api/auth/login', payload);
                const resJson = await res.json();
                const user = resJson.data;
                if (user?.email === credentials?.email) {
                    return user
                }
                else {
                    throw new Error('Invalis Credientials')
                }
            }
        })
    ],
    pages: {
        signIn: '/login',

    },
    Secret: process.env.NextAuth_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24 * 365,//1 year
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("signIn", { user, account, profile, email, credentials })

            return true
        },
        async redirect({ url, baseUrl }) {
            console.log("redirect", { url, baseUrl })

            return baseUrl
        },
        async session({ session, user, token }) {
            console.log("session", { session, user, token })

            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("jwt", { token, user, account, profile, isNewUser })
            return token
        }
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
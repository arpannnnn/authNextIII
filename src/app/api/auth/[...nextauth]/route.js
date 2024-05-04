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
                const formData={
                    email:credentials.email,
                    password:credentials.password
                }
                const payload={
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)

                }
                const res= await fetch('http://localhost:3000/api/auth/login',payload);
                const resJson= await res.json();
                const user=resJson.data;
                if (user?.email === credentials?.email) {
                    return user
                }
                else{
                    throw new Error('Invalis Credientials')
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        
    },
    Secret: process.env.NextAuth_SECRET
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
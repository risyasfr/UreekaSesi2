import NextAuthentication from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuthentication({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (
                    credentials?.email === "text@example.com" &&
                    credentials?.password === "password"
                ) {
                    return { id: 1, name: "Test User", email: "text@example.com", password: "password" };
                }
                return null;
            },
            }),
        ],
        pages: {
            signIn: "/authentication/signin",
        },
        secret: process.env.AUTH_SECRET,  
});
export { handler as GET, handler as POST };
import { redirect } from "next/navigation";

export default function SignUp() {
  const handleSignup = async (formData: FormData) => {
    'use server';
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    //Mock API call to register user
    const response = await fetch("https://jsonplaceholder.typicode.com/user", {
      method: "POST",
      body: JSON.stringify({ email, password}),
    });
    if (response.ok) {
        redirect("/authentication/signin");
    } else {
        throw new Error("Signup failed");
    }
  };

  return(
    <form action="{handleSignup}">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
    </form>
  );
}
"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default async function Home() {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await signIn("credentials", { email, password, redirectTo: "/dashboard" })
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] mt-35 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form>
        {/*{Input box for username}*/}
        {/*{<input 
          type="text"
          placeholder="Enter Your Username"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center"
        /> }*/}

        {/*{Input box for email}*/}
        <input 
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center mt-4"
        />

        {/*{Input box for password}*/}
        <input 
          type="password"
          placeholder="Enter Your Password"
          className="border border-gray-300 rounded p-2 w-full max-w-md items-center mt-4"
        />

        {/*{Button to submit}*/}
        <button
          type="submit"
          className="bg-pink-500 text-white rounded p-2 w-full max-w-md items-center mt-4 hover:bg-pink-700 transition-colors"
          onClick={handleSubmit}
          >
          Submit
        </button>

      </form>
    </div>
  );
}

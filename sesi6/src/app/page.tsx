"use client"
import { getUsers } from "@/client/users";
import { createUser } from "@/server/users";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { create } from "domain";

interface User {
    id: number;
    name: string;
}

export default function Home() {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers })
  
  const queryClient = new QueryClient();

  {/* Mutation */}
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      QueryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    <button onClick={() => createUserMutation.mutate({ id:1, name:"New User" })} className="bg-pink-600 text-white px-4 py-2 rounded">Create User</button>
    
    <h1 className="text-4xl font-bold">Users</h1>
      {/* Buat GET */}
      {query.data?.map((user:User) => (
        <div key={user.id} className="text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>   
        </div>
    ))}
    </div>
  );
}

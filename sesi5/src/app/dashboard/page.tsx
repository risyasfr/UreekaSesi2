import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {         
    const session = await getServerSession();
  
    if (!session) {
        redirect("/authentication/signin");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {session.user?.name || "User"}!</p>
            <p>Email: {session.user?.email}</p>
        </div>
    );
};
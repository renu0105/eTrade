"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  const handleLogin = async () => {
    await signIn("google");
  };
  const handleLogout = async () => {
    await signOut();
  };
  if (session) {
    return <button onClick={handleLogout}>Sign Out</button>;
  }
  return <button onClick={handleLogin}>Sign In</button>;
}

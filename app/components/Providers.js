"use client";

import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthProvider;

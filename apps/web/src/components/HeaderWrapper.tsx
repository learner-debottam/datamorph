"use client"; // ← Important: makes this a client component

import Header from "./Header";
import { useAuth } from "../app/context/AuthContext";

export default function HeaderWrapper() {
  const { user, isAuthenticated } = useAuth();

  return (
    <Header
      isAuthenticated={isAuthenticated}
      userRole={user?.role ?? "guest"}
      userName={user?.name ?? ""}
    />
  );
}

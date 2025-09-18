"use client";

import Header from "./Header";
import { useAuth } from "../app/context/AuthContext";

export default function ClientHeaderWrapper() {
  const { user, isAuthenticated } = useAuth();

  return (
    <Header
      isAuthenticated={isAuthenticated}
      userRole={user?.role ?? "guest"}
      userName={user?.name ?? ""}
    />
  );
}

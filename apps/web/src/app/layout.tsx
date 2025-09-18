import "../styles/globals.css";
import Footer from "../components/Footer";
import ClientHeaderWrapper from "../components/ClientHeaderWrapper";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "../components/ErrorBoundary";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>DataMorph</title>
        <meta
          name="description"
          content="AI-powered low-code/no-code data transformation platform"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ErrorBoundary>
          <AuthProvider>
            <ClientHeaderWrapper />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

import ClientHeaderWrapper from "../components/ClientHeaderWrapper";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientHeaderWrapper />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl mb-6">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

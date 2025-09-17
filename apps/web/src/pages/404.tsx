import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-center mb-6 max-w-md">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Go Back Home
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}

interface FooterProps {
  role?: "admin" | "analyst" | "guest";
}

export default function Footer({ role = "guest" }: FooterProps) {
  const navLinks = role === "admin"
    ? ["Admin Panel", "Privacy", "Terms", "Contact"]
    : ["Privacy", "Terms", "Contact"];

  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2025 DataMorph. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

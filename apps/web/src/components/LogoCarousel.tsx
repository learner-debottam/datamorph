const logos = [
  "/logos/google.png",
  "/logos/microsoft.png",
  "/logos/aws.png",
  "/logos/salesforce.png",
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto flex justify-center items-center gap-12 flex-wrap">
        {logos.map((logo) => (
          <img key={logo} src={logo} alt="Logo" className="h-12 grayscale hover:grayscale-0 transition" />
        ))}
      </div>
    </section>
  );
}

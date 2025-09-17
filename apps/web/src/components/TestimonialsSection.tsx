"use client";

import TestimonialsCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Integration Engineer",
    quote: "DataMorph reduced our integration time by 70%! The AI suggestions are spot-on.",
  },
  {
    name: "Michael Smith",
    role: "Business Analyst",
    quote: "I can now configure transformations without writing a single line of code.",
  },
  {
    name: "Sara Lee",
    role: "Enterprise Architect",
    quote: "Full lineage tracking and compliance features are a game-changer.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialsCard
              key={idx}
              name={t.name}
              role={t.role}
              quote={t.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

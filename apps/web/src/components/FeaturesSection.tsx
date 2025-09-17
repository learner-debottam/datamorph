"use client";

import FeaturesCard from "../components/FeatureCard";

const features = [
  { title: "AI Schema Mapping", description: "Automatically detect source and target fields." },
  { title: "Low-Code Designer", description: "Drag-and-drop transformations with ease." },
  { title: "Reusable Templates", description: "Save, share, and monetize transformation templates." },
  { title: "Real-Time & Batch Support", description: "Handle billions of records efficiently." },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <FeaturesCard key={idx} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

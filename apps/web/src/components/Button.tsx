interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Button({ label, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const style =
    variant === "primary"
      ? "bg-white text-blue-600 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return <button className={`${base} ${style}`}>{label}</button>;
}

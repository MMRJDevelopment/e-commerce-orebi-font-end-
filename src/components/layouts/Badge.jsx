
export default function Badge({ title, className }) {
  return <span className={`px-7 py-2 inline-block absolute top-0 left-0 text-white font-sans font-bold text-sm bg-primary ${className}`}>{title}</span>;
}

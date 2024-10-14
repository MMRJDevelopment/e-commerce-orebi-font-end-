export default function Heading({ className, title }) {
  return (
    <div className={`text-[39px] font-bold	font-sans text-primary ${className}`}>
      {title}
    </div>
  );
}

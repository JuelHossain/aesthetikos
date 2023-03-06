// all imports

export default function SectionTitle({ children, ...props }) {
  return (
    <div className="w-full text-main-6 text-xl xs:text-2xl  md:text-3xl">
      <h2 {...props}>{children}</h2>
    </div>
  );
}

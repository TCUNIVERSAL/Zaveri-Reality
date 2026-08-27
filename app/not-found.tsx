import CubeButton from "@/components/CubeButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgColor text-contentColor px-4 text-center">
      <div className="space-y-6 max-w-lg">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-none">
          Lost in the Blueprint
        </h1>
        <p className="font-sans text-grey-700 text-base sm:text-lg leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us guide you back to solid ground.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <CubeButton href="/" label="Return Home" ariaLabel="Return to homepage" />
          <CubeButton href="/works" label="View Our Works" ariaLabel="Browse our portfolio" />
        </div>
      </div>
    </div>
  );
}

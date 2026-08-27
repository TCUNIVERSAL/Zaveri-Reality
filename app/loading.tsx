export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgColor">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-2 border-grey-200 rounded-full" />
          <div className="absolute inset-0 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-500">
          Loading
        </span>
      </div>
    </div>
  );
}

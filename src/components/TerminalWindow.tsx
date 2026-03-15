interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  command?: string;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
  command,
}: TerminalWindowProps) {
  return (
    <div className={`rounded-lg border border-green-900/50 bg-[#0a0f0a] overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1a0d] border-b border-green-900/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-green-600 font-mono ml-2">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4 md:p-6 font-mono">
        {command && (
          <div className="text-green-500 text-sm mb-4">
            <span className="text-green-700">$</span> {command}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

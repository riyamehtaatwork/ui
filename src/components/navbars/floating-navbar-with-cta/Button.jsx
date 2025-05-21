export function Button({ className = "", children }) {
  return (
    <button
      className={`px-6 sm:px-8 py-2 rounded-full relative bg-slate-100/8 text-white text-sm sm:text-base transition duration-200 border border-slate-600/20 dark:hover:shadow-slate-200/8 hover:bg-slate-700/10 hover:shadow-xl hover:cursor-pointer ${className}`}
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="relative z-20 text-slate-700 dark:text-slate-200">
        {children}
      </span>
    </button>
  );
}

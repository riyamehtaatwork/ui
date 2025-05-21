import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(18rem,_1fr)] max-w-7xl mx-auto",
        "max-sm:gap-0",
        "max-sm:gap-y-4", // Add this class for vertical gap on extra small screens
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, imageUrl }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group relative overflow-hidden transition duration-300 shadow-lg dark:shadow-xl hover:shadow-2xl bg-[#fff]/5 border border-transparent",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="relative h-full w-full bg-cover bg-center transition-all duration-300 group-hover:h-2/3 max-sm:h-full max-sm:group-hover:h-2/3"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-auto bg-[#181728]/70 px-5 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-xl shadow-md">
        <h3 className="font-sans font-bold text-white text-xl">{title}</h3>
        <p className="font-sans font-normal text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

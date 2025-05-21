import { motion } from "framer-motion";
export function HeaderWithWordsAppearingOneByOne() {
  return (
    <div className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center px-4 py-10 ">
      <h1 className="relative z-10 mx-auto max-w-4xl font-bold text-center text-2xl max-lg:font-extrabold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
        {"Better Products, Fine Manufacturing".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 max-lg:font-semibold dark:text-neutral-400"
      >
        Talented engineers at work for your precision manufacturing needs
      </motion.p>
    </div>
  );
}

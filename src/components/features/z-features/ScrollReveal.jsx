import React from "react";
import { useInView } from "react-intersection-observer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  initialOpacity = 0,
  initialY = 50,
  duration = 0.6,
  delay = 0.2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: initialOpacity, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration, ease: "easeInOut", delay: delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

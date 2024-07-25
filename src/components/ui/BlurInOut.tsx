import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: String;
};

function BlurInOut({ children, className }: Props) {
  return (
    <motion.div
      className={`absolute inset-0 z-20 ${className}`}
      initial={{ filter: "blur(2rem)" }}
      animate={{ filter: "blur(0)" }}
      exit={{ filter: "blur(2rem)" }}
      transition={{ duration: 1, ease: [1, 0, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default BlurInOut;

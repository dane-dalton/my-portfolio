import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: String;
};

function BlurInOut({ children, className }: Props) {
  return (
    <motion.div
      className={`absolute inset-0 z-20 ${className}`}
      initial={{ filter: "blur(2rem)", opacity: 0.1 }}
      animate={{ filter: "blur(0)", opacity: 1 }}
      exit={{ filter: "blur(2rem)", opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default BlurInOut;

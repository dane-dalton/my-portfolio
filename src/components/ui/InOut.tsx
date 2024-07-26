import { motion } from "framer-motion";
import { classNames } from "../../utils";

type Props = {
  children: React.ReactNode;
  className?: String;
};

function InOut({ children, className }: Props) {
  return (
    <motion.div
      className={classNames(`${className}`)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default InOut;

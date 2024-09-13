import { motion } from 'framer-motion';

const RightToLeftAnimation = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}  // Start from the right edge
      animate={{ x: 0 }}       // Move to the original position (left)
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'green'
      }}
    />
  );
};

export default RightToLeftAnimation
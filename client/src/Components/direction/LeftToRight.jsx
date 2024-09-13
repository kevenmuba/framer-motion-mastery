import { motion } from 'framer-motion';

const LeftToRightAnimation = () => {
  return (
    <motion.div
      initial={{ x: 0 }} // Start from the left (current position)
      animate={{ x: 200 }} // Move 200 pixels to the right
      transition={{ duration: 0.5, ease: "easeInOut" }} // Optional: control animation timing
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red'
      }}
    />
  );
};
export default LeftToRightAnimation
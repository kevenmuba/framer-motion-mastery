import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, x: 100 }}
      transition={{ duration: 0.6 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#3498db',
        borderRadius: 10,
      }}
    />
  );
};

export default AnimatedBox;
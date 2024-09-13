import React from 'react';
import { motion } from 'framer-motion';

const BottomToTopFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start from below and invisible
      animate={{ opacity: 1, y: 0 }}  // End at natural position and fully visible
      transition={{ duration: 0.5 }}  // Animation duration
      style={{
        padding: '20px',
        background: 'lightgreen',
        borderRadius: '5px',
        margin: '10px'
      }}
    >
      Fading in from Bottom to Top
    </motion.div>
  );
};

export default BottomToTopFade;
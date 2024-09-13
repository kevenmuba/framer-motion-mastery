import React from 'react';
import { motion } from 'framer-motion';

const TopToBottomFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150 }} // Start from above and invisible
      animate={{ opacity: 1, y: 0 }}   // End at natural position and fully visible
      transition={{ duration: 0.5 }}   // Animation duration
      style={{
        padding: '20px',
        background: 'lightblue',
        borderRadius: '5px',
        margin: '10px'
      }}
    >
      Fading in from Top to Bottom
    </motion.div>
  );
};

export default TopToBottomFade;
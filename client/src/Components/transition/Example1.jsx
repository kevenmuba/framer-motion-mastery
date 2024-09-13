import React from 'react';
import { motion } from 'framer-motion';

const FramerMotionExamples = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '2rem',
  };

  const boxStyle = {
    width: 100,
    height: 100,
    background: 'blue',
    borderRadius: 10,
  };

  return (
    <div>
      {/* Basic Level */}
      <h2>Basic Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          style={boxStyle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          style={boxStyle}
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      {/* Intermediate Level */}
      <h2>Intermediate Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity }}
        />
        <motion.div
          style={boxStyle}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.div
          style={boxStyle}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, times: [0, 0.5, 1], ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Advanced Level */}
      <h2>Advanced Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              style={{ width: 20, height: 20, background: 'white', margin: 5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            />
          ))}
        </motion.div>
        <motion.div
          style={boxStyle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8 }}
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          transition={{ type: "spring", damping: 10 }}
        />
        <motion.div
          style={boxStyle}
          animate={{
            borderRadius: [10, 50, 10],
            rotate: [0, 180, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </div>
  );
};

export default FramerMotionExamples;
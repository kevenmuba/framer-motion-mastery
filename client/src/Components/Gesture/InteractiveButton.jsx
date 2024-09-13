import React from 'react';
import { motion } from 'framer-motion';

const GestureShowcase = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '2rem',
  };

  const boxStyle = {
    width: 100,
    height: 100,
    backgroundColor: '#3498db',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gesture Animations Showcase</h1>

      {/* Beginner Level */}
      <h2>Beginner Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hover & Tap
        </motion.div>

        <motion.div
          style={boxStyle}
          whileHover={{ rotate: 15 }}
          whileTap={{ rotate: -15 }}
        >
          Rotate
        </motion.div>

        <motion.div
          style={boxStyle}
          whileHover={{ backgroundColor: '#e74c3c' }}
          whileTap={{ backgroundColor: '#c0392b' }}
        >
          Color Change
        </motion.div>
      </div>

      {/* Intermediate Level */}
      <h2>Intermediate Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(255,255,255)' }}
          whileTap={{ scale: 1.05, boxShadow: '0px 0px 4px rgb(255,255,255)' }}
        >
          Glow Effect
        </motion.div>

        <motion.div
          style={boxStyle}
          whileHover={{ y: -10 }}
          whileTap={{ y: 10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Spring Motion
        </motion.div>

        <motion.div
          style={boxStyle}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          Rotate & Scale
        </motion.div>
      </div>

      {/* Advanced Level */}
      <h2>Advanced Level</h2>
      <div style={containerStyle}>
        <motion.div
          style={boxStyle}
          whileHover={(event) => ({ scale: 1.1, rotate: event.clientX % 360 })}
          whileTap={{ scale: 0.9 }}
        >
          Dynamic Rotate
        </motion.div>

        <motion.div
          style={boxStyle}
          whileHover={{
            scale: [1, 1.1, 1, 1.1, 1],
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 1 }
          }}
          whileTap={{ scale: 0.8 }}
        >
          Keyframes
        </motion.div>

        <motion.div
          style={{...boxStyle, overflow: 'hidden'}}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#3498db',
            }}
            variants={{
              hover: {
                scale: 1.2,
                backgroundColor: '#e74c3c',
              },
              tap: {
                scale: 0.8,
                backgroundColor: '#2ecc71',
              }
            }}
          >
            Nested Motion
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GestureShowcase;
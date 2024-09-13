import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const DragShowcase = () => {
  const constraintsRef = useRef(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Drag Functionality Showcase</h1>

      {/* Beginner Level */}
      <h2>Beginner: Basic Drag</h2>
      <motion.div
        drag
        style={{
          width: 100,
          height: 100,
          background: 'blue',
          borderRadius: 10,
          margin: '20px 0',
        }}
      />

      {/* Intermediate Level */}
      <h2>Intermediate: Constrained Drag</h2>
      <div
        ref={constraintsRef}
        style={{
          width: 300,
          height: 300,
          border: '2px solid black',
          position: 'relative',
        }}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.5}
          whileDrag={{ scale: 1.2 }}
          style={{
            width: 100,
            height: 100,
            background: 'green',
            borderRadius: 10,
            cursor: 'grab',
          }}
        />
      </div>

      {/* Advanced Level */}
      <h2>Advanced: Directional Drag with Momentum</h2>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragSnapToOrigin
        whileDrag={{ 
          scale: 1.1,
          boxShadow: "0px 10px 15px rgba(0,0,0,0.3)"
        }}
        style={{
          width: 150,
          height: 150,
          background: 'red',
          borderRadius: 20,
          margin: '20px 0',
          cursor: 'grab',
        }}
      />
    </div>
  );
};

export default DragShowcase;
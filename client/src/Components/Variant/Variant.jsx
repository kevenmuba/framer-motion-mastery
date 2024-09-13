import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VariantsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Beginner level variants
  const basicVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Intermediate level variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Advanced level variants
  const advancedVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const images = [
    'https://picsum.photos/id/1018/300/200/',
    'https://picsum.photos/id/1015/300/200/',
    'https://picsum.photos/id/1019/300/200/',
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Framer Motion Variants Showcase</h1>

      {/* Beginner Level */}
      <h2>Beginner Level</h2>
      <motion.div
        variants={basicVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <p>This text fades in and moves up.</p>
      </motion.div>

      {/* Intermediate Level */}
      <h2>Intermediate Level</h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ listStyle: 'none', padding: 0 }}
      >
        {['Apple', 'Banana', 'Cherry', 'Date'].map((item, index) => (
          <motion.li key={index} variants={itemVariants} style={{ marginBottom: '10px' }}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Advanced Level */}
      <h2>Advanced Level</h2>
      <div style={{ overflow: 'hidden', position: 'relative', height: '200px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={advancedVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </AnimatePresence>
        <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => paginate(-1)} style={{ background: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>{'<'}</button>
          <button onClick={() => paginate(1)} style={{ background: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default VariantsShowcase;
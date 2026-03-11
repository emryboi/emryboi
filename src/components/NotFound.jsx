import React from 'react';
import { motion } from 'framer-motion';
import { Home, Frown } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-dark text-light">
      <div className="text-center p-8 flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        >
          <Frown size={80} className="text-primary" />
        </motion.div>
        
        <h1 className="text-8xl font-black text-light tracking-widest">404</h1>
        
        <p className="text-gray-400 text-xl max-w-md">
          Oops! Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist.
        </p>
        
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-8 py-4 bg-primary text-dark font-semibold rounded-md mt-4"
        >
          <Home size={20} />
          Go back to Home
        </motion.a>
      </div>
    </section>
  );
};

export default NotFound; 
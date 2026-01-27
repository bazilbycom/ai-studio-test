
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    onClick={() => window.location.hash = ''}
    className={`flex items-center cursor-pointer ${className}`}
  >
    <img 
      src="https://bycomsolutions.com/wp-content/uploads/2026/01/Asset-1@300x.png" 
      alt="Bycom Solutions" 
      className="h-full w-auto object-contain brightness-0 invert"
    />
  </motion.div>
);

export default Logo;

import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero1.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full   overflow-hidden bg-gradient-to-br from-blue-500 to-neutral/20">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2 }}
      >
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full  object-cover object-top filter brightness-75"
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral/20 to-neutral/20 " />

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Main Content */}
      <div className="relative z-20 h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white font-serif tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block transform hover:scale-105 transition-transform duration-300">
              Upgrade
            </span>{" "}
            <br className="md:hidden" />
            Your Style,
            <br />
            <span className="italic">Effortless Style</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-200 leading-relaxed font-light"
          >
            Discover our exclusive collections crafted for the modern lifestyle.
            <br className="hidden md:block" />
            Elevate your wardrobe with timeless pieces that speak volumes.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8"
          >
            {" "}
            <Link to="/collections" className="relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-primary hover:bg-primary/80 text-white font-medium px-10 py-4 rounded-full shadow-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Shop Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "soft-light" }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-sm tracking-widest">
              SCROLL
            </span>
            <div className="w-0.5 h-5 bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;

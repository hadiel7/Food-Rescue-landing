import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-green-50 px-6 text-center">
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-greenPrimary mb-6 max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Combata o desperdício, salve vidas!
      </motion.h2>
      <motion.p
        className="text-xl text-gray-700 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Conectamos doadores, instituições e voluntários para um mundo com menos fome.
      </motion.p>
    </section>
  );
};

export default Hero;

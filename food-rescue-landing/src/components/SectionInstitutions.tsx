import { useEffect, useState } from 'react';
import { getInstitutions } from '@/utils/api';
import { motion } from 'framer-motion';

interface Institution {
  id: number;
  name: string;
  description: string;
}

const SectionInstitutions = () => {
  const [institutions, setInstitutions] = useState<Institution[]>([]);

  useEffect(() => {
    getInstitutions().then((res) => setInstitutions(res.data));
  }, []);

  return (
    <section id="institutions" className="py-16 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-greenPrimary mb-12 text-center">Instituições Parceiras</h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {institutions.map(({ id, name, description }) => (
          <motion.div
            key={id}
            className="bg-green-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-default"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-xl font-semibold mb-2">{name}</h4>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionInstitutions;

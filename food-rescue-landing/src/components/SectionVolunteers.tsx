import { useEffect, useState } from 'react';
import { getVolunteers } from '@/utils/api';
import { motion } from 'framer-motion';

interface Volunteer {
  id: number;
  name: string;
  email: string;
}

const SectionVolunteers = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    getVolunteers().then((res) => setVolunteers(res.data));
  }, []);

  return (
    <section id="volunteers" className="py-16 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-greenPrimary mb-12 text-center">Voluntários</h3>
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
        {volunteers.map(({ id, name, email }) => (
          <motion.div
            key={id}
            className="bg-green-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-default"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-xl font-semibold mb-1">{name}</h4>
            <p className="text-gray-700">Contato: {email}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionVolunteers;

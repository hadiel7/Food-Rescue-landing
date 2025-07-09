import { useEffect, useState } from 'react';
import { getDonations } from '@/utils/api';
import { motion } from 'framer-motion';

interface Donation {
  id: number;
  item: string;
  quantity: number;
  donorName: string;
}

const SectionDonations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    getDonations().then((res) => setDonations(res.data));
  }, []);

  return (
    <section id="donations" className="py-16 px-6 bg-gray-50 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-greenPrimary mb-12 text-center">Doações Recentes</h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {donations.map(({ id, item, quantity, donorName }) => (
          <motion.div
            key={id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-default"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-xl font-semibold text-greenPrimary mb-2">{item}</h4>
            <p className="text-gray-700">Quantidade: {quantity}</p>
            <p className="mt-1 text-gray-500 text-sm">Doador: {donorName}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionDonations;

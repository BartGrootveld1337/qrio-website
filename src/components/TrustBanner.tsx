import { Shield, Lock, Award, FileCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBanner = () => {
  const trustItems = [
    { icon: Shield, label: "AVG/GDPR Compliant" },
    { icon: Lock, label: "Veilig omgaan met data" },
    { icon: Award, label: "AI Act Ready" },
    { icon: FileCheck, label: "ISO 27001 Voorbereid" },
    { icon: Clock, label: "Verhoogde productiviteit" },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <item.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;

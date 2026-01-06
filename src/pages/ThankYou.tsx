import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Bedankt voor je bericht!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We hebben je aanvraag in goede orde ontvangen. Een van onze experts neemt binnen 24 uur contact met je op om de mogelijkheden te bespreken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/25"
            >
              <ArrowLeft size={20} />
              Terug naar Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;

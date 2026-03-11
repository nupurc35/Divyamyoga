import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, 
  Star, Instagram, Facebook, Twitter, 
  Leaf, Flower2, HeartPulse, ShieldCheck, 
  Users, Brain, CheckCircle, MessageCircle,
  ArrowRight, Calendar, User, Send
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'blog' | 'booking' | 'contact';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'booking', label: 'Book Now' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-beige-warm/95 backdrop-blur-md z-50 shadow-sm border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex flex-col cursor-pointer" onClick={() => setActivePage('home')}>
            <span className="font-display text-2xl font-bold text-teal-deep leading-tight">DIVYAM YOGA</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-sage font-bold">& Wellness Centre</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activePage === link.id ? 'text-teal-deep' : 'text-charcoal/70 hover:text-teal-deep'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-deep"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-teal-deep p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige-warm border-t border-charcoal/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    activePage === link.id ? 'bg-teal-deep text-white' : 'text-charcoal/70 hover:bg-sage/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <footer className="bg-teal-deep text-beige-warm pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-display text-3xl font-bold mb-6">DIVYAM YOGA</div>
            <p className="text-beige-warm/70 mb-8 leading-relaxed">
              Empowering your journey towards holistic health and positivity through ancient wisdom and natural healing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sage transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sage transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-sage transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-beige-warm/70">
              {['home', 'about', 'services', 'gallery', 'testimonials'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setActivePage(page as Page)}
                    className="hover:text-white transition-all hover:translate-x-1 capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-beige-warm/70">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-sage" />
                <span>House No. 52, Navin Path, Khanapara, Guwahati, Assam 781022</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-sage" />
                <a href="tel:09555877368">095558 77368</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-sage" />
                <span>info@divyamyoga.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-beige-warm/10 pt-8 text-center text-sm text-beige-warm/50">
          &copy; {new Date().getFullYear()} Divyam Yoga & Wellness Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919555877368?text=Hi,%20I'd%20like%20to%20book%20a%20yoga%20class%20at%20Divyam%20Yoga%20%26%20Wellness%20Centre"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      WhatsApp Us
    </span>
  </a>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-teal-deep mb-4"
    >
      {title}
    </motion.h2>
    <div className="w-20 h-1 bg-sage mx-auto mb-4" />
    {subtitle && <p className="text-charcoal/60 max-w-2xl mx-auto italic">{subtitle}</p>}
  </div>
);

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" 
            alt="Yoga Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-teal-deep/30 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
          >
            Divyam Yoga & Wellness Centre
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl font-display italic mb-12 opacity-90"
          >
            "A Place Full of Positivity"
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setActivePage('booking')}
            className="bg-white text-teal-deep px-10 py-4 rounded-full font-bold text-lg hover:bg-sage hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Book a Class
          </motion.button>
        </div>
      </section>

      {/* Highlights Strip */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Google Rating', value: '5.0 ⭐' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Happy Students', value: '500+' },
            { label: 'Wellness Services', value: '8+' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl font-bold text-teal-deep mb-1">{item.value}</div>
              <div className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Services Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <SectionTitle title="Our Core Services" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Flower2 size={40} />, title: "Yoga Classes", desc: "From beginners to advanced practitioners, find your flow with our expert guidance." },
            { icon: <Leaf size={40} />, title: "Panchakarma", desc: "Traditional Ayurvedic detoxification to cleanse your body and rejuvenate your spirit." },
            { icon: <HeartPulse size={40} />, title: "Naturopathy", desc: "Natural healing therapies focused on the body's innate ability to heal itself." },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-lg text-center border border-charcoal/5"
            >
              <div className="text-sage mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-teal-deep mb-4">{service.title}</h3>
              <p className="text-charcoal/70 mb-8">{service.desc}</p>
              <button 
                onClick={() => setActivePage('services')}
                className="text-teal-deep font-bold flex items-center justify-center mx-auto hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-sage/10 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#f1c40f" className="text-[#f1c40f]" />)}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-display italic text-teal-deep leading-relaxed mb-8"
          >
            "Celebrated Yoga Day with lots of enthusiasm, received a gift from Sir. Great place full of positivity"
          </motion.p>
          <div className="font-bold text-charcoal">— Barasha Bharali (Local Guide)</div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-deep py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your wellness journey?</h2>
          <p className="text-beige-warm/70 mb-12 text-lg max-w-2xl mx-auto">Join our community and experience the power of yoga and natural healing.</p>
          <button 
            onClick={() => setActivePage('booking')}
            className="bg-beige-warm text-teal-deep px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
          >
            Reserve Your Spot
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Our Story & Mission" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-charcoal/80 leading-relaxed"
        >
          <p>Divyam Yoga & Wellness Centre was founded with a simple yet profound vision: to create a sanctuary where individuals can reconnect with their inner selves through the ancient wisdom of Yoga and Naturopathy.</p>
          <p>Located in the heart of Guwahati, we provide a peaceful environment away from the city's hustle, dedicated to holistic healing and spiritual growth. Our mission is to empower our students with the tools they need to lead a balanced, healthy, and positive life.</p>
          <p>We believe that wellness is not just the absence of disease, but a state of complete physical, mental, and social well-being.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1545201071-75f058a69418?auto=format&fit=crop&q=80&w=800" 
            alt="Yoga Studio" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 bg-sage text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <div className="text-4xl font-bold mb-1">10+</div>
            <div className="text-xs uppercase tracking-widest font-bold">Years of Peace</div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl mb-32">
        <SectionTitle title="Meet the Instructor" />
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600" 
            alt="Yoga Instructor" 
            className="w-full md:w-[400px] h-[500px] object-cover rounded-2xl shadow-lg"
            referrerPolicy="no-referrer"
          />
          <div className="flex-1">
            <h3 className="text-4xl font-bold text-teal-deep mb-2">Acharya Divyam</h3>
            <p className="text-sage font-bold italic mb-6">Certified Yoga Master & Naturopath</p>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              With over 15 years of experience in traditional yoga and naturopathy, Acharya Divyam has dedicated his life to teaching the art of mindful living. His approach combines classical Hatha yoga with modern therapeutic techniques to address various lifestyle ailments.
            </p>
            <div className="flex flex-wrap gap-3">
              {['RYT 500', 'Naturopathy Specialist', 'Meditation Guide'].map(tag => (
                <span key={tag} className="bg-beige-warm px-4 py-2 rounded-full text-sm font-bold text-teal-deep">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Brain size={40} />, title: "Peace", desc: "Cultivating inner stillness in a chaotic world." },
          { icon: <Leaf size={40} />, title: "Healing", desc: "Restoring balance through natural therapies." },
          { icon: <ArrowRight size={40} />, title: "Growth", desc: "Continuous evolution of body, mind, and soul." },
        ].map((val, i) => (
          <div key={i} className="text-center p-10 bg-white rounded-3xl shadow-lg border border-charcoal/5">
            <div className="text-sage mb-6 flex justify-center">{val.icon}</div>
            <h3 className="text-2xl font-bold text-teal-deep mb-4">{val.title}</h3>
            <p className="text-charcoal/60">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesPage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  const services = [
    { icon: <Flower2 size={40} />, title: "Yoga Classes", desc: "Personalized sessions ranging from Hatha and Vinyasa to specialized therapeutic yoga for all age groups and skill levels." },
    { icon: <Leaf size={40} />, title: "Panchakarma", desc: "Five-fold Ayurvedic detoxification process including Vamana, Virechana, Basti, Nasya, and Raktamokshana for deep cleansing." },
    { icon: <HeartPulse size={40} />, title: "Naturopathy Therapy", desc: "Drugless healing using the five elements of nature: Earth (Mud therapy), Water (Hydrotherapy), Air, Fire, and Ether." },
    { icon: <ShieldCheck size={40} />, title: "Ailment Treatment", desc: "Natural management of chronic conditions like back pain, obesity, diabetes, hypertension, and respiratory issues." },
    { icon: <Users size={40} />, title: "Wellness Counselling", desc: "One-on-one sessions to help you navigate lifestyle changes, dietary habits, and mental stress management." },
    { icon: <Brain size={40} />, title: "Meditation & Pranayama", desc: "Techniques to calm the mind and master the breath, leading to enhanced focus and reduced anxiety." },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Our Services" subtitle="Holistic solutions for your well-being" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all border border-charcoal/5 group"
          >
            <div className="text-sage mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h3 className="text-2xl font-bold text-teal-deep mb-4">{service.title}</h3>
            <p className="text-charcoal/70 mb-8 leading-relaxed">{service.desc}</p>
            <button 
              onClick={() => setActivePage('booking')}
              className="bg-teal-deep text-white px-8 py-3 rounded-full font-bold hover:bg-sage transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, cat: 'classes', url: 'https://placehold.co/600x600/7a9e7e/ffffff?text=Yoga+Class+1' },
    { id: 2, cat: 'studio', url: 'https://placehold.co/600x600/2d6a4f/ffffff?text=Studio+View' },
    { id: 3, cat: 'events', url: 'https://placehold.co/600x600/f5f0e8/2c2c2c?text=Yoga+Day+Celebration' },
    { id: 4, cat: 'classes', url: 'https://placehold.co/600x600/7a9e7e/ffffff?text=Meditation+Session' },
    { id: 5, cat: 'studio', url: 'https://placehold.co/600x600/2d6a4f/ffffff?text=Reception+Area' },
    { id: 6, cat: 'events', url: 'https://placehold.co/600x600/f5f0e8/2c2c2c?text=Workshop+2024' },
    { id: 7, cat: 'classes', url: 'https://placehold.co/600x600/7a9e7e/ffffff?text=Advanced+Yoga' },
    { id: 8, cat: 'studio', url: 'https://placehold.co/600x600/2d6a4f/ffffff?text=Therapy+Room' },
  ];

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.cat === filter);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Our Gallery" />
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'classes', 'events', 'studio'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-8 py-2 rounded-full font-bold transition-all capitalize ${
              filter === f ? 'bg-teal-deep text-white shadow-lg' : 'bg-white text-teal-deep hover:bg-sage/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence mode='popLayout'>
          {filtered.map(item => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelectedImg(item.url)}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md"
            >
              <img src={item.url} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-teal-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Star className="text-white" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4"
          >
            <button className="absolute top-8 right-8 text-white"><X size={40} /></button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-full rounded-lg shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TestimonialsPage = () => {
  const reviews = [
    { name: "Amit Sharma", text: "Great place for learning yoga and naturopathy therapy. The environment is very peaceful." },
    { name: "Barasha Bharali", text: "Celebrated Yoga Day with lots of enthusiasm, received a gift from Sir. Great place full of positivity", badge: "Local Guide" },
    { name: "Rajesh Kalita", text: "The instructor is very knowledgeable and patient. I've seen a huge improvement in my back pain." },
    { name: "Priyanka Das", text: "Best naturopathy center in Khanapara. Highly recommended for anyone looking for natural healing." },
    { name: "Sanjay Baruah", text: "A perfect place to start your day. The morning sessions are incredibly energizing." },
    { name: "Mousumi Devi", text: "Very professional approach and clean facilities. The Panchakarma treatment was life-changing." },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="What Our Students Say" />
      
      <div className="bg-teal-deep text-white rounded-3xl p-12 text-center mb-20 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-6xl font-bold mb-4">5.0</div>
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#f1c40f" className="text-[#f1c40f]" />)}
          </div>
          <p className="text-beige-warm/70 uppercase tracking-widest font-bold">Based on 13 Google Reviews</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-3xl shadow-lg border border-charcoal/5"
          >
            <div className="flex text-[#f1c40f] mb-6">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#f1c40f" />)}
            </div>
            <p className="text-charcoal/80 italic mb-8 leading-relaxed">"{rev.text}"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-teal-deep font-bold mr-4">
                {rev.name[0]}
              </div>
              <div>
                <div className="font-bold text-teal-deep">{rev.name}</div>
                {rev.badge && <div className="text-xs text-sage font-bold uppercase">{rev.badge}</div>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const posts = [
    { title: "5 Essential Yoga Poses for Beginners", date: "Mar 10, 2024", tag: "Yoga", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" },
    { title: "The Benefits of Panchakarma Detox", date: "Mar 05, 2024", tag: "Ayurveda", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" },
    { title: "How to Start a Daily Meditation Practice", date: "Feb 28, 2024", tag: "Mindfulness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" },
    { title: "Naturopathic Diet for Better Digestion", date: "Feb 20, 2024", tag: "Nutrition", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Wellness Blog & Tips" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-charcoal/5 group"
          >
            <div className="h-64 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">{post.date}</span>
                <span className="bg-sage/10 text-teal-deep px-4 py-1 rounded-full text-xs font-bold">{post.tag}</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-deep mb-4 leading-tight">{post.title}</h3>
              <p className="text-charcoal/60 mb-8">Discover how ancient wisdom can transform your modern lifestyle with these simple, effective tips...</p>
              <button className="text-teal-deep font-bold flex items-center hover:gap-2 transition-all">
                Read More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-40 text-center max-w-2xl mx-auto px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-16 rounded-[3rem] shadow-2xl"
        >
          <CheckCircle size={80} className="text-sage mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-teal-deep mb-4">Appointment Requested!</h2>
          <p className="text-charcoal/60 mb-12">Thank you for booking with Divyam Yoga. We will call you shortly to confirm your slot.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-teal-deep text-white px-10 py-4 rounded-full font-bold shadow-lg"
          >
            Back to Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Book a Class" subtitle="Take the first step towards a healthier you" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-charcoal/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Full Name</label>
                <input required type="text" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Phone Number</label>
                <input required type="tel" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage" placeholder="095558 77368" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Preferred Date</label>
                <input required type="date" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Preferred Time</label>
                <select required className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage">
                  <option>6:00 AM</option>
                  <option>7:00 AM</option>
                  <option>8:00 AM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Class Type</label>
                <select required className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage">
                  <option>Yoga Classes</option>
                  <option>Panchakarma</option>
                  <option>Naturopathy Therapy</option>
                  <option>Wellness Counselling</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-12">
              <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Message / Special Request</label>
              <textarea rows={4} className="w-full bg-beige-warm/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sage" placeholder="Any injuries or goals we should know about?"></textarea>
            </div>

            <button type="submit" className="w-full bg-teal-deep text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-sage transition-all flex items-center justify-center">
              <Calendar className="mr-3" /> Submit Appointment Request
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-lg">
            <h3 className="text-2xl font-bold text-teal-deep mb-6">Studio Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-charcoal/5 pb-4">
                <span className="font-bold">Mon - Sat</span>
                <span className="text-sage">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-charcoal/40">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div className="bg-sage text-white p-10 rounded-[2.5rem] shadow-lg">
            <SectionTitle title="" />
            <p className="text-xl font-display italic leading-relaxed text-center">
              "Yoga is the journey of the self, through the self, to the self."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionTitle title="Contact Us" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-12">
          <div className="flex items-start">
            <div className="bg-white p-4 rounded-2xl shadow-md mr-6 text-teal-deep"><MapPin size={32} /></div>
            <div>
              <h4 className="text-xl font-bold text-teal-deep mb-2">Our Location</h4>
              <p className="text-charcoal/70">House No. 52, Navin Path, walking zone front of Kendriya Vidyalaya, Beltala Road, Khanapara, Guwahati, Assam 781022</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-4 rounded-2xl shadow-md mr-6 text-teal-deep"><Phone size={32} /></div>
            <div>
              <h4 className="text-xl font-bold text-teal-deep mb-2">Call Us</h4>
              <p className="text-charcoal/70"><a href="tel:09555877368" className="hover:text-teal-deep transition-colors">095558 77368</a></p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-4 rounded-2xl shadow-md mr-6 text-teal-deep"><Clock size={32} /></div>
            <div>
              <h4 className="text-xl font-bold text-teal-deep mb-2">Opening Hours</h4>
              <p className="text-charcoal/70">Monday – Saturday: 6:00 AM – 8:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-charcoal/5">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="text-sage mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-teal-deep mb-4">Message Sent!</h3>
              <p className="text-charcoal/60 mb-8">We'll get back to you as soon as possible.</p>
              <button onClick={() => setSubmitted(false)} className="text-teal-deep font-bold">Send another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Name</label>
                <input required type="text" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Email</label>
                <input required type="email" className="w-full bg-beige-warm/50 border-none rounded-2xl p-4" placeholder="Your Email" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Message</label>
                <textarea required rows={5} className="w-full bg-beige-warm/50 border-none rounded-2xl p-4" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-deep text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-sage transition-all flex items-center justify-center">
                <Send size={20} className="mr-3" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.478936994793!2d91.8039657!3d26.1223025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59336829703d%3A0x6357999863868615!2sDivyam%20Yoga%20%26%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1710144000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Handle scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'services' && <ServicesPage setActivePage={setActivePage} />}
            {activePage === 'gallery' && <GalleryPage />}
            {activePage === 'testimonials' && <TestimonialsPage />}
            {activePage === 'blog' && <BlogPage />}
            {activePage === 'booking' && <BookingPage />}
            {activePage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      <WhatsAppButton />
    </div>
  );
}

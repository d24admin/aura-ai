import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, 
  MessageSquare, Bot, Globe, 
  ArrowRight, CheckCircle2, Zap, 
  Facebook, Instagram, Cpu, ShieldCheck, Server, Coins, Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Official WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    emailjs.send('service_ve8sxe8', 'template_a598kmq', formData, 'Z3qmCPC7klj7rrxPW')
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Rule-Based Chatbots",
      description: "Reliable, structured automation for WhatsApp, Instagram, and Facebook. Perfect for FAQs and guided flows.",
      channels: ["WhatsApp", "Instagram", "Facebook"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Generative AI Agents",
      description: "Intelligent, conversational AI that understands context and intent. Delivers human-like support 24/7 across all social platforms.",
      channels: ["WhatsApp", "Instagram", "Facebook"]
    },
    {
      icon: <WhatsAppIcon className="h-8 w-8" />,
      title: "WhatsApp Appointment Booking",
      description: "Seamless booking experiences directly within WhatsApp using WhatsApp Flows. Ideal for clinics, salons, and consultants.",
      highlight: "Specialty",
      channels: ["WhatsApp"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Custom Web Solutions",
      description: "Modern, high-performance websites tailored to your business needs. From landing pages to complex web applications.",
      channels: ["Web"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-yellow/30">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center shadow-lg shadow-brand-yellow/20 group-hover:scale-105 transition-transform">
                <span className="font-bold text-xl text-slate-900">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Aura AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Solutions</a>
              <a href="#platform" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
              <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95">
                Book a Demo
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#solutions" className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Solutions</a>
              <a href="#platform" className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Platform</a>
              <a href="#contact" className="block px-4 py-3 text-base font-bold text-brand-yellow bg-slate-900 rounded-xl mt-4 text-center">Book a Demo</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-yellow/10 text-yellow-700 text-sm font-bold mb-8 border border-brand-yellow/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
                Revolutionizing Customer Engagement
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                Automate. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-600">Scale.</span> Grow.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-light">
                Empower your business with next-gen AI chatbots and seamless WhatsApp flows. 
                Connect with customers on their favorite channels—instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/20 active:scale-95">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-slate-900 transition-all active:scale-95">
                  Explore Solutions
                </a>
                <a href="https://wa.me/15556210026?text=Hello" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all active:scale-95">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-yellow/20 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
      </section>

      {/* USP Section: Direct Integration - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-20 overflow-hidden relative text-white shadow-2xl shadow-slate-900/20">
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-block p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                  <Coins className="h-8 w-8 text-brand-yellow" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Zero Markup. <br/>
                  <span className="text-brand-yellow">Direct Meta Billing.</span>
                </h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  Most agencies charge a premium on every message you send. We don't. 
                  We integrate your bots directly with Meta's Official APIs, so you pay 
                  standard rates directly to Meta. No hidden fees.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-yellow" />
                      Transparent
                    </h4>
                    <p className="text-sm text-slate-400">Pay Meta directly for what you use.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-brand-yellow" />
                      Secure
                    </h4>
                    <p className="text-sm text-slate-400">You own your API keys and data.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Visual representation of savings */}
                <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-8 text-center uppercase tracking-wider text-slate-500">Monthly Cost Comparison</h3>
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="flex justify-between text-sm mb-3 font-medium">
                        <span className="text-slate-500">Competitors</span>
                        <span className="font-bold text-red-500">$$$ High Markup</span>
                      </div>
                      <div className="h-12 bg-slate-100 rounded-xl overflow-hidden flex items-center px-4 relative">
                        <div className="absolute left-0 top-0 h-full w-full bg-red-50"></div>
                        <div className="absolute left-0 top-0 h-full w-[90%] bg-red-500 rounded-xl"></div>
                        <span className="relative z-10 text-white font-bold text-sm">Platform Fee + Markup</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex justify-between text-sm mb-3 font-medium">
                        <span className="font-bold text-slate-900">Aura AI</span>
                        <span className="font-bold text-green-600">$ Direct Cost</span>
                      </div>
                      <div className="h-12 bg-slate-100 rounded-xl overflow-hidden flex items-center px-4 relative">
                        <div className="absolute left-0 top-0 h-full w-full bg-green-50"></div>
                        <div className="absolute left-0 top-0 h-full w-[35%] bg-green-500 rounded-xl"></div>
                        <span className="relative z-10 text-white font-bold text-sm">Meta Direct</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-sm font-medium text-slate-500">Save up to <span className="text-slate-900 font-bold text-lg">60%</span> on messaging costs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-0"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section id="solutions" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Total Experience Automation</h2>
            <p className="text-xl text-slate-600 font-light">
              From simple queries to complex appointment bookings, we cover every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group p-10 rounded-[2rem] bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-brand-yellow group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  {service.highlight && (
                    <span className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg shadow-slate-900/20">
                      {service.highlight}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                {service.channels && (
                  <div className="flex gap-4 pt-8 border-t border-slate-50 mt-auto">
                    {service.channels.includes("WhatsApp") && <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />}
                    {service.channels.includes("Instagram") && <Instagram className="h-6 w-6 text-[#E4405F]" />}
                    {service.channels.includes("Facebook") && <Facebook className="h-6 w-6 text-[#1877F2]" />}
                    {service.channels.includes("Web") && <Globe className="h-6 w-6 text-slate-900" />}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Redesigned */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Built on Enterprise Infrastructure</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-3 group">
              <WhatsAppIcon className="h-12 w-12 text-[#25D366]" />
              <span className="font-bold text-sm text-slate-900">Official API</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Cpu className="h-12 w-12 text-slate-900" />
              <span className="font-bold text-sm text-slate-900">Advanced AI</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Server className="h-12 w-12 text-blue-600" />
              <span className="font-bold text-sm text-slate-900">Cloud Scale</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <ShieldCheck className="h-12 w-12 text-slate-900" />
              <span className="font-bold text-sm text-slate-900">Bank Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight: WhatsApp Flows - Redesigned */}
      <section id="platform" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow text-sm font-bold mb-8 border border-white/10">
                <Zap className="h-4 w-4" />
                <span>Game Changer</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Seamless Booking <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">Inside WhatsApp</span>
              </h2>
              <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
                Forget clunky forms. Let your customers book appointments, reserve tables, or schedule consultations directly within WhatsApp. No redirects, no drop-offs.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Native in-chat booking interface",
                  "Real-time calendar sync",
                  "Automated reminders & confirmations",
                  "3x Higher conversion rates"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="h-6 w-6 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                    </div>
                    <span className="text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-brand-yellow font-bold text-lg hover:text-white transition-colors group">
                See it in action <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-brand-yellow/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
                {/* Mockup of WhatsApp Flow */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow flex-shrink-0 flex items-center justify-center text-slate-900 font-bold">A</div>
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-5 max-w-[85%]">
                      <p className="text-base text-slate-200">Hi! I'd like to book an appointment for next Tuesday.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="bg-brand-yellow text-slate-900 rounded-2xl rounded-tr-none p-5 max-w-[85%] shadow-lg shadow-brand-yellow/10">
                      <p className="text-base font-medium mb-4">Sure! Please select a time slot below:</p>
                      <div className="bg-white rounded-xl p-4 space-y-3 shadow-inner">
                        <div className="p-3 border border-slate-200 rounded-lg text-center text-sm font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">Tue, 10:00 AM</div>
                        <div className="p-3 border border-slate-200 rounded-lg text-center text-sm font-medium text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">Tue, 02:00 PM</div>
                        <button className="w-full bg-[#25D366] text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-green-500/20 hover:bg-green-600 transition-colors">Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] shadow-2xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Transform?</h2>
              <p className="text-xl text-slate-600 mb-8">Get a free consultation and demo of our platform.</p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600">
                <Mail className="h-5 w-5 text-brand-yellow" />
                <a href="mailto:admin@auraai.co.in" className="font-medium hover:text-brand-yellow transition-colors">admin@auraai.co.in</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Phone Number <span className="text-slate-400 font-normal text-xs">(Optional - for callback)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none"
                  placeholder="Tell us about your business needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-900/20 disabled:opacity-70 transform hover:-translate-y-1"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-green-600 font-bold bg-green-50 py-4 rounded-2xl"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Message sent successfully! We'll be in touch soon.</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl text-slate-900">A</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Aura AI</span>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Aura AI. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#!" className="text-slate-400 hover:text-slate-900 transition-colors font-medium">Privacy Policy</a>
              <a href="#!" className="text-slate-400 hover:text-slate-900 transition-colors font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
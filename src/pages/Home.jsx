import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const Home = () => {
    const [count, setCount] = useState({ products: 0, clients: 0, projects: 0 });

    useEffect(() => {
        const duration = 2000;
        const steps = 50;
        const interval = duration / steps;

        const counters = {
            products: parseInt(companyInfo.statistics.products),
            clients: parseInt(companyInfo.statistics.clients),
            projects: parseInt(companyInfo.statistics.projects),
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCount({
                products: Math.floor((counters.products / steps) * step),
                clients: Math.floor((counters.clients / steps) * step),
                projects: Math.floor((counters.projects / steps) * step),
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen">
            <SEO title="Home" />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/home/hero-bg.jpg"
                        alt="Highway Road Safety"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-asphalt-grey-900/70"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            Complete Road Safety &<br />
                            <span className="gradient-text bg-gradient-to-r from-safety-orange-400 to-highway-green-400 bg-clip-text text-transparent">
                                Road Marking Solutions
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-asphalt-grey-200 mb-4 max-w-3xl mx-auto">
                            {companyInfo.tagline}
                        </p>
                        <p className="text-lg text-asphalt-grey-300 mb-10 max-w-2xl mx-auto">
                            Leading provider of government-standard road safety products and services across India
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/services" className="btn-primary">
                                Our Services
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            {
                                icon: '✓',
                                title: 'Government Standard Materials',
                                desc: 'MoST / IRC Certified'
                            },
                            {
                                icon: '👷',
                                title: 'Experienced Professionals',
                                desc: '10+ Years Expertise'
                            },
                            {
                                icon: '🏆',
                                title: 'Certified & Tested',
                                desc: 'Quality Assurance'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-asphalt-grey-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Statistics Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-safety-orange-600 mb-2">
                                {count.products}+
                            </div>
                            <div className="text-asphalt-grey-600 font-medium">Road Safety Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-highway-green-600 mb-2">
                                {count.clients}+
                            </div>
                            <div className="text-asphalt-grey-600 font-medium">Satisfied Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-safety-orange-600 mb-2">
                                10+
                            </div>
                            <div className="text-asphalt-grey-600 font-medium">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-highway-green-600 mb-2">
                                {count.projects}+
                            </div>
                            <div className="text-asphalt-grey-600 font-medium">Projects Completed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">
                            Comprehensive road safety solutions for highways, roads, and infrastructure projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/services/${service.id}`}
                                    className="card card-hover block h-full group"
                                >
                                    <div className="h-48 mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-asphalt-grey-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-asphalt-grey-600 mb-4 leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                    <div className="text-safety-orange-600 font-semibold flex items-center">
                                        Learn More
                                        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="btn-primary">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">
                            Your trusted partner for government-standard road safety solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Quality Assurance',
                                description: 'All materials tested and certified as per MoST/IRC specifications with government test certificates'
                            },
                            {
                                icon: '⚡',
                                title: 'Quick Execution',
                                description: 'Experienced team ensures timely project completion without compromising on quality standards'
                            },
                            {
                                icon: '💰',
                                title: 'Cost-Effective',
                                description: 'Competitive pricing with best-in-class materials and workmanship for maximum value'
                            },
                            {
                                icon: '📋',
                                title: 'Complete Solution',
                                description: 'From road marking to crash barriers, we offer end-to-end road safety solutions'
                            },
                            {
                                icon: '🔧',
                                title: 'Expert Team',
                                description: '10+ years of experience in infrastructure and government tender projects'
                            },
                            {
                                icon: '🤝',
                                title: 'Trusted by Government',
                                description: 'Regular supplier to NHAI, PWD, and other government infrastructure departments'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="text-6xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-asphalt-grey-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-asphalt-grey-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding hero-gradient text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Ready to Make Your Roads Safer?
                        </h2>
                        <p className="text-xl text-asphalt-grey-200 mb-8 max-w-2xl mx-auto">
                            Contact us today for professional road safety solutions and government-standard materials
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary">
                                Get A Quote
                            </Link>
                            <a href={`tel:${companyInfo.contact.phone}`} className="btn-secondary">
                                📞 Call: {companyInfo.contact.phone}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

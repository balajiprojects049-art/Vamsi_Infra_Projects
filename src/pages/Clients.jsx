import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const Clients = () => {
    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/clients.jpg"
                        alt="Our Esteemed Clients"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-asphalt-grey-900/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Our Esteemed Clients
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            Trusted by government departments, infrastructure giants, and leading construction companies
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trust Statement */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6">
                            Building Trust Through Excellence
                        </h2>
                        <p className="text-lg text-asphalt-grey-700 leading-relaxed mb-4">
                            Over the years, we have established ourselves as a reliable partner for road safety
                            infrastructure projects across government and private sectors. Our commitment to quality,
                            timely delivery, and compliance with standards has earned us the trust of prestigious
                            organizations.
                        </p>
                        <p className="text-lg text-asphalt-grey-700 leading-relaxed">
                            We take pride in contributing to safer roads and highways through our partnerships with
                            leading infrastructure developers and government bodies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Client Categories */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: '🏛️',
                                title: 'Government Departments',
                                desc: 'PWD, NHAI, Rural Roads, Municipal Corporations'
                            },
                            {
                                icon: '🏗️',
                                title: 'Infrastructure Companies',
                                desc: 'L&T, GMR, TATA Projects, and more'
                            },
                            {
                                icon: '🛣️',
                                title: 'Highway Authorities',
                                desc: 'National and State Highway Projects'
                            },
                            {
                                icon: '🏢',
                                title: 'Private Developers',
                                desc: 'Real estate and industrial projects'
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="text-6xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-bold text-asphalt-grey-900 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-asphalt-grey-600 text-sm">
                                    {category.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Reputed Clients</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {companyInfo.clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="card card-hover flex flex-col items-center justify-center p-8 aspect-square"
                            >
                                <div className="text-5xl mb-3">🏢</div>
                                <p className="text-sm text-center font-semibold text-asphalt-grey-800">
                                    {client.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials/Success Metrics */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Our Success</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-safety-orange-600 mb-2">100+</div>
                            <p className="text-asphalt-grey-600 font-medium">Government Projects</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-highway-green-600 mb-2">500+</div>
                            <p className="text-asphalt-grey-600 font-medium">KM Roads Marked</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-safety-orange-600 mb-2">1000+</div>
                            <p className="text-asphalt-grey-600 font-medium">Sign Boards Installed</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-highway-green-600 mb-2">100%</div>
                            <p className="text-asphalt-grey-600 font-medium">Client Satisfaction</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card bg-gradient-to-br from-safety-orange-50 to-highway-green-50 border-2 border-safety-orange-200">
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6 text-center">
                                Why Clients Choose Us
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: '✓', title: 'Government Approved', desc: 'All materials meet MoST/IRC standards' },
                                    { icon: '✓', title: 'Timely Delivery', desc: 'Project completion within deadlines' },
                                    { icon: '✓', title: 'Expert Team', desc: '10+ years of experience' },
                                    { icon: '✓', title: 'Competitive Pricing', desc: 'Best value for quality work' },
                                    { icon: '✓', title: 'Complete Documentation', desc: 'Test certificates and compliance reports' },
                                    { icon: '✓', title: 'After-Sales Support', desc: 'Warranty and maintenance services' },
                                ].map((reason, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-8 h-8 bg-highway-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                                            {reason.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-asphalt-grey-900 mb-1">{reason.title}</h3>
                                            <p className="text-sm text-asphalt-grey-600">{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
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
                            Join Our Growing List of Satisfied Clients
                        </h2>
                        <p className="text-xl text-asphalt-grey-200 mb-8 max-w-2xl mx-auto">
                            Experience quality, reliability, and professional service for your road safety projects
                        </p>
                        <a href="/contact" className="btn-primary">
                            Start Your Project
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Clients;

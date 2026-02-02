import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData, additionalServices } from '../data/servicesData';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Our Services"
                description="Specialized road safety services including thermoplastic road marking, traffic sign board installation, crash barriers, and road stud fixing."
            />
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/services.jpg"
                        alt="Our Services"
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
                            Our Services
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            Comprehensive road safety and road marking solutions for highways, roads, and infrastructure projects
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
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
                                    <h3 className="text-2xl font-bold text-asphalt-grey-900 mb-3">
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
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card bg-gradient-to-br from-safety-orange-50 to-highway-green-50 border-2 border-safety-orange-200 text-center"
                    >
                        <div className="text-6xl mb-4">🛠️</div>
                        <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-4">
                            {additionalServices.title}
                        </h2>
                        <p className="text-lg text-asphalt-grey-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                            {additionalServices.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {additionalServices.categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 shadow-sm border border-asphalt-grey-200"
                                >
                                    <span className="text-sm font-semibold text-asphalt-grey-800">
                                        {category}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link to="/contact" className="btn-primary">
                                Request Catalog
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-display font-bold text-asphalt-grey-900 mb-6">
                            Need A Custom Solution?
                        </h2>
                        <p className="text-xl text-asphalt-grey-600 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss your specific road safety requirements
                        </p>
                        <Link to="/contact" className="btn-primary">
                            Get A Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;

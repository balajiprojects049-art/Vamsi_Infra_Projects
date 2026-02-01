import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const { detailed } = service;

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-asphalt-grey-900/80"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-asphalt-grey-100 leading-relaxed font-medium">
                            {service.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-asphalt-grey-700 leading-relaxed text-justify">
                            {detailed.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Work Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {detailed.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-safety-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-bold text-asphalt-grey-900">{step}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6">
                                Applications
                            </h2>
                            <ul className="space-y-3">
                                {detailed.applications.map((app, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <span className="text-highway-green-600 mr-3 text-xl flex-shrink-0">✓</span>
                                        <span className="text-asphalt-grey-700">{app}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6">
                                Benefits
                            </h2>
                            <ul className="space-y-3">
                                {detailed.benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <span className="text-safety-orange-600 mr-3 text-xl flex-shrink-0">★</span>
                                        <span className="text-asphalt-grey-700">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="section-padding bg-gradient-to-br from-safety-orange-50 to-highway-green-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto card bg-white border-2 border-safety-orange-200"
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-5xl mr-4">🏆</span>
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900">
                                Safety & Quality Assurance
                            </h2>
                        </div>
                        <p className="text-lg text-asphalt-grey-700 leading-relaxed">
                            {detailed.qualityAssurance}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-asphalt-grey-900 mb-6">
                        Interested in This Service?
                    </h2>
                    <p className="text-xl text-asphalt-grey-600 mb-8 max-w-2xl mx-auto">
                        Get in touch with us for detailed information and quotations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn-primary">
                            Request A Quote
                        </Link>
                        <Link to="/services" className="btn-outline">
                            ← Back to Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;

import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const Certifications = () => {
    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/certifications.jpg"
                        alt="Quality & Certifications"
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
                            Quality & Certifications
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            Committed to excellence through rigorous testing and government-approved standards
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6">
                                {companyInfo.qualityStandards.title}
                            </h2>
                            <p className="text-lg text-asphalt-grey-700 leading-relaxed">
                                {companyInfo.qualityStandards.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testing Parameters */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Testing Parameters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {companyInfo.qualityStandards.parameters.map((param, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-highway-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-3">
                                        ✓
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-asphalt-grey-900 text-lg">
                                            {param.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="ml-13 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm text-asphalt-grey-600">Specification:</span>
                                        <span className="text-sm font-semibold text-safety-orange-600">
                                            {param.specification}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm text-asphalt-grey-600">Standard:</span>
                                        <span className="text-sm font-semibold text-asphalt-grey-800">
                                            {param.standard}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Our Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {companyInfo.qualityStandards.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card bg-gradient-to-br from-safety-orange-50 to-highway-green-50 border-2 border-safety-orange-200 text-center"
                            >
                                <div className="text-5xl mb-4">🏅</div>
                                <h3 className="font-bold text-asphalt-grey-900 leading-snug">
                                    {cert}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Standards */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card bg-white">
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-6 text-center">
                                Compliance with Indian Standards
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-safety-orange-600 mb-4">
                                        IRC Standards
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            'IRC:35 - Road Marking',
                                            'IRC:67 - Traffic Sign Boards',
                                            'IRC:79 - Road Delineators',
                                            'IRC:119 - Crash Barriers',
                                        ].map((standard, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-highway-green-600 mr-2">✓</span>
                                                <span className="text-asphalt-grey-700">{standard}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-safety-orange-600 mb-4">
                                        MoRTH Guidelines
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            'Thermoplastic Specifications',
                                            'Retroreflective Materials',
                                            'Solar Products Standards',
                                            'Road Safety Devices',
                                        ].map((guideline, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-highway-green-600 mr-2">✓</span>
                                                <span className="text-asphalt-grey-700">{guideline}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quality Assurance Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Our Quality Assurance Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { step: '01', title: 'Material Selection', desc: 'Sourcing from certified suppliers only' },
                            { step: '02', title: 'Lab Testing', desc: 'Comprehensive testing as per standards' },
                            { step: '03', title: 'Field Application', desc: 'Precision installation by experts' },
                            { step: '04', title: 'Final Inspection', desc: 'Quality verification and documentation' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-safety-orange-600 to-highway-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-asphalt-grey-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-asphalt-grey-600">
                                    {item.desc}
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
                            Quality You Can Trust
                        </h2>
                        <p className="text-xl text-asphalt-grey-200 mb-8 max-w-2xl mx-auto">
                            All our products come with government test certificates and compliance documentation
                        </p>
                        <a href="/contact" className="btn-primary">
                            Request Certificate Copies
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;

import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';
import SEO from '../components/SEO';

const Certifications = () => {
    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Quality Certifications"
                description="MoST and IRC approved road safety products. ISO 9001:2015 certified methodology for thermoplastic road marking and signage."
            />
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
                    <h2 className="section-title text-center mb-12">Test Certificates & Approvals</h2>

                    {/* Official Certifications List */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {companyInfo.qualityStandards.certifications.map((cert, index) => (
                            <span key={index} className="bg-white border border-asphalt-grey-200 text-asphalt-grey-700 px-6 py-3 rounded-full font-medium shadow-sm flex items-center">
                                <span className="text-highway-green-600 mr-2 text-xl">✓</span>
                                {cert}
                            </span>
                        ))}
                    </div>

                    {/* Certificate Images Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {companyInfo.qualityStandards.certificateImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative bg-white p-2 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-asphalt-grey-100 cursor-pointer"
                                onClick={() => window.open(image, '_blank')}
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-asphalt-grey-100 relative">
                                    <img
                                        src={image}
                                        alt={`Certificate ${index + 1}`}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 p-3 rounded-full shadow-lg text-asphalt-grey-900">
                                            🔍 View
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm font-medium text-asphalt-grey-600">Official Certificate</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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

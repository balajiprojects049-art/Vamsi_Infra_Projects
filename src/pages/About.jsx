import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const About = () => {
    // Function to render text with bold/gradient highlights for strings wrapped in **
    const renderHighlightedText = (text) => {
        const parts = text.split('**');
        return parts.map((part, index) => {
            if (index % 2 === 1) { // Odd indices are the highlighted parts
                return (
                    <span key={index} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-safety-orange-600 to-highway-green-600">
                        {part}
                    </span>
                );
            }
            return part; // Even indices are normal text
        });
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/about.jpg"
                        alt="About Vamsi Infra Projects"
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
                            About Vamsi Infra Projects
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            {companyInfo.about.about}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Description */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg max-w-none">
                            <div className="text-asphalt-grey-700 leading-relaxed text-justify mb-6">
                                {companyInfo.about.description.split('\n\n').map((paragraph, index) => {
                                    if (index === 0) {
                                        const firstLetter = paragraph.charAt(0);
                                        const restOfParagraph = paragraph.slice(1);
                                        return (
                                            <p key={index} className="mb-6">
                                                <span className="float-left text-6xl font-display font-bold text-safety-orange-600 mr-3 leading-[0.8] mt-1">
                                                    {firstLetter}
                                                </span>
                                                {renderHighlightedText(restOfParagraph)}
                                            </p>
                                        );
                                    }
                                    return (
                                        <p key={index} className="mb-6">
                                            {renderHighlightedText(paragraph)}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/images/home/about-us.jpg"
                                alt="Road Safety Team at Work"
                                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="card"
                        >
                            <div className="text-5xl mb-4">🎯</div>
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-asphalt-grey-700 leading-relaxed">
                                {companyInfo.about.mission}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="card"
                        >
                            <div className="text-5xl mb-4">🚀</div>
                            <h2 className="text-3xl font-display font-bold text-asphalt-grey-900 mb-4">
                                Our Vision
                            </h2>
                            <p className="text-asphalt-grey-700 leading-relaxed">
                                {companyInfo.about.vision}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">
                            Principles that drive our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {companyInfo.about.values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card text-center group hover:border-safety-orange-400"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-safety-orange-500 to-highway-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-white">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-asphalt-grey-900">
                                    {value}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">{companyInfo.methodology.title}</h2>
                        <p className="section-subtitle">{companyInfo.methodology.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companyInfo.methodology.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-safety-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-asphalt-grey-900">
                                        {step.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {step.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start text-asphalt-grey-700">
                                            <span className="text-highway-green-600 mr-2 flex-shrink-0">✓</span>
                                            <span className="text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Road Safety Matters */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="section-title mb-6">Why Road Safety Matters</h2>
                            <div className="card bg-gradient-to-br from-safety-orange-50 to-highway-green-50 border-2 border-safety-orange-200">
                                <p className="text-lg text-asphalt-grey-800 leading-relaxed mb-6">
                                    Road safety is not just about compliance; it's about saving lives. Every year,
                                    thousands of accidents occur on Indian roads due to poor road markings, inadequate
                                    signage, and lack of proper safety infrastructure.
                                </p>
                                <p className="text-lg text-asphalt-grey-800 leading-relaxed mb-6">
                                    At Vamsi Infra Projects, we understand that proper road marking and safety equipment
                                    can significantly reduce accidents. Clear lane markings guide drivers, reflective studs
                                    provide nighttime visibility, and crash barriers prevent fatal crossovers.
                                </p>
                                <p className="text-lg text-asphalt-grey-800 leading-relaxed">
                                    Our commitment goes beyond business – we are contributing to a safer India, one road
                                    at a time. Every project we complete is a step towards protecting lives and ensuring
                                    that families reach their destinations safely.
                                </p>
                            </div>
                        </motion.div>
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
                            Partner With Us for Safer Roads
                        </h2>
                        <p className="text-xl text-asphalt-grey-200 mb-8 max-w-2xl mx-auto">
                            Join hands with a trusted road safety solutions provider committed to excellence
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary">
                                Get In Touch
                            </a>
                            <a href="/services" className="btn-secondary">
                                Our Services
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;

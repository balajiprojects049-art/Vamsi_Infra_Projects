import { useState } from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/contact.jpg"
                        alt="Contact Vamsi Infra Projects"
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
                            Contact Us
                        </h1>
                        <p className="text-xl text-asphalt-grey-200 leading-relaxed">
                            Get in touch with us for road safety solutions and quotations
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="card"
                            >
                                <h2 className="text-2xl font-display font-bold text-asphalt-grey-900 mb-6">
                                    Get In Touch
                                </h2>

                                <div className="space-y-5">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📍</span>
                                        <div>
                                            <h3 className="font-semibold text-asphalt-grey-900 mb-1">Address</h3>
                                            <p className="text-asphalt-grey-600 text-sm leading-relaxed">
                                                {companyInfo.contact.address.line1}<br />
                                                {companyInfo.contact.address.line2}<br />
                                                {companyInfo.contact.address.city} – {companyInfo.contact.address.pincode}<br />
                                                {companyInfo.contact.address.district}, {companyInfo.contact.address.state}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-asphalt-grey-200 my-4"></div>

                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <h3 className="font-semibold text-asphalt-grey-900 mb-1">Phone</h3>
                                            <a
                                                href={`tel:${companyInfo.contact.phone}`}
                                                className="text-safety-orange-600 hover:text-safety-orange-700 font-semibold"
                                            >
                                                {companyInfo.contact.phone}
                                            </a>
                                            <p className="text-xs text-asphalt-grey-500 mt-1">Click to call</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-asphalt-grey-200 my-4"></div>

                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">✉️</span>
                                        <div>
                                            <h3 className="font-semibold text-asphalt-grey-900 mb-1">Email</h3>
                                            <a
                                                href={`mailto:${companyInfo.contact.email}`}
                                                className="text-safety-orange-600 hover:text-safety-orange-700 break-all text-sm"
                                            >
                                                {companyInfo.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="border-t border-asphalt-grey-200 my-4"></div>

                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🕒</span>
                                        <div>
                                            <h3 className="font-semibold text-asphalt-grey-900 mb-2">Business Hours</h3>
                                            <div className="text-sm text-asphalt-grey-600 space-y-1">
                                                <p>{companyInfo.businessHours.weekdays}</p>
                                                <p>{companyInfo.businessHours.saturday}</p>
                                                <p>{companyInfo.businessHours.sunday}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social Media */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="card bg-gradient-to-br from-safety-orange-50 to-highway-green-50"
                            >
                                <h3 className="font-semibold text-asphalt-grey-900 mb-3">Connect With Us</h3>
                                <div className="flex space-x-3">
                                    <a
                                        href={companyInfo.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white hover:bg-safety-orange-600 hover:text-white rounded-lg flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <span className="text-2xl">📘</span>
                                    </a>
                                    <a
                                        href={companyInfo.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white hover:bg-safety-orange-600 hover:text-white rounded-lg flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <span className="text-2xl">📸</span>
                                    </a>
                                    <a
                                        href={companyInfo.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white hover:bg-safety-orange-600 hover:text-white rounded-lg flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <span className="text-2xl">💼</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="card"
                            >
                                <h2 className="text-2xl font-display font-bold text-asphalt-grey-900 mb-6">
                                    Send Us A Message
                                </h2>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-highway-green-100 border border-highway-green-400 text-highway-green-800 rounded-lg">
                                        <p className="font-semibold">Thank you for contacting us!</p>
                                        <p className="text-sm">We will get back to you soon.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-asphalt-grey-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-asphalt-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange-500 focus:border-transparent transition-all"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-asphalt-grey-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-asphalt-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange-500 focus:border-transparent transition-all"
                                                placeholder="Enter your phone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-asphalt-grey-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-asphalt-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange-500 focus:border-transparent transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-asphalt-grey-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-asphalt-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange-500 focus:border-transparent transition-all"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-asphalt-grey-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-asphalt-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full md:w-auto">
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding bg-asphalt-grey-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-8">Find Us</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card p-0 overflow-hidden"
                    >
                        <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7${companyInfo.contact.coordinates.lat}!2d${companyInfo.contact.coordinates.lng}!3d${companyInfo.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIzJzQxLjAiTiA4MMKwMDknMDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890`}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vamsi Infra Projects Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="section-padding hero-gradient text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Need Immediate Assistance?
                        </h2>
                        <p className="text-xl text-asphalt-grey-200 mb-8 max-w-2xl mx-auto">
                            Give us a call for urgent road safety requirements
                        </p>
                        <a
                            href={`tel:${companyInfo.contact.phone}`}
                            className="btn-primary text-lg px-10 py-4"
                        >
                            📞 Call: {companyInfo.contact.phone}
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

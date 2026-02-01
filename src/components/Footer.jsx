import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-asphalt-grey-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-safety-orange-600 to-highway-green-600 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xl">VIP</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold">
                                    {companyInfo.name}
                                </h3>
                                <p className="text-sm text-safety-orange-400">
                                    {companyInfo.tagline}
                                </p>
                            </div>
                        </div>
                        <p className="text-asphalt-grey-300 text-sm leading-relaxed">
                            Leading provider of road safety and road marking solutions across India, delivering quality and safety excellence since inception.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={companyInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-asphalt-grey-800 hover:bg-safety-orange-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <span className="text-xl">📘</span>
                            </a>
                            <a
                                href={companyInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-asphalt-grey-800 hover:bg-safety-orange-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <span className="text-xl">📸</span>
                            </a>
                            <a
                                href={companyInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-asphalt-grey-800 hover:bg-safety-orange-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <span className="text-xl">💼</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4 text-safety-orange-400">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Products', path: '/products' },
                                { name: 'Certifications', path: '/certifications' },
                                { name: 'Clients', path: '/clients' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-asphalt-grey-300 hover:text-safety-orange-400 transition-colors text-sm inline-block"
                                    >
                                        → {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4 text-safety-orange-400">
                            Our Services
                        </h4>
                        <ul className="space-y-2">
                            {servicesData.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="text-asphalt-grey-300 hover:text-safety-orange-400 transition-colors text-sm inline-block"
                                    >
                                        → {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4 text-safety-orange-400">
                            Contact Us
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <span className="text-lg">📍</span>
                                <div className="text-asphalt-grey-300">
                                    <p>{companyInfo.contact.address.line1}</p>
                                    <p>{companyInfo.contact.address.line2}</p>
                                    <p>
                                        {companyInfo.contact.address.city} – {companyInfo.contact.address.pincode}
                                    </p>
                                    <p>
                                        {companyInfo.contact.address.district}, {companyInfo.contact.address.state}
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-lg">📞</span>
                                <a
                                    href={`tel:${companyInfo.contact.phone}`}
                                    className="text-asphalt-grey-300 hover:text-safety-orange-400 transition-colors"
                                >
                                    {companyInfo.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-lg">✉️</span>
                                <a
                                    href={`mailto:${companyInfo.contact.email}`}
                                    className="text-asphalt-grey-300 hover:text-safety-orange-400 transition-colors break-all"
                                >
                                    {companyInfo.contact.email}
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h5 className="font-semibold mb-2 text-highway-green-400">Business Hours</h5>
                            <div className="text-asphalt-grey-300 text-sm space-y-1">
                                <p>{companyInfo.businessHours.weekdays}</p>
                                <p>{companyInfo.businessHours.saturday}</p>
                                <p>{companyInfo.businessHours.sunday}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-asphalt-grey-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                        <p className="text-asphalt-grey-400 text-sm text-center md:text-left">
                            © {currentYear} {companyInfo.name}. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-xs text-asphalt-grey-400">
                            <span>Designed for Excellence in Road Safety</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

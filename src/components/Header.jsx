import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Quality & Certifications', path: '/certifications' },
        { name: 'Clients', path: '/clients' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg py-3'
                    : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-safety-orange-600 to-highway-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow">
                            <span className="text-white font-bold text-xl">VIP</span>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl font-display font-bold text-asphalt-grey-900 leading-tight">
                                {companyInfo.name}
                            </h1>
                            <p className="text-xs text-safety-orange-600 font-semibold">
                                {companyInfo.tagline}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive(item.path)
                                        ? 'bg-safety-orange-600 text-white shadow-md'
                                        : 'text-asphalt-grey-700 hover:bg-asphalt-grey-100 hover:text-safety-orange-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href={`tel:${companyInfo.contact.phone}`}
                            className="flex items-center space-x-2 text-highway-green-600 font-semibold hover:text-highway-green-700 transition-colors"
                        >
                            <span className="text-xl">📞</span>
                            <span>{companyInfo.contact.phone}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-asphalt-grey-700 hover:bg-asphalt-grey-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden bg-white border-t border-asphalt-grey-100 mt-3"
                    >
                        <nav className="container-custom py-4 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive(item.path)
                                            ? 'bg-safety-orange-600 text-white'
                                            : 'text-asphalt-grey-700 hover:bg-asphalt-grey-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href={`tel:${companyInfo.contact.phone}`}
                                className="flex items-center justify-center space-x-2 px-4 py-3 bg-highway-green-600 text-white rounded-lg font-semibold hover:bg-highway-green-700 transition-colors"
                            >
                                <span className="text-xl">📞</span>
                                <span>{companyInfo.contact.phone}</span>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

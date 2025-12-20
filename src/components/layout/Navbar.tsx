import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLang, setShowLang] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '緣起宗旨', href: '/about' },
        { name: '移工專區', href: '/migrant-zone' },
        { name: '最新動態', href: '/news' },
        { name: '專案與支持', href: '/support' },
    ];

    const languages = [
        { code: 'ZH', name: '中文' },
        { code: 'EN', name: 'English' },
        { code: 'VI', name: 'Tiếng Việt' },
        { code: 'ID', name: 'Bahasa Indonesia' },
        { code: 'PH', name: 'Tagalog' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className={`text-2xl font-black tracking-tighter font-display transition-colors ${scrolled ? 'text-secondary' : 'text-white md:text-secondary'}`}>
                            HMISC
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${location.pathname === item.href
                                        ? 'text-secondary bg-secondary/10'
                                        : scrolled ? 'text-gray-600 hover:text-secondary' : 'text-white md:text-gray-600 hover:text-secondary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="h-4 w-px bg-gray-200 mx-4 hidden lg:block" />

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLang(!showLang)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white md:text-gray-600'}`}
                            >
                                <Globe className="w-4 h-4" />
                                <span>ZH</span>
                            </button>
                            <AnimatePresence>
                                {showLang && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2"
                                    >
                                        {languages.map((lang) => (
                                            <button key={lang.code} className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-secondary/5 hover:text-secondary rounded-xl transition-colors">
                                                {lang.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="tel:03-5735375" className="ml-4 bg-accent text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            緊急協助
                        </a>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <a href="tel:1955" className="p-2.5 bg-accent/10 text-accent rounded-xl">
                            <PhoneCall className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            <div className="grid grid-cols-5 gap-2 pb-4 border-b border-gray-50 mb-4">
                                {languages.map(l => (
                                    <button key={l.code} className="py-2 text-[10px] font-black border border-gray-100 rounded-lg text-gray-400">
                                        {l.code}
                                    </button>
                                ))}
                            </div>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-900 hover:text-secondary block px-4 py-4 rounded-xl text-lg font-bold hover:bg-secondary/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-6">
                                <a href="tel:03-5735375" className="w-full bg-accent text-white py-4 rounded-2xl font-black text-center block shadow-lg shadow-accent/20">
                                    緊急通報救援 (SOS)
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

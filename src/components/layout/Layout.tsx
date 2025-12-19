import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="flex flex-col min-h-screen bg-background font-sans relative">
            {/* Modern Luxury Progress Line: Champagne Gold Gradient */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_2px_10px_rgba(230,210,170,0.5)]"
                style={{ scaleX }}
            />

            <Navbar />
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

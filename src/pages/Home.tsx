import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, Home as HomeIcon, ArrowRight } from 'lucide-react';
import heroMuralImg from '../assets/hero_mural_v3.png';

export default function Home() {
    const [activeCulture, setActiveCulture] = useState<string | null>(null);

    // Cultural Landmark Backgrounds (Subtle, High-Quality)
    const backgrounds: Record<string, string> = {
        default: "https://images.unsplash.com/photo-1464817739973-0604627d2c1e?q=80&w=2670&auto=format&fit=crop", // Abstract Modern background
        thailand: "https://images.unsplash.com/photo-1528181304800-2597d819524d?q=80&w=2670&auto=format&fit=crop", // Wat Arun
        vietnam: "https://images.unsplash.com/photo-1528127222538-2c30cdd819e6?q=80&w=2670&auto=format&fit=crop", // Halong Bay
        indonesia: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop", // Borobudur
        philippines: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2574&auto=format&fit=crop", // Landscape
    };

    return (
        <div className="bg-background min-h-screen font-sans overflow-x-hidden">
            {/* Hero Section: Modern Luxury & Cartoon Greetings */}
            <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

                {/* Dynamic Background Layer (Subtle) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCulture || 'default'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center pointer-events-none grayscale contrast-125"
                        style={{ backgroundImage: `url(${backgrounds[activeCulture || 'default']})` }}
                    />
                </AnimatePresence>

                {/* Gradient Overlay for "Airy" feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/80 to-white pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center z-10 gap-12">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-left space-y-8 pt-10 md:pt-0">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-gold rounded-full"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-burgundy leading-[1.1] tracking-tight">
                                跨越國界，<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#C5A028]">
                                    連結心與心
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-burgundy/80 font-medium tracking-wide leading-relaxed max-w-lg"
                        >
                            天主教新竹教區移民服務中心<br />
                            為移工與這片土地搭建最友善的橋樑。
                        </motion.p>

                        {/* Interactive Culture List - Reordered: Thailand, Vietnam, Indonesia, Philippines */}
                        <div className="flex flex-wrap gap-6 text-sm font-bold tracking-widest uppercase text-burgundy/40 pt-4">
                            {['Thailand', 'Vietnam', 'Indonesia', 'Philippines'].map((culture) => (
                                <span
                                    key={culture}
                                    onMouseEnter={() => setActiveCulture(culture.toLowerCase())}
                                    onMouseLeave={() => setActiveCulture(null)}
                                    className="cursor-pointer hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold pb-1"
                                >
                                    {culture}
                                </span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link to="/support" className="px-8 py-3 bg-burgundy text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                立即支持
                            </Link>
                            <Link to="/migrant-zone" className="px-8 py-3 bg-white border border-gold/50 text-burgundy font-bold rounded-full hover:bg-gold/10 transition-all duration-300">
                                尋求協助
                            </Link>
                        </motion.div>
                    </div>

                    {/* Character Mural (Generated Asset) - mix-blend-multiply helps remove white background visually */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full md:w-1/2 flex justify-center relative"
                    >
                        <div className="relative z-10 p-6 mix-blend-multiply">
                            <img
                                src={heroMuralImg}
                                alt="Friends from ASEAN countries waving hello"
                                className="w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Decorative Circle behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement: Woven Pattern Progress Bar Style */}
            <section className="py-24 bg-ivory relative">
                {/* Decoration: Bronze Drum Pattern Side */}
                <div className="absolute top-0 left-0 w-24 h-full bg-bronze-drum opacity-5"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-burgundy mb-16 relative inline-block">
                        我們的使命
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="woven-card p-10 hover:shadow-lg transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-burgundy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy/10 transition-colors">
                                <Heart className="text-burgundy w-10 h-10" />
                            </div>
                            <span className="font-bold text-2xl text-gray-800 block mb-2">關懷</span>
                        </div>
                        <div className="woven-card p-10 hover:shadow-lg transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-burgundy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy/10 transition-colors">
                                <Users className="text-burgundy w-10 h-10" />
                            </div>
                            <span className="font-bold text-2xl text-gray-800 block mb-2">賦權</span>
                        </div>
                        <div className="woven-card p-10 hover:shadow-lg transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-burgundy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy/10 transition-colors">
                                <HomeIcon className="text-burgundy w-10 h-10" />
                            </div>
                            <span className="font-bold text-2xl text-gray-800 block mb-2">融合</span>
                        </div>
                    </div>

                    <div className="mt-20 max-w-4xl mx-auto text-lg text-gray-700 leading-loose border-l-4 border-gold pl-8 text-left italic font-serif">
                        <p>
                            追隨耶穌基督的生活軌跡，致力促進本籍與外籍勞工享有更公平、正義及安全之工作條件，並期能促進勞基法納入公平及正義的元素，保障並保護勞工人權及尊嚴。
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="py-20 bg-burgundy text-ivory relative overflow-hidden">
                <div className="absolute inset-0 bg-batik-pattern opacity-5 mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="p-6">
                            <div className="text-5xl font-bold text-gold mb-2 font-serif">20+</div>
                            <div className="text-sm text-ivory/80 tracking-widest uppercase mt-4">深耕服務 (年)</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-gold mb-2 font-serif">5w+</div>
                            <div className="text-sm text-ivory/80 tracking-widest uppercase mt-4">服務移工總數</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-gold mb-2 font-serif">12</div>
                            <div className="text-sm text-ivory/80 tracking-widest uppercase mt-4">庇護與服務據點</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-gold mb-2 font-serif">120+</div>
                            <div className="text-sm text-ivory/80 tracking-widest uppercase mt-4">場文化交流/年</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Projects Carousel Placeholder */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-bold text-burgundy cultural-hover">最新動態與專案</h2>
                        <Link to="/projects" className="text-burgundy hover:text-gold font-medium flex items-center transition-colors">
                            查看更多 <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <Link to="/projects" className="group block woven-card h-full">
                            <div className="h-64 bg-gray-200 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                                    [視覺佔位：移工正在使用平板學習]
                                </div>
                                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            </div>
                            <div className="px-8 pb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">移工數位學習計畫</h3>
                                <p className="text-gray-600 leading-relaxed">透過手機 App，打破時空限制，提供中文、理財等實用課程。</p>
                            </div>
                        </Link>

                        {/* Project Card 2 */}
                        <Link to="/news" className="group block woven-card h-full">
                            <div className="h-64 bg-gray-200 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                                    [視覺佔位：熱鬧的文化節慶典]
                                </div>
                                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            </div>
                            <div className="px-8 pb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">多元文化交流日</h3>
                                <p className="text-gray-600 leading-relaxed">邀請社區民眾與移工朋友同樂，分享美食與音樂，打破隔閡。</p>
                            </div>
                        </Link>

                        {/* Project Card 3 */}
                        <Link to="/news" className="group block woven-card h-full">
                            <div className="h-64 bg-gray-200 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                                    [視覺佔位：社工訪視個案]
                                </div>
                                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            </div>
                            <div className="px-8 pb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">急難救助案例分享</h3>
                                <p className="text-gray-600 leading-relaxed">阿蒂的故事：從工傷中重新站起來，看見希望的曙光。</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}



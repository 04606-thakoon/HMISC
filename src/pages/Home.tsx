import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, ShieldCheck, Globe2, Handshake, Info, PhoneCall, GraduationCap, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Mural Hero Section - The "Visual Identity" */}
            <section className="relative w-full h-[60vh] md:h-[75vh] bg-mural flex items-end">
                <div className="absolute inset-0 mural-overlay"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white text-[10px] md:text-sm font-black tracking-[0.4em] mb-4 border border-white/20 uppercase"
                    >
                        Halo • Xin chào • Mabuhay • Sawasdee • 你好
                    </motion.div>
                </div>
            </section>

            {/* Emergency & Quick Access - The "Urgency Layer" */}
            <div className="relative z-30 -mt-12 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="tel:1955" className="btn-emergency group">
                    <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <div className="text-left">
                        <div className="text-xs opacity-80 font-bold uppercase tracking-widest">24H Hotline</div>
                        <div className="text-xl">1955 諮詢申訴專線</div>
                    </div>
                </a>
                <div className="bg-secondary text-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-gold" />
                    <div>
                        <div className="font-black text-lg">法律及個案協助</div>
                        <p className="text-xs opacity-70">提供安置保護服務及權益諮詢</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Heart className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                        <div className="font-black text-lg text-gray-900">支持我們的行動</div>
                        <p className="text-xs text-gray-400">了解如何聯繫專人進行支持</p>
                    </div>
                </div>
            </div>

            {/* Vision & Mission - The "Legacy" */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 batik-pattern opacity-[0.05] -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Since 1989</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tighter leading-tight">
                            追隨基督，<span className="text-gold italic">捍衛勞動尊嚴</span>。
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-12">
                            「追隨耶穌基督的生活軌跡，致力促進本籍與外籍勞工享有更公平、正義及安全之工作條件，並期能促進勞基法納入公平及正義的元素，保障並保護勞工人權及尊嚴。」
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/about" className="btn-primary">認識中心緣起 <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Services - The "Action" */}
            <section className="py-24 px-4 bg-background relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-tag">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold">全方位專業服務</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 牧靈工作 */}
                        <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all group">
                            <Globe2 className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">牧靈及信仰關懷</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">提供多國語言(英、越、印)禮儀慶典及聖事準備，為移民家庭建立深厚的信仰連結與心理支持。</p>
                        </div>
                        {/* 權益倡導 */}
                        <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all group">
                            <Handshake className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">政策權益倡導</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">與NGO夥伴合作，由專業團隊遊說政府機關，推動制度改革，讓不合宜的法規得以改善。</p>
                        </div>
                        {/* 危機處理 */}
                        <div className="glass-card p-10 rounded-3xl border-accent/20 hover:border-accent group transition-all">
                            <PhoneCall className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">危機與權益救濟</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">擔任移工與政府間的橋樑，處理勞資爭議、提供專業安置保護服務與各項法律個案協助。</p>
                        </div>
                        {/* 教育訓練 */}
                        <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all group">
                            <GraduationCap className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">培力教育課程</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">開設勞工權益、投資理財、語言能力等課程。賦權移工掌握當下的權利並規劃未來的藍圖。</p>
                        </div>
                        {/* 共同體提升 */}
                        <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all group">
                            <Users2 className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">文化節慶與凝聚</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">慶祝各國重要節慶(越南新年、五月花節等)，加強志工訓練，在異地建立共融的第二家園。</p>
                        </div>
                        {/* 雇主指南 placeholder */}
                        <div className="bg-gray-50 p-10 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col justify-center items-center text-center">
                            <Info className="w-10 h-10 text-gray-300 mb-4" />
                            <h3 className="text-xl font-bold text-gray-400">雇主資訊 (Coming Soon)</h3>
                            <p className="text-xs text-gray-400 mt-2 italic">我們正在彙整更多對雇主友善的跨文化管理資訊...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Numbers - The "Trust" */}
            <section className="py-24 px-4 bg-secondary text-white relative">
                <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gold">
                        <div className="p-8 border border-white/10 rounded-[2rem] bg-white/5">
                            <div className="text-5xl font-black mb-2">35+</div>
                            <div className="text-xs text-white/60 font-bold uppercase tracking-widest">服務歷史(年)</div>
                        </div>
                        <div className="p-8 border border-white/10 rounded-[2rem] bg-white/5">
                            <div className="text-5xl font-black mb-2 line-through opacity-30">0000</div>
                            <div className="text-xs text-white/60 font-bold uppercase tracking-widest text-[place-holder]">當前受助人數</div>
                        </div>
                        <div className="p-8 border border-white/10 rounded-[2rem] bg-white/5">
                            <div className="text-5xl font-black mb-2">1,500</div>
                            <div className="text-xs text-white/60 font-bold uppercase tracking-widest">年度諮詢案次</div>
                        </div>
                        <div className="p-8 border border-white/10 rounded-[2rem] bg-white/5">
                            <div className="text-5xl font-black mb-2">100%</div>
                            <div className="text-xs text-white/60 font-bold uppercase tracking-widest">非營利堅持</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories Placeholder - The "Empathy" */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div className="text-left">
                            <span className="section-tag text-gold">Stories of Hope</span>
                            <h2 className="text-4xl font-black text-gray-900">看見生命轉變的瞬間</h2>
                        </div>
                        <Link to="/news" className="font-bold text-secondary flex items-center gap-2 group">
                            閱讀更多故事 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group overflow-hidden rounded-[3rem] aspect-video bg-gray-100 flex items-center justify-center border-4 border-dashed border-gray-200">
                            <div className="text-gray-300 font-black italic">[ 訪談故事佔位框 ]</div>
                        </div>
                        <div className="relative group overflow-hidden rounded-[3rem] aspect-video bg-gray-100 flex items-center justify-center border-4 border-dashed border-gray-200">
                            <div className="text-gray-300 font-black italic">[ 權益倡導實錄佔位框 ]</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

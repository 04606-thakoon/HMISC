import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, History, Target, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Minimalist Header */}
            <div className="pt-32 pb-20 px-4 text-center bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="section-tag">About HMISC</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-6 uppercase">
                        緣起與<span className="text-gold">核心宗旨</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">Since 1989 • Hsinchu Catholic Diocese</p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                {/* Origins Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-secondary">
                            <History className="w-8 h-8" />
                            <h2 className="text-3xl font-bold">中心緣起</h2>
                        </div>
                        <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
                            <p>
                                台灣開始引進移工後，面對移工所遭遇的處境，新竹教區以實際行動投入關懷與協助的行列，並於<strong>1989年成立天主教關懷外勞小組</strong>，為移民移工服務中心的前身。
                            </p>
                            <p>
                                隨著政府政策的開放，來台的移工及移民人數逐年增加，在教區的支持下，該小組於<strong>1994年更名為移民移工服務中心 (HMISC)</strong>，並擴大運作為移民移工提供更多元的服務。
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10">
                                <div className="text-3xl font-black text-secondary mb-1">1989</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">小組成立</div>
                            </div>
                            <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10">
                                <div className="text-3xl font-black text-secondary mb-1">1994</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">更名擴大</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-x-0 inset-y-0 bg-secondary/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative aspect-square bg-gray-100 rounded-[3rem] overflow-hidden border-2 border-white shadow-2xl flex items-center justify-center text-gray-300 font-bold italic">
                            [ 1989年成立初期影像佔位 ]
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="bg-secondary text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden mb-32">
                    <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <Target className="w-16 h-16 text-gold mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">追隨耶穌基督的生活軌跡，<br /><span className="text-gold">捍衛每位勞動者的權利</span>。</h2>
                        <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed italic border-l-4 border-gold pl-8 text-left">
                            「致力促進本籍與外籍勞工享有更公平、正義及安全之工作條件，並期能促進勞基法納入公平及正義的元素，保障並保護勞工人權及尊嚴。」
                        </p>
                    </div>
                </section>

                {/* Targets & Philosophy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="glass-card p-12 rounded-[3rem] space-y-6">
                        <Users className="w-12 h-12 text-secondary" />
                        <h3 className="text-2xl font-bold">服務對象</h3>
                        <p className="text-gray-600 leading-relaxed">
                            我們提供多元服務，對象涵蓋：
                        </p>
                        <ul className="space-y-3">
                            {['在臺移工 (Migrant Workers)', '國際留學生', '移民及其家人們'].map((t, idx) => (
                                <li key={idx} className="flex items-center gap-3 font-bold text-gray-700">
                                    <div className="w-2 h-2 bg-gold rounded-full" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-12 rounded-[3rem] bg-background border-none space-y-6">
                        <ShieldCheck className="w-12 h-12 text-secondary" />
                        <h3 className="text-2xl font-bold">中心價值觀</h3>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <div className="text-gold font-black">公平 (Equity)</div>
                                <p className="text-xs text-gray-400">確保法規與環境對所有背景勞工一致。</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-gold font-black">尊嚴 (Dignity)</div>
                                <p className="text-xs text-gray-400">保障個人在勞動過程中受尊重的基本人權。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <section className="mt-32">
                    <div className="text-center mb-16">
                        <span className="section-tag">Visit Us</span>
                        <h2 className="text-3xl font-bold">中心位置</h2>
                    </div>
                    <div className="bg-gray-100 rounded-[3rem] h-[500px] flex items-center justify-center text-gray-400 relative overflow-hidden group">
                        <MapPin className="w-12 h-12 mb-4 group-hover:translate-y-[-10px] transition-transform" />
                        <span className="font-bold">[ 互動式地圖預留位 - Google Maps Embed ]</span>
                        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-gray-100">
                            <p className="font-black text-gray-900 mb-2">Hsinchu Center</p>
                            <p className="text-xs text-gray-500 leading-relaxed">新竹市水源街81號</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;

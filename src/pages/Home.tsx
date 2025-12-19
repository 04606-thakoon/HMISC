
import { Heart, Users, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section: The South-East Asian Prism */}
            <section className="relative bg-burgundy min-h-[90vh] flex items-center overflow-hidden">
                {/* Ghost Pattern: Batik (Opacity 4%) */}
                <div className="absolute inset-0 bg-batik-pattern opacity-[0.04] bg-repeat pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center z-10">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-left space-y-8 pr-0 md:pr-12">
                        {/* Silk Thread Connector */}
                        <div className="silk-thread"></div>

                        <h1 className="text-5xl md:text-6xl font-sans font-bold text-ivory leading-tight tracking-wide drop-shadow-lg">
                            跨越國界，<br />
                            <span className="text-gold">連結心與心的距離</span>
                        </h1>
                        <p className="text-xl text-ivory/90 font-sans tracking-wider leading-relaxed max-w-lg">
                            天主教新竹教區移民服務中心，為移工與這片土地搭建友善的橋樑。
                        </p>

                        <div className="flex flex-wrap gap-6 pt-6">
                            <Link to="/support" className="px-8 py-4 bg-secondary text-burgundy font-bold rounded-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300">
                                立即支持我們
                            </Link>
                            <Link to="/migrant-zone" className="px-8 py-4 border border-gold text-gold font-bold rounded-sm hover:bg-gold hover:text-burgundy transition-all duration-300">
                                尋求協助 (移工專用)
                            </Link>
                        </div>
                    </div>

                    {/* Hero Mural: 4 Central Figures Placeholder */}
                    <div className="w-full md:w-1/2 h-[500px] md:h-[700px] relative mt-12 md:mt-0 group">
                        {/* Using a representative image for the "Mural" feel */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599707367072-cd6ad66acc40?q=80&w=2670&auto=format&fit=crop')] bg-contain bg-center bg-no-repeat drop-shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"></div>
                        {/* Interaction Hint */}
                        <div className="absolute bottom-4 right-4 text-white/40 text-sm font-serif italic">
                            * Hover to explore cultural details
                        </div>
                    </div>
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



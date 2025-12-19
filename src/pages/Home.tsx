
import { Heart, Users, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 px-4 sm:px-6 lg:px-8">
                {/* Parallax Layer 1: Cultural Horizon (Simulated) */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1599707367072-cd6ad66acc40?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-fixed bg-center mix-blend-multiply pointer-events-none"></div>

                <div className="relative max-w-5xl mx-auto text-center z-10 space-y-12">
                    <div className="space-y-6">
                        <span className="text-secondary tracking-[0.2em] font-medium uppercase text-sm animate-fade-in-up">The Mural Gala 3.0</span>
                        <h1 className="text-6xl md:text-8xl font-title font-bold text-gray-900 tracking-tight leading-tight relative inline-block">
                            <span className="relative z-10">Cross Borders</span>
                            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-[3px] bg-gold"></div>
                        </h1>
                        <p className="mt-8 text-2xl md:text-3xl font-serif italic text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            "Connect hearts, bridge cultures."
                        </p>
                        <p className="mt-4 text-lg text-gray-800 font-sans max-w-2xl mx-auto opacity-80">
                            天主教新竹教區移民服務中心
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 pt-8">
                        <Link to="/support" className="px-10 py-4 bg-primary text-white rounded-sm font-bold tracking-widest hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-sans text-sm uppercase hover-dust">
                            Support Us
                        </Link>
                        <Link to="/migrant-zone" className="px-10 py-4 bg-transparent border border-gray-900 text-gray-900 rounded-sm font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 font-sans text-sm uppercase hover-dust">
                            Get Help
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            {/* Mission Statement */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-title font-bold text-gray-900 mb-16 relative inline-block">
                        Our Mission
                        <span className="block h-[2px] w-12 bg-gold absolute -bottom-4 left-1/2 -translate-x-1/2"></span>
                    </h2>

                    <div className="flex justify-center mb-20 space-x-16 flex-wrap gap-y-12">
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-500 relative overflow-hidden">
                                <span className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                <Heart className="text-accent w-10 h-10 relative z-10" />
                            </div>
                            <span className="font-header font-bold text-xl text-gray-800 tracking-wide uppercase">Compassion</span>
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-500 relative overflow-hidden">
                                <span className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                <Users className="text-secondary w-10 h-10 relative z-10" />
                            </div>
                            <span className="font-header font-bold text-xl text-gray-800 tracking-wide uppercase">Empowerment</span>
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-500 relative overflow-hidden">
                                <span className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                <HomeIcon className="text-primary w-10 h-10 relative z-10" />
                            </div>
                            <span className="font-header font-bold text-xl text-gray-800 tracking-wide uppercase">Integration</span>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto relative p-12 glass-card">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                        <p className="text-2xl font-serif text-gray-700 leading-loose italic">
                            "Following the path of Jesus Christ, we dedication ourselves to promoting fair, just, and safe working conditions for all workers."
                        </p>
                        <p className="mt-6 text-sm font-sans tracking-wider text-gray-500 uppercase">
                            — Hsinchu Migrants and Immigrants Service Center
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="py-20 bg-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">20+ 年</div>
                            <div className="text-sm text-gray-600 font-medium">深耕服務</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">5w+</div>
                            <div className="text-sm text-gray-600 font-medium">服務移工總數</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">12 處</div>
                            <div className="text-sm text-gray-600 font-medium">庇護與服務據點</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-2">120+</div>
                            <div className="text-sm text-gray-600 font-medium">場文化交流/年</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Projects Carousel Placeholder */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">最新動態與專案</h2>
                        <Link to="/projects" className="text-primary hover:text-yellow-600 font-medium flex items-center">
                            查看更多 <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <Link to="/projects" className="group block">
                            <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    [視覺佔位：移工正在使用平板學習]
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">移工數位學習計畫</h3>
                            <p className="text-gray-600 line-clamp-2">透過手機 App，打破時空限制，提供中文、理財等實用課程。</p>
                        </Link>

                        {/* Project Card 2 */}
                        <Link to="/news" className="group block">
                            <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    [視覺佔位：熱鬧的文化節慶典]
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">多元文化交流日</h3>
                            <p className="text-gray-600 line-clamp-2">邀請社區民眾與移工朋友同樂，分享美食與音樂，打破隔閡。</p>
                        </Link>

                        {/* Project Card 3 */}
                        <Link to="/news" className="group block">
                            <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    [視覺佔位：社工訪視個案]
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">急難救助案例分享</h3>
                            <p className="text-gray-600 line-clamp-2">阿蒂的故事：從工傷中重新站起來，看見希望的曙光。</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}



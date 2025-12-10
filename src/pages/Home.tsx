import React from 'react';
import { Heart, Users, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Visual Placeholder: 16:9 Full Width Background */}
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-accent mix-blend-multiply"></div>
                </div>

                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                        跨越國界，連結心與心的距離
                    </h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-200 mb-10">
                        天主教新竹教區移民服務中心，為移工與這片土地搭建友善的橋樑。
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link to="/support" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition shadow-lg transform hover:scale-105">
                            立即支持我們
                        </Link>
                        <Link to="/migrant-zone" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition">
                            尋求協助 (移工專用)
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">我們的使命</h2>
                    <div className="flex justify-center mb-10 space-x-12 flex-wrap gap-y-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <Heart className="text-accent w-8 h-8" />
                            </div>
                            <span className="font-bold text-lg text-gray-800">關懷</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="text-blue-600 w-8 h-8" />
                            </div>
                            <span className="font-bold text-lg text-gray-800">賦權</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <HomeIcon className="text-secondary w-8 h-8" />
                            </div>
                            <span className="font-bold text-lg text-gray-800">融合</span>
                        </div>
                    </div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        我們深信，每一位離鄉背井的移工，都是台灣社會不可或缺的一份子。MSC 致力於提供全方位的支持體系，從法律諮詢、急難救助到文化交流，我們不僅解決問題，更創造對話，讓台灣成為真正的多元友善家園。
                    </p>
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
};

export default Home;

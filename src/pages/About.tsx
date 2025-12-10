import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Header */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">關於我們 (About Us)</h1>
                    <p className="text-xl text-gray-600">看見需求，回應呼召。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Director's Message */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 relative overflow-hidden">
                        [視覺佔位：4:3 主任個人照]
                        {/* <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">主任的話：看見需求，回應呼召</h2>
                        <div className="prose text-gray-600 text-lg leading-relaxed mb-8">
                            <p>自成立以來，我看見無數移工朋友在異鄉奮鬥的淚水與汗水。天主的愛不分國界，我們在這裡，就是為了成為他們最堅強的後盾。</p>
                            <p className="mt-4">邀請您與我們同行，為這個社會注入更多溫暖與理解。</p>
                        </div>
                        <div className="font-bold text-xl text-primary">移民服務中心主任 敬上</div>
                    </div>
                </section>

                {/* History / Timeline */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">我們的足跡</h2>
                    <div className="max-w-3xl mx-auto border-l-4 border-primary/20 pl-8 space-y-12">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-gray-900">20xx 年</h3>
                            <p className="text-gray-600 mt-2">中心成立，首設庇護所，為急難移工提供安身之處。</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-gray-900">20xx 年</h3>
                            <p className="text-gray-600 mt-2">啟動移工中文班，協助數千名移工融入在地生活。</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-gray-900">20xx 年</h3>
                            <p className="text-gray-600 mt-2">獲頒社會貢獻獎，服務人次突破萬人。</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-secondary rounded-full border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-secondary">2025 年</h3>
                            <p className="text-gray-600 mt-2">全面推動數位轉型，推出線上移工學校，將服務延伸至雲端。</p>
                        </div>
                    </div>
                </section>

                {/* Locations */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">哪裡可以找到我們？</h2>
                    <div className="bg-gray-100 rounded-xl p-4 h-[400px] flex items-center justify-center relative overflow-hidden">
                        <div className="text-gray-500 flex flex-col items-center">
                            <MapPin className="w-12 h-12 mb-2 text-gray-400" />
                            <span>[視覺佔位：互動式地圖 - Google Maps Embed]</span>
                        </div>
                        {/* Embed Google Maps Iframe here */}
                    </div>
                    <p className="text-center text-gray-500 mt-4">
                        無論您身在何處，我們的服務據點都隨時準備為您提供協助。
                    </p>
                </section>

            </div>
        </div>
    );
};

export default About;

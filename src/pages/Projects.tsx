
import { Smartphone, GraduationCap, Music } from 'lucide-react';

export default function Projects() {
    return (
        <div className="bg-white min-h-screen">
            <div className="relative py-24 bg-ivory text-center overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-title font-bold text-gray-900 mb-4 relative inline-block">
                        Projects
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gold"></div>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 font-serif italic">Innovation and action, strictly expanding social impact.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Digital Learning */}
                {/* Digital Learning */}
                <section className="flex flex-col md:flex-row items-center gap-12 glass-card p-8 md:p-12 hover:border-gold/60 transition-colors duration-500">
                    <div className="w-full md:w-1/2">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100">
                            <Smartphone className="w-8 h-8 text-blue-800" />
                        </div>
                        <h2 className="text-3xl font-header font-bold text-gray-900 mb-4">Digital Learning for Migrants</h2>
                        <h3 className="text-lg font-serif italic text-gold mb-6">"Classroom in a Mobile Phone"</h3>
                        <p className="text-lg text-gray-700 leading-relaxed font-sans">
                            Breaking the limits of time and space, we are building a school in the cloud. Through mobile apps, migrant workers can learn Chinese, legal knowledge, and financial management anytime, anywhere, enhancing their competitiveness.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-80 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200">
                        [Visual: App Interface Mockup]
                    </div>
                </section>

                {/* Career Development */}
                <section className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">移工職涯發展：許一個更好的未來</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            移工旅程終有結束的一天，回國後該何去何從？我們提供職業技能培訓與創業輔導，協助他們帶著技術與夢想返鄉，翻轉貧窮。
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                        [視覺佔位：職訓課程上課情形]
                    </div>
                </section>

                {/* Cultural Exchange */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                            <Music className="w-8 h-8 text-pink-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">文化交流活動：我們都是一家人</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            透過美食、音樂與舞蹈，我們拉近彼此的距離。每年舉辦的多元文化節，是新竹地區最熱鬧的盛事，歡迎您攜家帶眷一起來體驗。
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                        [視覺佔位：活動海報 - 多元文化節]
                    </div>
                </section>

            </div>
        </div>
    );
}



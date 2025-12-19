
import { Calendar, User, FileText, ArrowRight } from 'lucide-react';

export default function News() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Header */}
            <div className="relative bg-burgundy py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-batik-pattern opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-ivory mb-4 tracking-wide relative inline-block">
                        最新消息 (News)
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold"></div>
                    </h1>
                    <p className="text-xl text-ivory/80 font-sans tracking-wider mt-4">活動報導、個案故事與法規解析。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Activities */}
                <section>
                    <div className="flex items-center mb-8 border-b pb-4">
                        <Calendar className="w-6 h-6 text-primary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">精彩活動回顧</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="woven-card group cursor-pointer hover:border-gold/50 transition-colors">
                            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                                [視覺佔位：烹飪比賽照片]
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-primary font-bold mb-2">2025.10.10</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">東南亞美食烹飪大賽</h3>
                                <p className="text-gray-600">透過與社區的互動，移工朋友們展現了他們的多才多藝，也讓台灣民眾看見了不一樣的文化風貌。</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                                [視覺佔位：節慶慶祝照片]
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-primary font-bold mb-2">2025.12.25</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">聖誕共融晚會</h3>
                                <p className="text-gray-600">來自不同國家的朋友齊聚一堂，分享節日的喜悅與祝福。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stories */}
                <section>
                    <div className="flex items-center mb-8 border-b pb-4">
                        <User className="w-6 h-6 text-accent mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">個案故事：阿蒂的回家路</h2>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            [視覺佔位：人物特寫]
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">從絕望到重生</h3>
                            <div className="prose text-gray-600 text-lg leading-relaxed mb-8">
                                <p>阿蒂因職業災害失去了右手手指，一度面臨被遣返的命運。在 MSC 的法律扶助下，她成功爭取到賠償金，並接受了職訓。</p>
                                <p>這是屬於她的重生故事，也是您的捐款所帶來的改變。</p>
                            </div>
                            <button className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition shadow-lg">
                                支持更多像阿蒂一樣的故事
                            </button>
                        </div>
                    </div>
                </section>

                {/* Regulations Analysis */}
                <section>
                    <div className="flex items-center mb-8 border-b pb-4">
                        <FileText className="w-6 h-6 text-secondary mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">法規解析：政策停看聽</h2>
                    </div>
                    <div className="bg-white border-l-4 border-secondary p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">移工留才久用方案解析</h3>
                        <p className="text-gray-600 mb-4">針對近期勞動部修正的移工留才久用方案，MSC 社工督導為您進行深入淺出的解析，分析其對雇主與移工的具體影響。</p>
                        <a href="#" className="text-secondary font-bold flex items-center hover:underline">
                            閱讀完整分析 <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}



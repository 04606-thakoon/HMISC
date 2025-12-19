
import { Briefcase, MessageCircle, Download } from 'lucide-react';

export default function EmployerZone() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Header */}
            <div className="relative bg-ivory py-24 text-center overflow-hidden border-b-4 border-burgundy">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bronze-drum opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="silk-thread mx-auto mb-6"></div>
                    <h1 className="text-4xl font-bold text-burgundy mb-4 tracking-wide">
                        雇主專區 (Employer Zone)
                    </h1>
                    <p className="text-xl text-gray-700 font-sans font-medium">合法聘僱，安心相處。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Regulations */}
                <section>
                    <div className="flex items-center mb-8">
                        <Briefcase className="w-8 h-8 text-accent mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">合法聘僱，責任與義務</h2>
                    </div>
                    <div className="woven-card p-10 border-gold/20">
                        <p className="text-lg text-gray-600 mb-6 font-sans leading-loose">
                            聘僱移工不僅是解決人力需求，更是一份法律與道義的責任。本區提供雇主應知的法律義務、聘僱流程圖解以及相關稅務資訊，協助您成為守法的好雇主。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">聘僱流程</h3>
                                <p className="text-sm text-gray-500">從招募、申請許可到入境簽證的完整步驟解析。</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">法律責任</h3>
                                <p className="text-sm text-gray-500">雇主應負擔的就業安定費、健保與勞保規定。</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">管理規範</h3>
                                <p className="text-sm text-gray-500">生活照顧服務計畫書撰寫要點。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Culture & Communication */}
                <section>
                    <div className="flex items-center mb-8">
                        <MessageCircle className="w-8 h-8 text-secondary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">跨越文化沒那麼難</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="prose text-gray-600 text-lg leading-relaxed mb-8">
                                <p>語言不通？習俗不同？我們整理了印尼、越南、菲律賓等國家的文化禁忌與溝通技巧，幫助您與移工夥伴建立良好的互信關係，提升工作效率。</p>
                            </div>
                            <button className="flex items-center bg-secondary text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition">
                                <Download className="mr-2 w-5 h-5" /> 下載雇主溝通指南
                            </button>
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            [視覺佔位：16:9 雇主與移工開心互動的照片]
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}




import { Smartphone, GraduationCap, Music } from 'lucide-react';

export default function Projects() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">專案計畫 (Projects)</h1>
                    <p className="text-xl text-gray-600">創新與行動，持續擴大社會影響力。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Digital Learning */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <Smartphone className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">移工數位遠距學習：手機裡的教室</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            打破時間與空間的限制，我們要在雲端建立一座學校。透過手機 App，移工可以隨時隨地學習中文、法律常識與理財知識，提升自我競爭力。
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                        [視覺佔位：App 使用介面示意圖]
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



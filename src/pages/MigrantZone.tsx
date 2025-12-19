
import { Users, Building2, HeartHandshake, BookOpen } from 'lucide-react';

export default function MigrantZone() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero / Header */}
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">移工專區 (Migrant Worker Zone)</h1>
                    <p className="text-xl opacity-90">了解在臺移工的現況、權益與資源。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Service Content (服務內容) */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
                        服務內容
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. 牧靈工作 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <span className="bg-primary/10 p-3 rounded-full text-primary">
                                    <HeartHandshake className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">1. 牧靈工作</h3>
                            </div>
                            <p className="text-gray-600">
                                以各國語言(如英文、越南文、印尼文等)舉行禮儀慶典、為移民的孩子講授要理、聖事準備，及培訓移民擔任輔祭等。
                            </p>
                        </div>

                        {/* 2. 遊說及倡導 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <span className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Users className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">2. 遊說及倡導</h3>
                            </div>
                            <p className="text-gray-600">
                                遊說及倡導移工、移民相關權益：聯合其他非政府組織(NGO)遊說並推動政府機關改善對移民、移工之不合宜法規及各項現況。
                            </p>
                        </div>

                        {/* 3. 危機處理 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <span className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Building2 className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">3. 危機處理</h3>
                            </div>
                            <p className="text-gray-600">
                                當移工和政府之間的橋樑，輔導及協商各項勞資爭議；提供安置保護服務及個案協助。
                            </p>
                        </div>

                        {/* 4. 正面性質的教育 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <span className="bg-primary/10 p-3 rounded-full text-primary">
                                    <BookOpen className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">4. 正面性質的教育</h3>
                            </div>
                            <p className="text-gray-600">
                                勞工權益相關課程、投資理財規劃、語言課程等。
                            </p>
                        </div>

                        {/* 5. 共同體情感的提升 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <span className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Users className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">5. 共同體情感的提升</h3>
                            </div>
                            <p className="text-gray-600">
                                為志工團體安置各項培訓課程、慶祝不同國家及宗教的節慶(例如：越南新年活動、菲律賓五月花節和聖誕節、印尼齋戒月和獨立紀念日。)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Regulations & Rights (From Wireframe) */}
                <section>
                    <div className="flex items-center mb-8">
                        <BookOpen className="w-8 h-8 text-secondary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">知法，才能保權</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <p className="text-lg text-gray-600 mb-6">
                                在臺工作期間，了解您的權益是保護自己的第一步。這裡整理了最新的勞動基準法規、工時規定以及加班費計算方式，並提供多語系版本下載。
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition">
                                    下載法規手冊 (中文)
                                </button>
                                <button className="bg-white border border-secondary text-secondary px-6 py-2 rounded-full font-bold hover:bg-secondary hover:text-white transition">
                                    Download (English)
                                </button>
                                <button className="bg-white border border-secondary text-secondary px-6 py-2 rounded-full font-bold hover:bg-secondary hover:text-white transition">
                                    Unduh (Indonesian)
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
                            [視覺佔位：法規懶人包封面]
                        </div>
                    </div>
                </section>

                {/* FAQ Section (From Wireframe) */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">常見問題解答 (FAQ)</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Q: 如果遭遇雇主不當對待，我該怎麼辦？</h3>
                            <p className="text-gray-600">A: 請保持冷靜，蒐集相關證據（如錄音、錄影、對話紀錄），並立即撥打 1955 專線求助，或聯繫本中心尋求法律諮詢。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Q: 居留證過期了該如何處理？</h3>
                            <p className="text-gray-600">A: 請務必在過期前前往移民署申請展延。若逾期未辦理，將面臨罰鍰甚至限令出國。如需詳細協助，請聯繫我們。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Q: 我可以更換雇主嗎？需要符合什麼條件？</h3>
                            <p className="text-gray-600">A: 根據就業服務法，若有不可歸責於受聘僱外國人之事由（如被看護者往生、雇主關廠歇業等），可在期限內申請轉換雇主。</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="text-primary font-bold hover:underline">查看完整 FAQ &rarr;</button>
                    </div>
                </section>

                {/* Emergency Section (From Wireframe) */}
                <section className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-red-700 mb-4">需要緊急協助？</h2>
                    <p className="text-lg text-red-600 mb-8 max-w-2xl mx-auto">
                        如果您正面臨人身安全威脅或緊急醫療需求，請立即聯繫我們或撥打以下專線。我們提供 24 小時庇護諮詢。
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="bg-white px-8 py-4 rounded-lg shadow-sm border border-red-100">
                            <span className="block text-gray-500 text-sm mb-1">勞動部諮詢申訴專線</span>
                            <span className="block text-3xl font-bold text-red-600">1955</span>
                        </div>
                        <div className="bg-white px-8 py-4 rounded-lg shadow-sm border border-red-100">
                            <span className="block text-gray-500 text-sm mb-1">MSC 緊急救援專線</span>
                            <span className="block text-3xl font-bold text-red-600">09xx-xxxxxx</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}





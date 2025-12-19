
import { CreditCard, Gift, Heart } from 'lucide-react';

export default function Support() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heart className="w-16 h-16 mx-auto mb-6 text-white/80" />
                    <h1 className="text-4xl font-bold mb-4">支持我們 (Support Us)</h1>
                    <p className="text-xl text-yellow-100">您的支持，是我們前行的力量。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Donation */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">每一筆捐款，都將成為改變的契機</h2>
                    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                            <div className="bg-primary h-4 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-gray-600 mb-8">
                            我們承諾財務透明，定期公告捐款徵信。捐款將用於移工急難救助、法律扶助及教育培力。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="border-2 border-primary rounded-lg p-4 cursor-pointer hover:bg-yellow-50 transition">
                                <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                                <h3 className="font-bold text-lg">單筆捐款</h3>
                                <p className="text-sm text-gray-500">適合一次性支持</p>
                            </div>
                            <div className="border-2 border-primary bg-primary text-white rounded-lg p-4 cursor-pointer shadow-md">
                                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                                <h3 className="font-bold text-lg">定期定額</h3>
                                <p className="text-sm text-yellow-100">每月 $500，成為守護天使</p>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-white text-xl font-bold py-4 rounded-lg hover:bg-yellow-600 transition">
                            立即線上捐款
                        </button>

                        <div className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded">
                            <p className="font-bold">銀行匯款資訊</p>
                            <p>銀行代碼: XXX (OO銀行) / 帳號: XXXXXX-XXXXXX</p>
                        </div>
                    </div>
                </section>

                {/* Material Donation */}
                <section>
                    <div className="flex items-center justify-center mb-12">
                        <Gift className="w-8 h-8 text-secondary mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">物資募集：讓愛物盡其用</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border-t-4 border-red-500 p-6 shadow-sm rounded-b-lg">
                            <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">急需</span>
                            <h3 className="text-xl font-bold mb-2">冬季衣物</h3>
                            <p className="text-gray-600">外套、毛衣 (全新或八成新)。協助新入境的熱帶國家移工度過台灣寒冬。</p>
                        </div>
                        <div className="bg-white border-t-4 border-yellow-500 p-6 shadow-sm rounded-b-lg">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">募集中</span>
                            <h3 className="text-xl font-bold mb-2">生活用品</h3>
                            <p className="text-gray-600">洗髮精、沐浴乳、衛生紙、洗衣粉。</p>
                        </div>
                        <div className="bg-white border-t-4 border-gray-400 p-6 shadow-sm rounded-b-lg bg-gray-50">
                            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">已額滿</span>
                            <h3 className="text-xl font-bold mb-2 text-gray-500">食品</h3>
                            <p className="text-gray-500">目前庫存充足，暫停募集白米與罐頭。</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition">
                            聯絡社工捐贈物資
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}



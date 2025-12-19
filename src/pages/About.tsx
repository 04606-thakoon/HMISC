
import { MapPin } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Header */}
            {/* Hero / Header */}
            <div className="relative bg-burgundy py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-batik-pattern opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-ivory mb-4 tracking-wide relative inline-block">
                        關於我們 (About Us)
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold"></div>
                    </h1>
                    <p className="text-xl text-ivory/80 font-sans tracking-wider">看見需求，回應呼召。</p>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">宗旨</h2>
                        <div className="prose text-gray-600 text-lg leading-relaxed mb-8">
                            <p>追隨耶穌基督的生活軌跡，致力促進本籍與外籍勞工享有更公平、正義及安全之工作條件，並期能促進勞基法納入公平及正義的元素，保障並保護勞工人權及尊嚴。</p>
                        </div>
                    </div>
                </section>

                {/* Origin (緣起) */}
                {/* Origin (緣起) */}
                <section>
                    <h2 className="text-3xl font-bold text-burgundy mb-8 text-center">緣起</h2>
                    <div className="max-w-4xl mx-auto woven-card p-10 border-t-4 border-gold">
                        <p className="text-gray-700 text-lg leading-loose mb-6 font-sans">
                            台灣開始引進移工後，面對移工所遭遇的處境，新竹教區以實際行動投入關懷與協助的行列，並於1989年成立天主教關懷外勞小組，為移民移工服務中心的前身。
                        </p>
                        <p className="text-gray-700 text-lg leading-loose font-sans">
                            隨著政府政策的開放，來台的移工及移民人數逐年增加，在教區的支持下，該小組於1994年更名為移民移工服務中心，並擴大運作為移民移工提供更多元的服務。
                        </p>
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
}



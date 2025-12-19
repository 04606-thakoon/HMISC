
import { MapPin } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Header */}
            {/* Hero / Header */}
            <div className="relative py-32 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-title font-bold text-gray-900 mb-6 relative inline-block">
                        About Us
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gold"></div>
                    </h1>
                    <p className="mt-8 text-2xl font-serif italic text-gray-600">"Seeing the need, responding to the call."</p>
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
                    <h2 className="text-3xl font-header font-bold text-gray-900 mb-8 text-center">Origin</h2>
                    <div className="max-w-4xl mx-auto glass-card p-10 border-t-4 border-gold">
                        <p className="text-gray-700 text-lg leading-loose mb-6 font-serif">
                            Since Taiwan began introducing migrant workers, facing the situations they encountered, the Hsinchu Diocese devoted itself to care and assistance with practical actions. The "Catholic Migrant Concern Group" was established in 1989, which was the predecessor of the Migrants and Immigrants Service Center.
                        </p>
                        <p className="text-gray-700 text-lg leading-loose font-serif">
                            With the opening of government policies and the increasing number of migrant workers and immigrants in Taiwan, supported by the diocese, the group was renamed the "Migrants and Immigrants Service Center" in 1994, expanding its operations to provide more diverse services.
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



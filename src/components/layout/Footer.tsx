import React from 'react';
import { Facebook, Mail, Phone, MapPin, Printer, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 batik-pattern opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="text-3xl font-black tracking-tighter text-gold">
                            HMISC
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                            天主教新竹教區移民服務中心 (HMISC) <br />
                            追隨耶穌基督的生活軌跡，致力促進本籍與外籍勞工享有更公平、正義及安全之工作條件。
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/Hsinchu.HMISC/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-secondary transition-all">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="mailto:hmisc_tw@yahoo.com" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-secondary transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gold text-sm font-black uppercase tracking-[0.2em] mb-8">聯絡資訊 Contact Info</h3>
                        <ul className="space-y-6 text-sm text-white/80">
                            <li className="flex gap-4 group">
                                <MapPin className="w-5 h-5 text-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>[300042] 新竹市水源街81號</span>
                            </li>
                            <li className="flex gap-4 group">
                                <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                                <div className="space-y-1">
                                    <a href="tel:03-5735375" className="block hover:text-white transition-colors">(03) 573-5375</a>
                                    <a href="tel:03-5735387" className="block hover:text-white transition-colors">573-5387</a>
                                    <a href="tel:03-5744439" className="block hover:text-white transition-colors">574-4439</a>
                                </div>
                            </li>
                            <li className="flex gap-4 group">
                                <Printer className="w-5 h-5 text-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>(03) 573-5377 (傳真)</span>
                            </li>
                            <li className="flex gap-4 group">
                                <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                                <a href="mailto:hmisc_tw@yahoo.com" className="hover:text-white transition-colors">hmisc_tw@yahoo.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gold text-sm font-black uppercase tracking-[0.2em] mb-8">快速連結 Quick Links</h3>
                        <ul className="space-y-4 text-sm font-bold text-white/70">
                            <li><Link to="/about" className="hover:text-gold flex items-center gap-2 transition-all">緣起宗旨<ArrowUpRight className="w-3 h-3" /></Link></li>
                            <li><Link to="/news" className="hover:text-gold flex items-center gap-2 transition-all">最新動態<ArrowUpRight className="w-3 h-3" /></Link></li>
                            <li><Link to="/migrant-zone" className="hover:text-gold flex items-center gap-2 transition-all">移工專區<ArrowUpRight className="w-3 h-3" /></Link></li>
                            <li><Link to="/support" className="hover:text-gold flex items-center gap-2 transition-all">支持與捐款<ArrowUpRight className="w-3 h-3" /></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gold text-sm font-black uppercase tracking-[0.2em] mb-8">緊急求助 Emergency</h3>
                        <div className="bg-accent/10 border border-accent/20 p-6 rounded-3xl space-y-4">
                            <div>
                                <p className="text-xs text-accent font-black uppercase tracking-widest mb-1">政府申訴專線</p>
                                <a href="tel:1955" className="text-2xl font-black text-white hover:text-accent transition-colors">1955</a>
                            </div>
                            <div className="pt-4 border-t border-accent/10">
                                <p className="text-[10px] text-white/40 leading-relaxed italic">
                                    提供24小時諮詢及申訴服務，<br />中心人員亦隨時為各項勞資爭議提供協商橋樑。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">
                    <p>&copy; {new Date().getFullYear()} HSINCHU CATHOLIC DIOCESE MIGRANTS AND IMMIGRANTS SERVICE CENTER.</p>
                    <div className="flex items-center gap-2">
                        WITH <Heart className="w-3 h-3 text-accent fill-accent" /> FOR HUMAN DIGNITY
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

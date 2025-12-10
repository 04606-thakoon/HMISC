import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('訊息已送出 (模擬)');
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">聯絡我們 (Contact Us)</h1>
                    <p className="text-xl opacity-90">我們樂意傾聽您的聲音。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">聯絡資訊</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                無論是尋求協助、合作提案或是給予鼓勵，我們都樂意傾聽。
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <span className="block font-bold text-gray-900">電話</span>
                                        <span className="text-gray-600">03-5735375、03-5735387</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <span className="block font-bold text-gray-900">Email</span>
                                        <span className="text-gray-600">info@msc-hsinchu.org</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <span className="block font-bold text-gray-900">地址</span>
                                        <span className="text-gray-600">[300042]新竹市水源街81號</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">追蹤我們</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                {/* Line Icon placeholder or import specifically */}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">有話想對我們說？</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">主旨</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">訊息內容</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-yellow-600 transition flex items-center justify-center">
                                送出訊息 <Send className="ml-2 w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

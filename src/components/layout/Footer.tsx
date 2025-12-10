import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">天主教新竹教區移民服務中心</h3>
                        <p className="text-sm">提供正確的資訊，幫助移工，募集物資。</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">聯絡資訊</h3>
                        <p className="text-sm">地址: [300042]新竹市水源街81號</p>
                        <p className="text-sm">電話: 03-5735375、03-5735387</p>
                        <p className="text-sm">傳真: 03-5735377</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">快速連結</h3>
                        {/* TODO: Add social links and quick navigation */}
                        <p className="text-sm">&copy; {new Date().getFullYear()} MSC. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

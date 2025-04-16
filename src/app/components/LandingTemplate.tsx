"use client";

import Image from 'next/image';
import { ReactNode, useState } from 'react';

export interface LandingTemplateProps {
  // 헤더 관련
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  
  // 히어로 섹션
  title: string;
  subtitle?: string;
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  
  // CTA(콜투액션) 버튼
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  
  // 특징/혜택 섹션
  features?: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  
  // 소셜 증명
  testimonials?: {
    quote: string;
    author: string;
    company?: string;
    avatar?: {
      src: string;
      alt: string;
    };
  }[];
  
  // 자주 묻는 질문
  faqs?: {
    question: string;
    answer: string;
  }[];
  
  // 푸터 정보
  footerLinks?: {
    title: string;
    href: string;
  }[];
  
  // 트래킹 ID (예: Google Analytics)
  trackingId?: string;
}

export default function LandingTemplate({
  logo,
  title,
  subtitle,
  heroImage,
  primaryCTA,
  secondaryCTA,
  features,
  testimonials,
  faqs,
  footerLinks,
}: LandingTemplateProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePrimaryCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowPopup(false)}></div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl z-10 mx-4 max-w-md">
            <h3 className="text-xl font-bold mb-2">준비중입니다</h3>
            <p className="mb-4">서비스 준비중입니다. 조금만 기다려 주세요.</p>
            <button 
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 헤더 */}
      <header className="w-full py-4 px-6 sm:px-10 flex justify-between items-center border-b">
        {logo && (
          <div className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        )}
        <nav className="hidden md:flex items-center gap-6">
          {footerLinks?.slice(0, 4).map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="w-full py-16 px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{subtitle}</p>}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={primaryCTA.href} 
                onClick={handlePrimaryCTAClick}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium text-center hover:bg-blue-700 transition-colors"
              >
                {primaryCTA.text}
              </a>
              
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href} 
                  className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-center font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>
          
          {heroImage && (
            <div className="flex-shrink-0">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                className="rounded-lg"
              />
            </div>
          )}
        </section>
        
        {/* 특징/혜택 섹션 */}
        {features && features.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10">주요 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                >
                  {feature.icon && <div className="mb-4">{feature.icon}</div>}
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* 고객 후기 */}
        {testimonials && testimonials.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-10 lg:px-20">
            <h2 className="text-3xl font-bold text-center mb-10">고객 후기</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar.src}
                        alt={testimonial.avatar.alt}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      {testimonial.company && (
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* 자주 묻는 질문 */}
        {faqs && faqs.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10">자주 묻는 질문</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="mb-6 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 푸터 */}
      <footer className="w-full py-10 px-6 sm:px-10 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          {footerLinks && footerLinks.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
          
          <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p>© {new Date().getFullYear()} 회사명. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
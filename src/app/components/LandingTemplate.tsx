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
  const [popupMessage, setPopupMessage] = useState({
    title: "준비중입니다",
    message: "서비스 준비중입니다. 조금만 기다려 주세요."
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkType?: string) => {
    e.preventDefault();
    
    // 링크 유형에 따라 다른 메시지 설정
    if (linkType === 'primary') {
      setPopupMessage({
        title: "서비스 준비중",
        message: "현재 결제 서비스를 준비중입니다. 곧 서비스가 오픈될 예정입니다."
      });
    } else if (linkType === 'secondary') {
      setPopupMessage({
        title: "정보 준비중",
        message: "추가 정보가 준비중입니다. 조금만 기다려주세요."
      });
    } else if (linkType === 'nav') {
      setPopupMessage({
        title: "페이지 준비중",
        message: "해당 페이지는 현재 준비중입니다."
      });
    } else if (linkType === 'footer') {
      setPopupMessage({
        title: "안내",
        message: "해당 콘텐츠는 현재 준비중입니다."
      });
    } else {
      setPopupMessage({
        title: "준비중입니다",
        message: "요청하신 페이지는 현재 준비중입니다."
      });
    }
    
    setShowPopup(true);
    
    // 3초 후 팝업 자동 닫기
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl z-10 mx-4 max-w-md transform transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{popupMessage.title}</h3>
            </div>
            <p className="mb-6 text-gray-600 dark:text-gray-300">{popupMessage.message}</p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              onClick={(e) => handleLinkClick(e, 'nav')}
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
                onClick={(e) => handleLinkClick(e, 'primary')}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium text-center hover:bg-blue-700 transition-colors"
              >
                {primaryCTA.text}
              </a>
              
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href} 
                  onClick={(e) => handleLinkClick(e, 'secondary')}
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
                  onClick={(e) => handleLinkClick(e, 'footer')}
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
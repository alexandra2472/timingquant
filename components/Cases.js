'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ==================== 案例数据配置区域 ====================
// 你只需要在这里更新图片和解读文字即可
// images: 图片URL数组
// captions: 对应的解读文字数组（与图片一一对应）
// ===========================================================

const caseData = [
  {
    // 案例1: 实战营 - ETH合约实操
    images: [
      'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop',
    ],
    captions: [
      '1H级别趋势跟随 - 结合结构判断，在趋势确认点位入场，避免追涨杀跌',
      '仓位管理实操 - 单笔风险控制在固定比例，保住本金才能持续盈利',
      '交易认知训练 - 识别哪些行为长期必亏，建立正确的合约操作思维',
    ],
  },
  {
    // 案例2: 现货研报 - BTC周期剧本
    images: [
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
    ],
    captions: [
      '月度行情剧本 - 每月发布BTC结构预判，提示关键高低点可能性区间',
      '易经周期定位 - 用六爻卦象判断当前所处的市场周期阶段',
      '年度剧本参考 - 为大资金波段投资者提供全年趋势方向与节奏预判',
    ],
  },
  {
    // 案例3: VIP会员 - 多标的研究与额外策略
    images: [
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop',
    ],
    captions: [
      '多标的研究 - 不局限于BTC/ETH，工作室持续跟踪其他有价值的交易对',
      '额外策略共享 - 实战营之外的交易策略，VIP成员优先获取',
      '开放式权益 - 工作室的研究成果与认知迭代，第一时间同步给VIP成员',
    ],
  },
];

export default function Cases({ t }) {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState([false, false, false]);
  const AUTO_PLAY_INTERVAL = 4000; // 自动轮播间隔时间（毫秒）

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((currentIndex, caseIndex) => {
          const caseItem = caseData[caseIndex];
          return (currentIndex + 1) % caseItem.images.length;
        })
      );
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (caseIndex, slideIndex) => {
    if (isAnimating[caseIndex]) return; // 动画中不允许切换

    setIsAnimating((prev) => {
      const newAnimating = [...prev];
      newAnimating[caseIndex] = true;
      return newAnimating;
    });

    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[caseIndex] = slideIndex;
      return newIndexes;
    });

    // 动画结束后重置状态
    setTimeout(() => {
      setIsAnimating((prev) => {
        const newAnimating = [...prev];
        newAnimating[caseIndex] = false;
        return newAnimating;
      });
    }, 300);
  };

  const goToPrev = (caseIndex, e) => {
    e.preventDefault();
    e.stopPropagation();
    const caseItem = caseData[caseIndex];
    goToSlide(
      caseIndex,
      (currentIndexes[caseIndex] - 1 + caseItem.images.length) % caseItem.images.length
    );
  };

  const goToNext = (caseIndex, e) => {
    e.preventDefault();
    e.stopPropagation();
    const caseItem = caseData[caseIndex];
    goToSlide(caseIndex, (currentIndexes[caseIndex] + 1) % caseItem.images.length);
  };

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.cases.title}
          </h2>
          <p className="text-lg text-gray-600">{t.cases.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseData.map((item, caseIndex) => (
            <div
              key={caseIndex}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* 轮播图区域 */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={item.images[currentIndexes[caseIndex]]}
                  alt={`${t.cases.items[caseIndex]?.title || `案例${caseIndex + 1}`} - 图${currentIndexes[caseIndex] + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
                    isAnimating[caseIndex]
                      ? 'opacity-0 scale-105 blur-sm'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                />

                {/* 左右箭头 */}
                {item.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => goToPrev(caseIndex, e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="上一张"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => goToNext(caseIndex, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="下一张"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* 底部圆点指示器 */}
                {item.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {item.images.map((_, slideIndex) => (
                      <button
                        key={slideIndex}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          goToSlide(caseIndex, slideIndex);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentIndexes[caseIndex] === slideIndex
                            ? 'bg-white'
                            : 'bg-white/50'
                        }`}
                        aria-label={`查看第${slideIndex + 1}张图`}
                      />
                    ))}
                  </div>
                )}

                {/* 当前图片序号 */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {currentIndexes[caseIndex] + 1}/{item.images.length}
                </div>
              </div>

              {/* 图片解读文字 */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-700">
                  {item.captions[currentIndexes[caseIndex]]}
                </p>
              </div>

              {/* 案例标题和描述 */}
              <div className="p-6 pt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.cases.items[caseIndex]?.title || `案例${caseIndex + 1}`}
                </h3>
                <p className="text-gray-600 text-sm">{t.cases.items[caseIndex]?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

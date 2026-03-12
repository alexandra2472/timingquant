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
    // 案例1: 六爻周期识别系统
    images: [
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop',
    ],
    captions: [
      '大周期顶底精准识别 - 2022年熊市底部提示、2023年顶部预警',
      '月度结构段前瞻 - 每月初发布当月行情结构预判及关键时间节点',
      '潜力品种爆发窗口 - 提前锁定尚处于低位且具备爆发条件的标的',
    ],
  },
  {
    // 案例2: 量化交易策略系统
    images: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&h=400&fit=crop',
    ],
    captions: [
      '趋势型策略 - 4H/D周期捕捉大级别趋势，自动生成买卖信号',
      '剥头皮短线策略 - 1-5分钟级别捕捉市场波动，积少成多',
      '策略回测表现 - 过去12个月趋势策略收益率65%，胜率62%',
      '多策略组合 - 趋势+剥头皮双策略互补，平滑收益波动',
    ],
  },
  {
    // 案例3: 社群风控赋能体系
    images: [
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop',
    ],
    captions: [
      '执行力系统性训练 - 21天纪律养成计划，拒绝情绪化交易',
      '结构段角色赋能 - 上涨/下跌/震荡期分别建议采用趋势/防守/剥头皮策略',
      '实时风控提示 - 六爻与量化信号共振时发出预警，及时规避风险',
      '仓位暴露管理 - 根据市场结构阶段动态调整仓位配置，控制回撤',
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

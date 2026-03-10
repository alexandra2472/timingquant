'use client';
import { useState } from 'react';
import { Check, X, Copy } from 'lucide-react';

export default function Pricing({ t }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [copied, setCopied] = useState(false);

  // 你的USDT TRC20钱包地址
  const walletAddress = 'TNzgvPPtrn26me7cAc6HYvBb9nTY8raZ8G';

  const handleJoin = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-black text-white ring-2 ring-black'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check
                      size={20}
                      className={plan.popular ? 'text-blue-400' : 'text-green-500'}
                    />
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleJoin(plan)}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 支付弹窗 */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              开通 {selectedPlan.name}
            </h3>
            <p className="text-gray-600 mb-6">
              价格：<span className="font-bold text-black">{selectedPlan.price}{selectedPlan.period}</span>
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">支付方式：USDT (TRC20)</p>
              <p className="text-xs text-gray-500 mb-3">请转账对应金额到以下地址</p>
              
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border rounded px-3 py-2 text-sm break-all">
                  {walletAddress}
                </code>
                <button
                  onClick={copyAddress}
                  className="p-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              {copied && <p className="text-green-500 text-xs mt-2">已复制到剪贴板</p>}
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p className="font-medium mb-1">付款教程：</p>
              <ol className="list-decimal list-inside text-sm text-gray-500 space-y-1">
                <li>打开钱包（imToken/Trust Wallet等）</li>
                <li>选择USDT，网络选择TRC20</li>
                <li>转账以上地址</li>
                <li>付款后联系QQ: 3822532541 确认</li>
              </ol>
            </div>

            <button
              onClick={() => window.open('https://wpa.qq.com/addfriend?uin=3822532541&site=qq&menu=yes', '_blank')}
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
            >
              我已付款，联系确认
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function Hero({ t, lang }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            {t.hero.description}
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

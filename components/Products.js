import { BookOpen, FileText, Crown } from 'lucide-react';

const icons = [BookOpen, FileText, Crown];

export default function Products({ t }) {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.products.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

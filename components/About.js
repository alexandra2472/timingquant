export default function About({ t }) {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 mb-4">{t.about.subtitle}</p>
          <p className="text-gray-600 leading-relaxed">{t.about.description}</p>
        </div>
      </div>
    </section>
  );
}

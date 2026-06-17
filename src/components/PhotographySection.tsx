const PhotographySection = () => {
  const categories = [
    {
      title: 'Sports',
      photos: [
        '/assets/photo/sports/IMG_7081.AVIF',
        '/assets/photo/sports/IMG_7082.AVIF',
        '/assets/photo/sports/IMG_7083.AVIF',
        '/assets/photo/sports/IMG_7084.AVIF',
        '/assets/photo/sports/IMG_7085.AVIF',
        '/assets/photo/sports/IMG_7086.AVIF',
        '/assets/photo/sports/IMG_7087.AVIF',
        '/assets/photo/sports/IMG_7088.AVIF',
        '/assets/photo/sports/IMG_7089.AVIF',
      ]
    },
    {
      title: 'Travel',
      photos: [
        '/assets/photo/travel/IMG_7126.AVIF',
        '/assets/photo/travel/IMG_7127.AVIF',
        '/assets/photo/travel/IMG_7128.AVIF',
        '/assets/photo/travel/IMG_7129.AVIF',
        '/assets/photo/travel/IMG_7130.AVIF',
        '/assets/photo/travel/IMG_7131.AVIF',
        '/assets/photo/travel/IMG_7132.AVIF',
        '/assets/photo/travel/IMG_7133.AVIF',
        '/assets/photo/travel/IMG_7134.AVIF',
        '/assets/photo/travel/IMG_7135.AVIF',
        '/assets/photo/travel/IMG_7136.AVIF',
        '/assets/photo/travel/IMG_7137.AVIF',
      ]
    },
    {
      title: 'Portraits',
      photos: [
        '/assets/photo/portraits/IMG_7150.AVIF',
        '/assets/photo/portraits/IMG_7152.AVIF',
        '/assets/photo/portraits/IMG_7153.AVIF',
        '/assets/photo/portraits/IMG_7154.AVIF',
        '/assets/photo/portraits/IMG_7155.AVIF',
        '/assets/photo/portraits/IMG_7156.AVIF',
      ]
    },
    {
      title: 'Events',
      photos: [
        '/assets/photo/events/IMG_7103.AVIF',
        '/assets/photo/events/IMG_7104.AVIF',
        '/assets/photo/events/IMG_7105.AVIF',
        '/assets/photo/events/IMG_7106.AVIF',
        '/assets/photo/events/IMG_7107.AVIF',
        '/assets/photo/events/IMG_7108.AVIF',
        '/assets/photo/events/IMG_7109.AVIF',
        '/assets/photo/events/IMG_7110.AVIF',
        '/assets/photo/events/IMG_7111.AVIF',
      ]
    }
  ];

  return (
    <section id="photography" className="px-6 py-16 md:px-16 md:py-28 bg-cream">
      <div className="text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          03. Photography
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Capturando la esencia<br /><em className="italic">en cada disparo</em>
        </h2>
      </div>

      <div className="space-y-24 max-w-[1400px] mx-auto">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="font-serif text-2xl mb-8 border-l-2 border-accent pl-4 text-dark/80">
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.photos.map((photo, idx) => (
                <div key={idx} className="relative aspect-[3/4] overflow-hidden group bg-dark/5">
                  <img 
                    src={photo} 
                    alt={`${cat.title} ${idx + 1}`} 
                    className="w-full h-full object-cover block transition-transform duration-700 ease-in-out brightness-[0.98] group-hover:scale-[1.1]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotographySection;

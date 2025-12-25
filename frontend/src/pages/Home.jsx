function Home() {
  return (
    <section className="home">

      <div className="hero">
        <h1 className="hero-title">Where Every Pour Tells a Story</h1>

        <p className="hero-subtitle">
          Handcrafted cocktails • Fine spirits • Late-night vibes
        </p>

        <div className="hero-actions hero-cta">
          <button className="btn primary">View Menu</button>
          <button className="btn secondary">Reserve a Table</button>
        </div>
      </div>

      <div className="categories">
        <div className="category-card">Whisky</div>
        <div className="category-card">Cocktails</div>
        <div className="category-card">Beer</div>
        <div className="category-card">Snacks</div>
      </div>

      <div className="story">
        <h2>The Barrel Street Experience</h2>
        <p>
          From carefully selected spirits to mood-setting lights, every detail
          at Barrel Street is designed for nights that linger.
        </p>
      </div>

    </section>
  );
}

export default Home;

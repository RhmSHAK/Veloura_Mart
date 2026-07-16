import React from 'react';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div className="space-y-6 border-2">

      <Hero />

      <section className="border-2 mx-auto px-3 sm:px-6 lg:px-3 py-2">
        <h2>Featured Products</h2>
      </section>

      <section className="border-2 mx-auto px-3 sm:px-6 lg:px-3 py-2">
        <h2>Categories</h2>
      </section>
    </div>
  );
};

export default Home;
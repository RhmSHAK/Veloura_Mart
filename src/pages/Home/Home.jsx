import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';


const Home = () => {
  return (
    <div className="space-y-3">

      <Hero />

      <section className=" mx-auto px-3 sm:px-6 lg:px-3 py-2">
        <FeaturedProducts />
      </section>

    </div>
  );
};

export default Home;
import { motion } from "framer-motion";

const HeroSlide = ({ slide }) => {
  return (
    <div className="container mx-auto min-h-screen px-6 py-20">

      <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          animate={{
              y: [0, -10, 0]
            }}
          
          className="max-w-xl"
        >
          <p className="text-blue-400 uppercase tracking-[5px]">
            {slide.subtitle}
          </p>

          <h1 className="mt-6 text-5xl text-animation font-black text-white lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-6 text-gray-300">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-5">
            <button className="rounded-lg bg-blue-600 px-8 py-4 text-white">
              Shop Now
            </button>

            <button className="rounded-lg border border-white px-8 py-4 text-white">
              Explore
            </button>
          </div>
        </motion.div>

        {/* Right */}

        <motion.img
          initial={{opacity: 0,scale: 0.8,y: 20, }}
          animate={{opacity: 1,scale: 1,y: [0, -15, 0], }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 3,repeat: Infinity,repeatType: "loop",ease: "easeInOut",},
          }}
          className="w-[500px]"
          src={slide.image}
          alt={slide.title}
        />
      </div>
    </div>
  );
};

export default HeroSlide;
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const glow = "#c084fc"; // neon purple
const sections = [
  {
    name: "Scripts",
    image: "https://i.postimg.cc/VLTvB1bh/image-(31).png",
    items: [
      {
        name: "Royal Military Police",
        images: [
          "https://i.postimg.cc/j5jn32g0/image_(27).png",
          "https://i.postimg.cc/s2mZJ7cf/image_(28).png",
          "https://i.postimg.cc/tRsHd6d2/image-(29).png",
        ],
      },
      {
        name: "Discord Bots",
        images: [
          "https://i.postimg.cc/g2CwddzG/image-(32).png",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        ],
      },
    ],
  },
  {
    name: "Map Development",
    image: "https://i.postimg.cc/y6gw3Hs6/image-(30).png",
    items: [
      {
        name: "Aston Academy RBLX",
        images: [
          "https://i.postimg.cc/fbpwcb9P/no-Filter.webp",
          "https://i.postimg.cc/qMw4mwKg/no-Filter.webp",
          "https://i.postimg.cc/yd0z0yBC/no-Filter.webp",
          "https://i.postimg.cc/RhR5DCNp/no-Filter.webp",
          "https://i.postimg.cc/QdPLPyxY/no-Filter.webp",
        ],
      },
      {
        name: "Rotherham South Yorkshire",
        images: [
          "https://i.postimg.cc/3r9cVcLM/image.png",
          "https://i.postimg.cc/cCJXddD0/image.png",
          "https://i.postimg.cc/XvQ54dtM/image.png",
        ],
      },
      {
        name: "Cambridge England",
        images: [
          "https://i.postimg.cc/bvNTxyhn/image.png",
          "https://i.postimg.cc/GtYJL9F0/image.png",
          "https://i.postimg.cc/YCtf7rjv/image.png",
        ],
      },
    ],
  },
  {
    name: "Vehicle Development",
    image: "https://i.postimg.cc/qqRqwF72/image-(26).png",
    items: [
      { name: "Heathrow Fire Engine", images: ["https://i.postimg.cc/C1xQxC1q/image.png"] },
      { name: "Audi Q5", images: ["https://i.postimg.cc/DzBxHWg5/image.png"] },
      { name: "Peugeot 308 Marked Police Car", images: ["https://i.postimg.cc/rwqbHLTc/image.png"] },
      { name: "BMW M4", images: ["https://i.postimg.cc/Y0w8m12R/image.png"] },
      { name: "Scania S730", images: ["https://i.postimg.cc/5y1qtbpk/image.png"] },
      { name: "Triumph Spitfire MKIII", images: ["https://i.postimg.cc/PfzQRv5k/image.png"] },
      { name: "Subaru Imprezza", images: ["https://i.postimg.cc/DZQLHRF9/image.png"] },
    ],
  },
];

export default function NeonPortfolio() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);

  const nextSlide = () => {
    if (!activeItem) return;
    setSlideIndex((prev) => (prev + 1) % activeItem.images.length);
  };

  const prevSlide = () => {
    if (!activeItem) return;
    setSlideIndex((prev) => (prev === 0 ? activeItem.images.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Neon Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-purple-600 opacity-20 animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-purple-400 opacity-20 animate-pulse delay-200"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-purple-300 opacity-20 animate-pulse delay-400"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/50 animate-pulse-slow"></div>
      </div>

      {/* Full-width Neon Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center justify-center relative z-10 py-8"
      >
        <div
          className="px-6 py-2 rounded-lg bg-black/50"
          style={{ boxShadow: `0 0 20px rgba(192,132,252,0.4)` }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-purple-300 text-center subtle-neon">
            chxxrlie_'s Development Portfolio
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl text-center mt-2 subtle-neon">
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .subtle-neon {
          text-shadow: 0 0 3px rgba(192,132,252,0.5),
                       0 0 6px rgba(192,132,252,0.4),
                       0 0 10px rgba(192,132,252,0.3);
        }
        .neon-text {
          text-shadow: 0 0 5px ${glow},
                       0 0 10px ${glow},
                       0 0 20px ${glow},
                       0 0 40px ${glow};
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-5px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Sections Grid */}
      <div className="relative z-10 p-10 grid md:grid-cols-3 gap-10 mb-16">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07, rotate: 1 }}
            onClick={() => {
              // Toggle section
              if (activeSection?.name === section.name) {
                setActiveSection(null);
                setActiveItem(null);
                setSlideIndex(0);
              } else {
                setActiveSection(section);
                setActiveItem(null);
                setSlideIndex(0);
              }
            }}
            className="cursor-pointer rounded-2xl overflow-hidden bg-gray-900 p-3 relative group"
            style={{ boxShadow: `0 0 30px ${glow}` }}
          >
            <img
              src={section.image}
              alt={section.name}
              className="rounded-xl h-56 w-full object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-semibold text-purple-300">{section.name}</h2>
              <p className="text-purple-200 mt-2 opacity-70 group-hover:opacity-100 transition">
                {section.items.length} Projects
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-purple-400 rounded-2xl opacity-0 group-hover:opacity-50 transition pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* AnimatePresence for smooth section swap */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection.name}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 mb-20 relative z-10"
            style={{ boxShadow: `0 0 40px ${glow}` }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-300 neon-text">
              {activeSection.name}
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {activeSection.items.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    // Toggle subcategory
                    if (activeItem?.name === item.name) {
                      setActiveItem(null);
                      setSlideIndex(0);
                    } else {
                      setActiveItem(item);
                      setSlideIndex(0);
                    }
                  }}
                  className="cursor-pointer py-3 px-4 rounded-xl text-center bg-black/40 hover:bg-purple-500/20 transition"
                  style={{ boxShadow: `0 0 15px ${glow}` }}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* Subcategory Images */}
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{ boxShadow: `0 0 50px ${glow}` }}
                >
                  <img
                    src={activeItem.images[slideIndex]}
                    alt={activeItem.name}
                    className="w-full h-96 object-cover"
                  />

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-purple-300 hover:scale-110 transition"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-purple-300 hover:scale-110 transition"
                  >
                    ❯
                  </button>

                  <button
                    onClick={() => setFullscreen(true)}
                    className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-purple-300 hover:scale-110 transition"
                  >
                    ⛶
                  </button>

                  <div className="bg-black/60 p-4 text-center text-xl font-semibold text-purple-200">
                    {activeItem.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// src/main.jsx
import React from "react";

function Main() {
  return <h1>Hello, this is Main!</h1>;
}

export default Main;

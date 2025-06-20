import { useState } from "react";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import TabManager from "../components/TabManager";
import SEO from "../components/SEO";
import ListCardGrid from "../components/ListCardGrid";

import hairStickImageHeader from "../assets/images/hobbies/hair_sticks/header.webp";
import hairStickImage2 from "../assets/images/hobbies/hair_sticks/2.webp";
import hairStickImage3 from "../assets/images/hobbies/hair_sticks/3.webp";
import hairStickImage4 from "../assets/images/hobbies/hair_sticks/4.webp";
import hairStickImage5 from "../assets/images/hobbies/hair_sticks/5.webp";
import hairStickImage6 from "../assets/images/hobbies/hair_sticks/6.webp";
import hairStickImage7 from "../assets/images/hobbies/hair_sticks/7.webp";

import readingImage1 from "../assets/images/hobbies/reading/book_image.webp";
import readingImage2 from "../assets/images/hobbies/reading/book_image_2.webp";
import readingImage3 from "../assets/images/hobbies/reading/background.webp";
import readingImage4 from "../assets/images/hobbies/reading/background_2.webp";
import readingImage5 from "../assets/images/hobbies/reading/background_3.webp";
import readingImage6 from "../assets/images/hobbies/reading/background_4.webp";

import travelImageHeader from "../assets/images/hobbies/travel/header.webp";
import travelImage1 from "../assets/images/hobbies/travel/1.webp";
import travelImage2 from "../assets/images/hobbies/travel/2.webp";
import travelImage3 from "../assets/images/hobbies/travel/3.webp";
import travelImage4 from "../assets/images/hobbies/travel/4.webp";
import travelImage5 from "../assets/images/hobbies/travel/5.webp";
import travelImage6 from "../assets/images/hobbies/travel/6.webp";
import travelImage7 from "../assets/images/hobbies/travel/7.webp";
import travelImage8 from "../assets/images/hobbies/travel/8.webp";
import travelImage9 from "../assets/images/hobbies/travel/9.webp";
import travelImage10 from "../assets/images/hobbies/travel/10.webp";
import travelImage11 from "../assets/images/hobbies/travel/11.webp";
import travelImage12 from "../assets/images/hobbies/travel/12.webp";
import travelImage13 from "../assets/images/hobbies/travel/13.webp";
import travelImage14 from "../assets/images/hobbies/travel/14.webp";
import travelImage15 from "../assets/images/hobbies/travel/15.webp";
import travelImage16 from "../assets/images/hobbies/travel/16.webp";
import travelImage17 from "../assets/images/hobbies/travel/17.webp";
import travelImage18 from "../assets/images/hobbies/travel/18.webp";
import travelImage19 from "../assets/images/hobbies/travel/19.webp";
import travelImage20 from "../assets/images/hobbies/travel/20.webp";
import travelImage21 from "../assets/images/hobbies/travel/21.webp";
import travelImage22 from "../assets/images/hobbies/travel/22.webp";
import travelImage23 from "../assets/images/hobbies/travel/23.webp";
import travelImage24 from "../assets/images/hobbies/travel/24.webp";
import travelImage25 from "../assets/images/hobbies/travel/25.webp";
import travelImage26 from "../assets/images/hobbies/travel/26.webp";
import travelImage27 from "../assets/images/hobbies/travel/27.webp";
import travelImage28 from "../assets/images/hobbies/travel/28.webp";
import travelImage29 from "../assets/images/hobbies/travel/29.webp";
import travelImage30 from "../assets/images/hobbies/travel/30.webp";
import travelImage31 from "../assets/images/hobbies/travel/31.webp";
import travelImage32 from "../assets/images/hobbies/travel/32.webp";
import travelImage33 from "../assets/images/hobbies/travel/33.webp";
import travelImage34 from "../assets/images/hobbies/travel/34.webp";

const Hobbies = () => {
  const [activeTab, setActiveTab] = useState<
    "hairSticks" | "reading" | "travel"
  >("travel");

  // Hobbies icon used in both the page heading and background
  const hobbiesIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"/>
      <path d="M8 6h9v2H8z"/>
    </svg>
  );

  // Hair sticks images
  const hairStickImages = [
    { src: hairStickImage2, alt: "Hair Stick 2" },
    { src: hairStickImage3, alt: "Hair Stick 3" },
    { src: hairStickImage4, alt: "Hair Stick 4" },
    { src: hairStickImage5, alt: "Hair Stick 5" },
    { src: hairStickImage6, alt: "Hair Stick 6" },
    { src: hairStickImage7, alt: "Hair Stick 7" },
  ];

  // Reading images
  const readingImages = [
    { src: readingImage1, alt: "Book 1" },
    { src: readingImage2, alt: "Book 2" },
    { src: readingImage4, alt: "Book 3" },
    { src: readingImage5, alt: "Book 4" },
    { src: readingImage6, alt: "Book 5" },
  ];

  // Travel images
  const travelImages = [
    { src: travelImage1, alt: "Travel 1" },
    { src: travelImage2, alt: "Travel 2" },
    { src: travelImage3, alt: "Travel 3" },
    { src: travelImage4, alt: "Travel 4" },
    { src: travelImage5, alt: "Travel 5" },
    { src: travelImage6, alt: "Travel 6" },
    { src: travelImage7, alt: "Travel 7" },
    { src: travelImage8, alt: "Travel 8" },
    { src: travelImage9, alt: "Travel 9" },
    { src: travelImage10, alt: "Travel 10" },
    { src: travelImage11, alt: "Travel 11" },
    { src: travelImage12, alt: "Travel 12" },
    { src: travelImage13, alt: "Travel 13" },
    { src: travelImage14, alt: "Travel 14" },
    { src: travelImage15, alt: "Travel 15" },
    { src: travelImage16, alt: "Travel 16" },
    { src: travelImage17, alt: "Travel 17" },
    { src: travelImage18, alt: "Travel 18" },
    { src: travelImage19, alt: "Travel 19" },
    { src: travelImage20, alt: "Travel 20" },
    { src: travelImage21, alt: "Travel 21" },
    { src: travelImage22, alt: "Travel 22" },
    { src: travelImage23, alt: "Travel 23" },
    { src: travelImage24, alt: "Travel 24" },
    { src: travelImage25, alt: "Travel 25" },
    { src: travelImage26, alt: "Travel 26" },
    { src: travelImage27, alt: "Travel 27" },
    { src: travelImage28, alt: "Travel 28" },
    { src: travelImage29, alt: "Travel 29" },
    { src: travelImage30, alt: "Travel 30" },
    { src: travelImage31, alt: "Travel 31" },
    { src: travelImage32, alt: "Travel 32" },
    { src: travelImage33, alt: "Travel 33" },
    { src: travelImage34, alt: "Travel 34" },
  ];

  return (
    <>
      <SEO
        title="Hobbies"
        description="Discover Qi Sun's personal interests including wooden hairpin collection, reading preferences, and travel experiences around the world."
        keywords="Qi Sun, hobbies, wooden hairpins, reading, travel, personal interests, collection"
      />
      <div className="pt-0">
        {/* Hobby Categories */}
        <Section 
          bgColor="fancy"
          backgroundIcon={hobbiesIcon}
        >
          <PageHeading
            headingText="My Hobbies"
            subheadingText="Exploring my creative interests and personal passions"
            icon={hobbiesIcon}
          />
          <TabManager
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={[
              { id: "travel", label: "Travel" },
              { id: "reading", label: "Reading" },
              { id: "hairSticks", label: "Wooden Hairpins" },
            ]}
            className="mt-8"
          />

          {/* Content based on active tab */}
          <div>
            {activeTab === "hairSticks" && (
              <>
                <div className="grid md:grid-cols-7 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="md:col-span-4"
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Wooden Hairpins Collection
                    </h2>
                    <p className="mb-4">
                      I have a collection of wooden hairpins from various
                      regions. My interest in wooden hairpins began when I was
                      in middle school. I was drawn to their elegant designs and
                      the craftsmanship involved in creating them.
                    </p>
                    <p className="mb-4">
                      I prefer hairpins made from sandalwood, ebony, and other
                      hardwoods. The natural fragrance of sandalwood is
                      particularly appealing to me. Each hairpin in my
                      collection has its own story and significance.
                    </p>
                    <p className="mb-4">
                      What I find most fascinating about wooden hairpins is how
                      they combine functionality with artistic expression.
                      They're not just accessories; they're pieces of wearable
                      art that connect me to traditional craftsmanship.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-lg md:col-span-3"
                  >
                    <div className="relative pb-[75%] overflow-hidden rounded-lg shadow-md">
                      <img
                        src={hairStickImageHeader}
                        alt="Wooden Hairpin"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Gallery
                    images={hairStickImages}
                    title="My Hairpin Collection"
                  />
                </motion.div>
              </>
            )}

            {activeTab === "reading" && (
              <>
                <div className="grid md:grid-cols-7 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-lg md:col-span-3"
                  >
                    <div className="relative pb-[75%] overflow-hidden rounded-lg shadow-md">
                      <img
                        src={readingImage3}
                        alt="Reading"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <div className="md:col-span-4">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                      style={{ height: "100%" }}
                    >
                      <h2 className="text-2xl font-bold mb-4">
                        My Reading Journey
                      </h2>
                      <p className="mb-4">
                        Reading has been a lifelong passion for me. I started
                        reading at a very young age and have never stopped. I
                        enjoy a wide range of genres, including fiction,
                        non-fiction, poetry, and philosophy.
                      </p>
                      <p className="mb-4">
                        I particularly enjoy reading books that challenge my
                        perspective and introduce me to new ideas. Some of my
                        favorite authors include Haruki Murakami, Gabriel García
                        Márquez, and Virginia Woolf.
                      </p>
                      <p className="mb-4">
                        I also enjoy sharing my thoughts on books through social
                        media. I have accounts on various platforms where I post
                        reflections and recommendations. It's a way for me to
                        connect with other book lovers and discover new reads.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <ListCardGrid 
                  title="My Reading List"
                  lists={[
                    {
                      title: "Biography",
                      items: [
                        "Isaac Khalatnikov - Landau: The Physicist and the Man",
                        "Lin Yutang - The Gay Genius: The Life and Times of Su Tungpo",
                        "Walter Isaacson - Steve Jobs",
                        "Andrew Roberts - Napoleon: A Life",
                        "Gerald Martin - Gabriel García Márquez: A Life",
                        "James Gleick - Genius: The Life and Science of Richard Feynman",
                        "Steven Naifeh and Gregory White Smith - Van Gogh: The Life",
                        "William Schoell - Sonny Boy: The Life of Al Pacino",
                        "Matthew Polly - Bruce Lee: A Life",
                        "Deirdre Bair - Simone de Beauvoir: A Biography",
                        "Jane Sherron De Hart - Ruth Bader Ginsburg: A Life",
                      ]
                    },
                    {
                      title: "Mystery",
                      items: [
                        "Edgar Allan Poe - The Murders in the Rue Morgue",
                        "Edgar Allan Poe - The Purloined Letter",
                        "Edgar Allan Poe - The Tell-Tale Heart",
                        "Shinzo Mitsuda - The Locked Room in the Sky",
                        "Shinzo Mitsuda - The Dismemberment on Dogra Magra Hill",
                        "Shinzo Mitsuda - The Phantom Detective and the House of Wax",
                        "Agatha Christie - Murder on the Orient Express",
                        "Agatha Christie - And Then There Were None",
                        "Agatha Christie - The Murder of Roger Ackroyd",
                        "Edogawa Ranpo - The Human Chair",
                        "Edogawa Ranpo - The Stalker in the Attic",
                        "Edogawa Ranpo - Beast in the Shadows",
                        "Arthur Conan Doyle - The Adventures of Sherlock Holmes",
                        "Arthur Conan Doyle - The Hound of the Baskervilles",
                        "Arthur Conan Doyle - The Sign of Four",
                      ]
                    },
                    {
                      title: "Classic Literature",
                      items: [
                        "Patrick Süskind - Perfume: The Story of a Murderer",
                        "Gabriel García Márquez - Leaf Storm",
                        "Emily Brontë - Wuthering Heights",
                        "Cao Xueqin - Dream of the Red Chamber",
                        "George Orwell - Animal Farm",
                        "Aldous Huxley - Brave New World",
                        "Albert Camus - The Stranger",
                        "Alexandre Dumas - The Count of Monte Cristo",
                        "W. Somerset Maugham - The Razor's Edge",
                        "Solomon Northup - Twelve Years a Slave",
                      ]
                    },
                    {
                      title: "Recent List",
                      items: [
                        "Simone de Beauvoir - Memoirs of a Dutiful Daughter",
                        "Robin Stern - The Gaslight Effect",
                        "Yubume Ono - One Hundred Strange Tales",
                        "Agatha Christie - Come, Tell Me How You Live",
                        "Various - Handbook of Latin American Social Thought",
                        "Judith Grisel - Never Enough: The Neuroscience and Experience of Addiction",
                      ]
                    },
                    {
                      title: "Current/Upcoming",
                      items: [
                        "Matt Haig - The Midnight Library",
                        "Kazuo Ishiguro - Klara and the Sun",
                        "Barack Obama - A Promised Land",
                        "Kristin Hannah - The Four Winds",
                        "Andy Weir - Project Hail Mary",
                      ]
                    }
                  ]}
                  columns={3}
                  gap={6}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Gallery images={readingImages} title="Gallery" />
                </motion.div>
              </>
            )}

            {activeTab === "travel" && (
              <>
                <div className="grid md:grid-cols-7 gap-8 mb-8">
                  <div className="md:col-span-4">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                      style={{ height: "100%" }}
                    >
                      <h2 className="text-2xl font-bold mb-4">
                        My Travel Adventures
                      </h2>
                      <p className="mb-4">
                        Traveling is one of my greatest passions. I've been
                        fortunate enough to visit many countries across Asia,
                        Europe, and North America. Each journey has enriched my
                        perspective and deepened my appreciation for different
                        cultures.
                      </p>
                      <p className="mb-4">
                        I'm particularly drawn to places with rich histories and
                        unique cultural traditions. Japan holds a special place
                        in my heart, with its blend of ancient traditions and
                        modern innovations. I've visited Tokyo, Kyoto, Osaka,
                        and several other cities, each offering its own distinct
                        experience.
                      </p>
                      <p className="mb-4">
                        Europe has also been a significant part of my travel
                        experiences. I've explored the historic streets of Rome,
                        admired the art in Paris, and enjoyed the vibrant
                        atmosphere of Barcelona. Living in Dublin has given me
                        the opportunity to explore Ireland's beautiful
                        landscapes and rich cultural heritage.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-lg md:col-span-3"
                  >
                    <div className="relative pb-[75%] overflow-hidden rounded-lg shadow-md">
                      <img
                        src={travelImageHeader}
                        alt="Travel"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
                <ListCardGrid 
                  title="Memorable Destinations"
                  lists={[
                    {
                      title: "Mainland China",
                      items: [
                        "Xi'an",
                        "Guilin",
                        "Suzhou",
                        "Chengdu",
                        "300+ cities in total",
                      ]
                    },
                    {
                      title: "East & Southeast Asia",
                      items: [
                        "Seoul, South Korea",
                        "Jeju Island, South Korea",
                        "Bangkok, Thailand",
                        "Chiang Mai, Thailand",
                        "Kyoto, Japan",
                      ]
                    },
                    {
                      title: "Europe",
                      items: [
                        "Vienna, Austria",
                        "Dublin, Ireland",
                        "Various places across Ireland",
                        "Other European countries",
                      ]
                    }
                  ]}
                  columns={3}
                  gap={6}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Gallery images={travelImages} title="Travel Memories" />
                </motion.div>
              </>
            )}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Hobbies;

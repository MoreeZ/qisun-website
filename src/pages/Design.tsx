import { useState } from "react";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import PDFViewer from "../components/PDFViewer";
import PageHeading from "../components/PageHeading";
import TabManager from "../components/TabManager";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

// Import PDF files directly
import brightJoyPdf from "../assets/pdfs/BrightJoy website.pdf";
import brightMasterPdf from "../assets/pdfs/BrightMaster website.pdf";

import poster1 from "../assets/images/design/posters/1.webp";
import poster2 from "../assets/images/design/posters/2.webp";
import poster3 from "../assets/images/design/posters/3.webp";
import poster4 from "../assets/images/design/posters/4.webp";
import poster5 from "../assets/images/design/posters/5.webp";

import web1 from "../assets/images/design/webs/1.webp";
import web2 from "../assets/images/design/webs/2.webp";
import web3 from "../assets/images/design/webs/3.webp";
import web4 from "../assets/images/design/webs/4.webp";
import web5 from "../assets/images/design/webs/5.webp";
import web6 from "../assets/images/design/webs/6.webp";
import web7 from "../assets/images/design/webs/7.webp";
import web8 from "../assets/images/design/webs/8.webp";
import web9 from "../assets/images/design/webs/9.webp";
import web10 from "../assets/images/design/webs/10.webp";
import web11 from "../assets/images/design/webs/11.webp";
import web12 from "../assets/images/design/webs/12.webp";
import web13 from "../assets/images/design/webs/13.webp";
import web14 from "../assets/images/design/webs/14.webp";
import web15 from "../assets/images/design/webs/15.webp";
import web16 from "../assets/images/design/webs/16.webp";
import web17 from "../assets/images/design/webs/17.webp";
import web18 from "../assets/images/design/webs/18.webp";
import web19 from "../assets/images/design/webs/19.webp";
import web20 from "../assets/images/design/webs/20.webp";
import web21 from "../assets/images/design/webs/21.webp";
import web22 from "../assets/images/design/webs/22.webp";
import web23 from "../assets/images/design/webs/23.webp";
import web24 from "../assets/images/design/webs/24.webp";
import web25 from "../assets/images/design/webs/25.webp";
import web26 from "../assets/images/design/webs/26.webp";
import web27 from "../assets/images/design/webs/27.webp";
import web28 from "../assets/images/design/webs/28.webp";
import web29 from "../assets/images/design/webs/29.webp";
import web30 from "../assets/images/design/webs/30.webp";

import bag1 from "../assets/images/design/bags/1.webp";
import bag2 from "../assets/images/design/bags/2.webp";
import bag4 from "../assets/images/design/bags/4.webp";
import bag5 from "../assets/images/design/bags/5.webp";

import cover1 from "../assets/images/design/covers/1.webp";
import cover2 from "../assets/images/design/covers/2.webp";
import cover3 from "../assets/images/design/covers/3.webp";
import cover4 from "../assets/images/design/covers/4.webp";
import cover5 from "../assets/images/design/covers/5.webp";
import cover6 from "../assets/images/design/covers/6.webp";
import cover7 from "../assets/images/design/covers/7.webp";
import cover8 from "../assets/images/design/covers/8.webp";
import cover9 from "../assets/images/design/covers/9.webp";
import cover10 from "../assets/images/design/covers/10.webp";

const Design = () => {
  const [activeTab, setActiveTab] = useState<
    "posters" | "webs" | "bags" | "covers"
  >("posters");

  // Poster images
  const posterImages = [
    { src: poster1, alt: "Poster Design 1" },
    { src: poster2, alt: "Poster Design 2" },
    { src: poster3, alt: "Poster Design 3" },
    { src: poster4, alt: "Poster Design 4" },
    { src: poster5, alt: "Poster Design 5" },
  ];

  // Web design images (selected subset)
  const webImages = [
    { src: web1, alt: "Web Design 1" },
    { src: web2, alt: "Web Design 2" },
    { src: web3, alt: "Web Design 3" },
    { src: web4, alt: "Web Design 4" },
    { src: web5, alt: "Web Design 5" },
    { src: web6, alt: "Web Design 6" },
    { src: web7, alt: "Web Design 7" },
    { src: web8, alt: "Web Design 8" },
    { src: web9, alt: "Web Design 9" },
    { src: web10, alt: "Web Design 10" },
    { src: web11, alt: "Web Design 11" },
    { src: web12, alt: "Web Design 12" },
    { src: web13, alt: "Web Design 13" },
    { src: web14, alt: "Web Design 14" },
    { src: web15, alt: "Web Design 15" },
    { src: web16, alt: "Web Design 16" },
    { src: web17, alt: "Web Design 17" },
    { src: web18, alt: "Web Design 18" },
    { src: web19, alt: "Web Design 19" },
    { src: web20, alt: "Web Design 20" },
    { src: web21, alt: "Web Design 21" },
    { src: web22, alt: "Web Design 22" },
    { src: web23, alt: "Web Design 23" },
    { src: web24, alt: "Web Design 24" },
    { src: web25, alt: "Web Design 25" },
    { src: web26, alt: "Web Design 26" },
    { src: web27, alt: "Web Design 27" },
    { src: web28, alt: "Web Design 28" },
    { src: web29, alt: "Web Design 29" },
    { src: web30, alt: "Web Design 30" },
  ];

  // Bag design images
  const bagImages = [
    { src: bag1, alt: "Bag Design 1" },
    { src: bag2, alt: "Bag Design 2" },
    { src: bag4, alt: "Bag Design 4" },
    { src: bag5, alt: "Bag Design 5" },
  ];

  // Cover design images
  const coverImages = [
    { src: cover1, alt: "Cover Design 1" },
    { src: cover2, alt: "Cover Design 2" },
    { src: cover3, alt: "Cover Design 3" },
    { src: cover4, alt: "Cover Design 4" },
    { src: cover5, alt: "Cover Design 5" },
    { src: cover6, alt: "Cover Design 6" },
    { src: cover7, alt: "Cover Design 7" },
    { src: cover8, alt: "Cover Design 8" },
    { src: cover9, alt: "Cover Design 9" },
    { src: cover10, alt: "Cover Design 10" },
  ];

  return (
    <>
      <SEO 
        title="Design" 
        description="Explore Qi Sun's design portfolio featuring posters, web designs, bags, and covers. View creative work across various design disciplines."
        keywords="Qi Sun, design, portfolio, posters, web design, bags, covers, graphic design"
      />
      <div className="pt-14">
      {/* Design Categories */}
      <Section bgColor="fancy">
      <PageHeading
        headingText="Design Portfolio"
        subheadingText="A collection of my design work across various mediums"
      />

        <TabManager
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={[
            { id: "posters", label: "Posters" },
            { id: "webs", label: "Web Designs" },
            { id: "bags", label: "Bag Designs" },
            { id: "covers", label: "Cover Designs" }
          ]}
          className="mt-20"
        />

        {/* Content based on active tab */}
        <div>
          {activeTab === "posters" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-lg mb-6">
                A collection of poster designs I've created for various purposes
                and events. Each poster is designed with careful attention to
                visual hierarchy, color theory, and typography.
              </p>
              <Gallery images={posterImages} />
            </motion.div>
          )}

          {activeTab === "webs" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-lg mb-6">
                My web design work showcases my ability to create modern,
                user-friendly interfaces that are both aesthetically pleasing
                and functional. Below are some examples of my web design
                projects.
              </p>
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <PDFViewer
                  pdfUrl={brightJoyPdf}
                  title="BrightJoy Website Design"
                  description="A comprehensive website design for BrightJoy, featuring modern UI elements and intuitive navigation."
                />
                <PDFViewer
                  pdfUrl={brightMasterPdf}
                  title="BrightMaster Website Design"
                  description="Website design for BrightMaster, showcasing clean layouts and effective visual communication."
                />
              </motion.div>
              <Gallery images={webImages} title="Web Design Samples" />
            </motion.div>
          )}

          {activeTab === "bags" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-lg mb-6">
                I've designed various bag styles, combining functionality with
                aesthetic appeal. My bag designs reflect my understanding of
                practical design that also makes a visual statement.
              </p>
              <Gallery images={bagImages} />
            </motion.div>
          )}

          {activeTab === "covers" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-lg mb-6">
                My cover designs range from book covers to album artwork, each
                created to capture the essence of the content while making a
                strong visual impression.
              </p>
              <Gallery images={coverImages} />
            </motion.div>
          )}
        </div>
      </Section>
    </div>
    </>
  );
};

export default Design;

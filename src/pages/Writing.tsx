import { useState } from "react";
import Section from "../components/Section";
import PDFViewer from "../components/PDFViewer";
import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import TabManager from "../components/TabManager";

// Import PDF files directly
import pearlPdf from "../assets/pdfs/A Pearl in the Palms - extract.pdf";
import threeThingsPdf from "../assets/pdfs/three things - extract.pdf";
import caveMartyrsPdf from "../assets/pdfs/Cave Martyrs - extract.pdf";
import lethalDosePdf from "../assets/pdfs/Lethal Dose Chapter 01.pdf";

// Define types for our project structure
type ProjectCategory = "film" | "short" | "tv" | "novel";

interface Project {
  title: string;
  description: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfDescription: string;
  tags: string[];
}

type ProjectsData = {
  [key in ProjectCategory]: Project[];
};

type CategoryTitles = {
  [key in ProjectCategory]: string;
};

const Writing = () => {
  // State to track which category is selected
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("film");

  // Writing icon used in both the page heading and background
  const writingIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"/>
    </svg>
  );

  // Define all writing projects
  const writingProjects: ProjectsData = {
    film: [
      {
        title: "A Pearl in the Palms",
        description:
          "This is my first English film script. The story features many exciting twists and turns. John, a mafia boss, has only one true friend — a gay man who, before his death, entrusts his child, Kitty, to John's care. John's subordinates each have distinct personalities, and they are all forced to adapt to Kitty's unexpected arrival.",
        pdfUrl: pearlPdf,
        pdfTitle: "A Pearl in the Palms - Extract",
        pdfDescription:
          'Read an extract from my film script "A Pearl in the Palms".',
        tags: ["Drama", "Crime", "Family"],
      },
    ],
    short: [
      {
        title: "Three Things",
        description:
          "This is my first English short film script. At the time, I had fallen asleep in class. Near the end of the lesson, the teacher asked for three students to volunteer. I had no idea what it was about, but I raised my hand anyway. Later, I found out that we were supposed to write a script before the next class. So I had no choice but to complete the script in just four days — including time for brainstorming and on-site research. The story follows a drug dealer and an international student from Trinity College Dublin. Their interactions become especially interesting due to the clash between Eastern and Western cultural traditions.",
        pdfUrl: threeThingsPdf,
        pdfTitle: "Three Things - Extract",
        pdfDescription:
          'Read an extract from my short film script "Three Things".',
        tags: ["Short Film", "Drama", "Cultural"],
      },
    ],
    tv: [
      {
        title: "Cave Martyrs",
        description:
          "Cave Martyrs is a fantasy-infused black comedy that unfolds on the small screen from Yuki's perspective, presenting a fictional story filled with themes of family, friendship, and love. This series is an original production, with a novel of the same name currently in progress. The show takes viewers into 21st-century Osaka, Japan, following the young protagonist, Yuki, as they stroll through the streets of Osaka, offering insights into Asian culture. In this story, Osaka experiences an unprecedented and massive earthquake. In its aftermath, a towering mountain filled with countless caves suddenly emerges, drastically transforming the lives of both residents and tourists.",
        pdfUrl: caveMartyrsPdf,
        pdfTitle: "Cave Martyrs - Extract",
        pdfDescription:
          'Read an extract from my TV series pilot "Cave Martyrs".',
        tags: ["TV Series", "Fantasy", "Black Comedy"],
      },
    ],
    novel: [
      {
        title: "Small Probability Events Series",
        description:
          "The Small Probability Events series is a collection of long-form Chinese novels I wrote and published on a major literary platform in China. The series includes three titles: Round and Round, Lethal Dose, and Sunny-up. At the time, it became the most viewed, most followed, and most commented series on the site. While I was still writing Lethal Dose—with over 100,000 words written and the story not yet completed—it was selected by a publishing house for print publication.",
        pdfUrl: lethalDosePdf,
        pdfTitle: "Lethal Dose - Chapter 1",
        pdfDescription:
          'Read the first chapter of my novel "Lethal Dose" from the Small Probability Events series.',
        tags: ["Novel", "Series", "Chinese Literature"],
      },
    ],
  };

  // Category titles for display
  const categoryTitles: CategoryTitles = {
    film: "Film Scripts",
    short: "Short Film Scripts",
    tv: "TV Series Pilots",
    novel: "Novels",
  };

  return (
    <>
      <Section 
        bgColor="fancy"
        backgroundIcon={writingIcon}
      >
        <PageHeading
          headingText="My Writing"
          subheadingText="A showcase of stories shaped by curiosity, craft, and a love for character-driven storytelling."
          icon={writingIcon}
        />

        {/* Category Navigation */}
        <div className="mb-12">
          <TabManager
            activeTab={activeCategory}
            setActiveTab={setActiveCategory}
            tabs={[
              { id: "film", label: categoryTitles.film },
              { id: "short", label: categoryTitles.short },
              { id: "tv", label: categoryTitles.tv },
              { id: "novel", label: categoryTitles.novel },
            ]}
            className="justify-center"
          />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            {writingProjects[activeCategory].map(
              (project: Project, index: number) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                >
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>

                      <div className="mb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <PDFViewer
                        pdfUrl={project.pdfUrl}
                        title={project.pdfTitle}
                        description={project.pdfDescription}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Writing;

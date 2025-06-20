import Section from "../components/Section";
import ContactCard from "../components/ContactCard";
import PageHeading from "../components/PageHeading";
import SEO from "../components/SEO";

const Contact = () => {
  // Contact icon used in both the page heading and background
  const contactIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Qi Sun. Connect via email, LinkedIn, or Instagram for collaborations, inquiries, or just to say hello."
        keywords="Qi Sun, contact, email, LinkedIn, Instagram, get in touch, collaboration"
      />
      <div className="pt-0">
        <Section bgColor="fancy" backgroundIcon={contactIcon}>
          <PageHeading
            headingText="Contact Me"
            subheadingText="I'd love to hear from you, whether you have a question, want to collaborate, or just want to say hello. I'm currently based in Dublin but open to remote opportunities and collaborations from anywhere in the world, so feel free to reach out through any of the channels below."
            icon={contactIcon}
          />

          <div className="grid md:grid-cols-3 md:mt-8 gap-8">
            {/* Email */}
            <ContactCard
              title="Email"
              description="The best way to reach me"
              link="mailto:qisun@tcd.ie"
              linkText="qisun@tcd.ie"
              delay={0.6}
              iconSvgClassName="text-primary"
              iconOutlined={true}
              iconSvgPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />

            {/* LinkedIn */}
            <ContactCard
              title="LinkedIn"
              description="Connect professionally"
              link="https://linkedin.com/in/qi-sun-706b34350"
              linkText="linkedin.com/in/qi-sun-706b34350"
              delay={0.7}
              isExternal={true}
              iconSvgClassName="text-primary"
              iconSvgPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />

            {/* Instagram */}
            <ContactCard
              title="Instagram"
              description="Follow my creative journey"
              link="https://www.instagram.com/qiqistu_/"
              linkText="@qiqistu_"
              delay={0.8}
              isExternal={true}
              iconSvgClassName="text-primary"
              iconSvgPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Contact;

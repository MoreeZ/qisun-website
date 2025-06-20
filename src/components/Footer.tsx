import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="bg-gray-900 text-white py-12">
      {!isContactPage && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting
            conversations.
          </p>
          <Link
            to="/contact"
            className="btn bg-white text-gray-900 hover:bg-gray-100 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className={`${!isContactPage ? 'pt-6' : ''} text-center text-gray-400`}>
          <p>&copy; {currentYear} Qi Sun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

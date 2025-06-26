// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10 mt-20 pb-40 border-t border-gray-800">
      <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: '"Great Vibes", cursive' }}>
        xsh4n4's
      </h2>
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="https://github.com/xsh4n4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="mailto:suhanashaik@example.com" className="hover:text-blue-400">
          <MdEmail />
        </a>
        <a href="https://linkedin.com/in/xsh4n4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/xsh4n4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} xsh4n4. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

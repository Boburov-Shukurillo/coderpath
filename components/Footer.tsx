import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../app/globals.css';

const Footer = () => {
  return (
    <footer className="text-white py-10 px-5">
      <div className="containerb grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 uppercase">CoderPath</h2>
          <p className="text-sm mt-2 text-gray-400">Level up your frontend skills with bite-sized quizzes.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/quizzes" className="hover:text-white">Quizzes</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} CoderPath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

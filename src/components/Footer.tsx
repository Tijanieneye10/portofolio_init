import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  socialLinks?: string[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TJ. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks?.map((link) => {
              if (link.includes("github")) {
                return (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                );
              }
              if (link.includes("linkedin")) {
                return (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                );
              }
              if (link.includes("twitter") || link.includes("x.com")) {
                return (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

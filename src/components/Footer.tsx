import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  socialLinks?: string[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-green-800/20 dark:border-green-900/30 bg-[#f0f0ea] dark:bg-[#050a05] mt-auto font-mono">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-green-700 dark:text-green-700">
            <span className="text-green-600 dark:text-green-600">$</span> echo &quot;© {new Date().getFullYear()} TJ. All rights reserved.&quot;
          </div>

          <div className="flex items-center gap-4">
            {socialLinks?.map((link) => {
              const getProps = () => {
                if (link.includes("github")) return { icon: <FaGithub size={16} />, label: "GitHub" };
                if (link.includes("linkedin")) return { icon: <FaLinkedin size={16} />, label: "LinkedIn" };
                if (link.includes("twitter") || link.includes("x.com")) return { icon: <FaXTwitter size={16} />, label: "X" };
                return null;
              };
              const props = getProps();
              if (!props) return null;
              return (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-700 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  aria-label={props.label}
                >
                  {props.icon}
                </a>
              );
            })}
          </div>

          <div className="text-[10px] text-green-800 dark:text-green-800">
            <span className="text-green-600 dark:text-green-600">▮</span> system uptime: {new Date().getFullYear() - 2018}y
          </div>
        </div>
      </div>
    </footer>
  );
}

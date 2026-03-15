import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ContactSectionProps {
  email?: string;
  socialLinks?: string[];
}

export default function ContactSection({ email: authorEmail, socialLinks }: ContactSectionProps) {
  const email = authorEmail || "brainydeveloper10@gmail.com";

  const twitterLink = socialLinks?.find((l) => l.includes("twitter") || l.includes("x.com"));
  const linkedinLink = socialLinks?.find((l) => l.includes("linkedin"));

  const channels = [
    {
      icon: <FaEnvelope size={18} />,
      label: "email",
      command: `$ mail ${email}`,
      href: `mailto:${email}`,
      value: email,
      color: "text-amber-600 dark:text-amber-500",
      hoverColor: "group-hover:text-amber-500 dark:group-hover:text-amber-400",
      borderHover: "hover:border-amber-500/50",
    },
    ...(twitterLink
      ? [
          {
            icon: <FaXTwitter size={18} />,
            label: "x",
            command: "$ open x.com",
            href: twitterLink,
            value: twitterLink.replace(/https?:\/\/(www\.)?(twitter\.com|x\.com)\//, "@"),
            color: "text-green-700 dark:text-green-600",
            hoverColor: "group-hover:text-green-500 dark:group-hover:text-green-400",
            borderHover: "hover:border-green-500/50",
          },
        ]
      : []),
    ...(linkedinLink
      ? [
          {
            icon: <FaLinkedin size={18} />,
            label: "linkedin",
            command: "$ open linkedin.com",
            href: linkedinLink,
            value: linkedinLink.replace(/https?:\/\/(www\.)?linkedin\.com\/in\//, "").replace(/\/$/, ""),
            color: "text-cyan-600 dark:text-cyan-500",
            hoverColor: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
            borderHover: "hover:border-cyan-500/50",
          },
        ]
      : []),
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Terminal window */}
          <div className="rounded-lg border border-green-900/40 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-2">
                contact — bash
              </span>
            </div>

            {/* Content */}
            <div className="p-5 md:p-8 font-mono space-y-6">
              <div>
                <div className="text-green-600 dark:text-green-700 text-sm mb-2">
                  <span className="text-green-500 dark:text-green-600">$</span> cat ~/contact.md
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-400 text-glow">
                  Get In Touch
                </h2>
                <p className="text-sm text-green-800/60 dark:text-green-500/60 mt-2">
                  Got a project in mind or want to collaborate? Let&apos;s connect.
                </p>
              </div>

              <div className="h-px bg-green-900/20" />

              <div className="space-y-3">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.label === "email" ? undefined : "_blank"}
                    rel={channel.label === "email" ? undefined : "noopener noreferrer"}
                    className={`flex items-center gap-4 p-3 rounded border border-green-900/20 dark:border-green-900/30 ${channel.borderHover} bg-gray-50 dark:bg-[#0d1a0d]/50 hover:bg-green-500/5 dark:hover:bg-green-500/5 transition-all group`}
                  >
                    <span className={`${channel.color} ${channel.hoverColor} transition-colors`}>
                      {channel.icon}
                    </span>
                    <div className="flex-grow min-w-0">
                      <div className="text-[10px] text-green-600 dark:text-green-700 mb-0.5">
                        {channel.command}
                      </div>
                      <div className="text-sm text-green-800 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors truncate">
                        {channel.value}
                      </div>
                    </div>
                    <span className="text-green-700 dark:text-green-700 group-hover:text-green-500 dark:group-hover:text-green-400 text-xs transition-colors">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <div className="h-px bg-green-900/20" />

              <div className="space-y-2">
                <div className="text-green-600 dark:text-green-700 text-xs">
                  <span className="text-green-500 dark:text-green-600">$</span> echo $STATUS
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm text-green-700 dark:text-green-400">
                    Open to freelance, contract &amp; full-time opportunities
                  </span>
                </div>
              </div>

              <div className="text-green-700 dark:text-green-700 text-xs pt-2">
                <span className="text-green-500 dark:text-green-600">$</span> echo &quot;Looking forward to hearing from you.&quot;
                <div className="text-green-800/60 dark:text-green-500/60 mt-1">
                  Looking forward to hearing from you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Mail, Instagram, Github, Copy } from 'lucide-react';


const YoutubeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="M10 15 L15 12 L10 9 Z"/>
  </svg>
);

const socials = [
  {
    icon: <Instagram size={28} />,
    label: 'Instagram',
    href: 'https://instagram.com/emryboii',
    color: '#E1306C',
  },
  {
    icon: <Github size={28} />,
    label: 'GitHub',
    href: 'https://github.com/emryboi',
    color: '#fff',
  },
  {
    icon: YoutubeIcon,
    label: 'YouTube',
    href: 'https://www.youtube.com/@EmryBoi',
    color: '#FF0000',
  },
];


const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center gap-10">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out via email or connect with me on social media!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              style={{ color: s.color }}
            >
              <span className="bg-dark-2 p-4 rounded-full border border-dark-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                {s.icon}
              </span>
              <span className="mt-2 text-sm text-gray-300 group-hover:text-primary transition-colors duration-200">
                {s.label}
              </span>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
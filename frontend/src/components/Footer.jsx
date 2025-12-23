import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/blog' },
    { name: 'Awards', path: '/awards' },
    { name: 'About', path: '/about' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: siteConfig.socialLinks.github,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: siteConfig.socialLinks.linkedin,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: siteConfig.socialLinks.twitter,
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">
                Let's connect.
              </h2>
              <p className="text-neutral-400 text-lg max-w-md mb-8">
                Open to internships, research collaborations, and interesting
                conversations about technology and impact.
              </p>
              <a
                href={`mailto:${siteConfig.email.replace('[REPLACE: your.email@example.com]', 'hello@example.com')}`}
                className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span>{siteConfig.email.replace('[REPLACE: your.email@example.com]', 'hello@example.com')}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Right Column */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Navigation */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-neutral-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group"
                      >
                        <social.icon className="h-4 w-4" />
                        {social.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {currentYear} {siteConfig.name.replace('[REPLACE: Your Name]', 'Diya')}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">
              Built with curiosity and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Logo } from '../icons';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Browse Designers', href: '/designers' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/how-it-works' }, // Link to how it works as no about page
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'Github' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center space-x-2">
              <Logo className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold font-headline">DesignVerse</span>
            </Link>
            <p className="max-w-xs text-muted-foreground">
              Connecting clients with the world's best designers for custom creative work.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-headline text-sm font-semibold tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} DesignVerse. All rights reserved.</p>
          <div className="flex space-x-2">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="ghost" size="icon" asChild>
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

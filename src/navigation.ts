import { APP_BLOG } from 'astrowind:config';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    ...(APP_BLOG.isEnabled
      ? [
          {
            text: 'Blog',
            href: getBlogPermalink(),
          },
        ]
      : []),
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'About', href: getPermalink('/about') },
        ...(APP_BLOG.isEnabled ? [{ text: 'Blog', href: getBlogPermalink() }] : []),
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { text: 'Implement', href: getPermalink('/services#offerings') },
        { text: 'Enhance', href: getPermalink('/services#offerings') },
        { text: 'Improve', href: getPermalink('/services#offerings') },
        { text: 'Platform Focus', href: getPermalink('/services#capabilities') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Chicago, IL', href: getPermalink('/contact') },
        { text: 'info@practicalalgorithm.com', href: 'mailto:info@practicalalgorithm.com' },
        { text: '773.469.6544', href: 'tel:7734696544' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/johnbratt' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/jbratt' },
    ...(APP_BLOG.isEnabled ? [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }] : []),
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Practical Algorithm, Inc. &middot; Registered Salesforce Partner &middot; All rights reserved.
  `,
};

import HomePage1 from "@/public/images/preview/home-v1.jpg";
import HomePage2 from "@/public/images/preview/home-v2.jpg";

// Inner Page Imports
// Note: You can reuse these images for similar page types if specific previews aren't available yet
import AboutImg from "@/public/images/preview/about.jpg";
import ServicesV1Img from "@/public/images/preview/services-v1.jpg";
import ServicesV2Img from "@/public/images/preview/services-v2.jpg";
import ServicesCarouselV1Img from "@/public/images/preview/services-carousel-v1.jpg";
import ServicesCarouselV2Img from "@/public/images/preview/services-carousel-v2.jpg";
import SingleServiceImg from "@/public/images/preview/service-details.jpg";
import TeamV1Img from "@/public/images/preview/team-v1.jpg";
import TeamV2Img from "@/public/images/preview/team-v2.jpg";
import TeamCarouselV1Img from "@/public/images/preview/team-carousel-v1.jpg";
import TeamCarouselV2Img from "@/public/images/preview/team-carousel-v2.jpg";
import TeamDetailsImg from "@/public/images/preview/team-details.jpg";
import CareerImg from "@/public/images/preview/career.jpg";
import JobDetailsImg from "@/public/images/preview/career-details.jpg";
import PortfolioV1Img from "@/public/images/preview/portfolio-v1.jpg";
import PortfolioV2Img from "@/public/images/preview/portfolio-v2.jpg";
import PortfolioCarouselV1Img from "@/public/images/preview/portfolio-carousel-v1.jpg";
import PortfolioCarouselV2Img from "@/public/images/preview/portfolio-carousel-v2.jpg";
import PortfolioMasonryV1Img from "@/public/images/preview/portfolio-masonry-v1.jpg";
import PortfolioMasonryV2Img from "@/public/images/preview/portfolio-masonry-v2.jpg";
import PortfolioDetailsV1Img from "@/public/images/preview/portfolio-details-v1.jpg";
import PortfolioDetailsV2Img from "@/public/images/preview/portfolio-details-v2.jpg";
import BlogV1Img from "@/public/images/preview/blog-v1.jpg";
import BlogV2Img from "@/public/images/preview/blog-v2.jpg";
import BlogStandardImg from "@/public/images/preview/blog-standard.jpg";
import BlogStandardLeftSidebarImg from "@/public/images/preview/blog-standard-left-sidebar.jpg";
import BlogDetailsImg from "@/public/images/preview/blog-details.jpg";
import BlogDetailsLeftSidebarImg from "@/public/images/preview/blog-details-left-sidebar.jpg";
import ContactImg from "@/public/images/preview/contact.jpg";
import FaqImg from "@/public/images/preview/faq.jpg";
import PricingImg from "@/public/images/preview/pricing.jpg";
import LoginImg from "@/public/images/preview/login.jpg";
import RegisterImg from "@/public/images/preview/register.jpg";
import TermsImg from "@/public/images/preview/terms.jpg";
import PrivacyImg from "@/public/images/preview/privacy.jpg";
import ComingSoonImg from "@/public/images/preview/coming.jpg";
import NotFoundImg from "@/public/images/preview/404.jpg";

import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {
  TbBrandTailwind,
  TbBrowserCheck,
  TbHeadphonesFilled,
  TbTerminal,
  TbFileCode,
} from "react-icons/tb";
import { SiGooglefonts, SiHtml5, SiCss3, SiGulp } from "react-icons/si";
import { FaPenNib, FaLayerGroup } from "react-icons/fa6";

const BASE_URL = "https://palaiche-template.vercel.app";

export const demoItems = [
  // ==========================================
  // HOME PAGES
  // ==========================================
  {
    id: 1,
    title: "Home Version One",
    image: HomePage1,
    previewLink: `${BASE_URL}/index.html`,
  },
  {
    id: 2,
    title: "Home Version Two",
    image: HomePage2,
    previewLink: `${BASE_URL}/home-two.html`,
  },

  {
    id: 16,
    title: "About Us",
    image: AboutImg,
    previewLink: `${BASE_URL}/about.html`,
  },

  // ==========================================
  // SERVICES
  // ==========================================
  {
    id: 3,
    title: "Services One",
    image: ServicesV1Img,
    previewLink: `${BASE_URL}/services-one.html`,
  },
  {
    id: 4,
    title: "Services Two",
    image: ServicesV2Img,
    previewLink: `${BASE_URL}/services-two.html`,
  },
  {
    id: 5,
    title: "Services Carousel One",
    image: ServicesCarouselV1Img,
    previewLink: `${BASE_URL}/services-carousel-one.html`,
  },
  {
    id: 6,
    title: "Services Carousel Two",
    image: ServicesCarouselV2Img,
    previewLink: `${BASE_URL}/services-carousel-two.html`,
  },
  {
    id: 7,
    title: "Single Service",
    image: SingleServiceImg,
    previewLink: `${BASE_URL}/single-service.html`,
  },

  // ==========================================
  // PORTFOLIO
  // ==========================================
  {
    id: 8,
    title: "Portfolio One",
    image: PortfolioV1Img,
    previewLink: `${BASE_URL}/portfolio-one.html`,
  },
  {
    id: 9,
    title: "Portfolio Two",
    image: PortfolioV2Img,
    previewLink: `${BASE_URL}/portfolio-two.html`,
  },
  {
    id: 10,
    title: "Portfolio Masonry One",
    image: PortfolioMasonryV1Img,
    previewLink: `${BASE_URL}/portfolio-masonry-one.html`,
  },
  {
    id: 11,
    title: "Portfolio Masonry Two",
    image: PortfolioMasonryV2Img,
    previewLink: `${BASE_URL}/portfolio-masonry-two.html`,
  },
  {
    id: 12,
    title: "Portfolio Carousel One",
    image: PortfolioCarouselV1Img,
    previewLink: `${BASE_URL}/portfolio-carousel-one.html`,
  },
  {
    id: 13,
    title: "Portfolio Carousel Two",
    image: PortfolioCarouselV2Img,
    previewLink: `${BASE_URL}/portfolio-carousel-two.html`,
  },
  {
    id: 14,
    title: "Single Portfolio One",
    image: PortfolioDetailsV1Img,
    previewLink: `${BASE_URL}/single-portfolio-one.html`,
  },
  {
    id: 15,
    title: "Single Portfolio Two",
    image: PortfolioDetailsV2Img,
    previewLink: `${BASE_URL}/single-portfolio-two.html`,
  },

  // ==========================================
  // PAGES - ABOUT & TEAM
  // ==========================================

  {
    id: 17,
    title: "Team One",
    image: TeamV1Img,
    previewLink: `${BASE_URL}/team-one.html`,
  },
  {
    id: 18,
    title: "Team Two",
    image: TeamV2Img,
    previewLink: `${BASE_URL}/team-two.html`,
  },
  {
    id: 19,
    title: "Team Carousel One",
    image: TeamCarouselV1Img,
    previewLink: `${BASE_URL}/team-carousel-one.html`,
  },
  {
    id: 20,
    title: "Team Carousel Two",
    image: TeamCarouselV2Img,
    previewLink: `${BASE_URL}/team-carousel-two.html`,
  },
  {
    id: 21,
    title: "Team Details",
    image: TeamDetailsImg,
    previewLink: `${BASE_URL}/team-details.html`,
  },

  // ==========================================
  // PAGES - CAREERS
  // ==========================================
  {
    id: 22,
    title: "Careers",
    image: CareerImg,
    previewLink: `${BASE_URL}/careers.html`,
  },
  {
    id: 23,
    title: "Career Details",
    image: JobDetailsImg,
    previewLink: `${BASE_URL}/career-details.html`,
  },

  // ==========================================
  // BLOG
  // ==========================================
  {
    id: 32,
    title: "Blog One",
    image: BlogV1Img,
    previewLink: `${BASE_URL}/blog-one.html`,
  },
  {
    id: 33,
    title: "Blog Two",
    image: BlogV2Img,
    previewLink: `${BASE_URL}/blog-two.html`,
  },
  {
    id: 34,
    title: "Blog Standard",
    image: BlogStandardImg,
    previewLink: `${BASE_URL}/blog-standard.html`,
  },
  {
    id: 35,
    title: "Blog Left Sidebar",
    image: BlogStandardLeftSidebarImg,
    previewLink: `${BASE_URL}/blog-left-sidebar.html`,
  },
  {
    id: 36,
    title: "Blog Details",
    image: BlogDetailsImg,
    previewLink: `${BASE_URL}/blog-details.html`,
  },
  {
    id: 37,
    title: "Blog Details Left Sidebar",
    image: BlogDetailsLeftSidebarImg,
    previewLink: `${BASE_URL}/blog-details-left-sidebar.html`,
  },

  // ==========================================
  // CONTACT
  // ==========================================
  {
    id: 38,
    title: "Contact",
    image: ContactImg,
    previewLink: `${BASE_URL}/contact.html`,
  },

  // ==========================================
  // PAGES - UTILITIES
  // ==========================================
  {
    id: 24,
    title: "Pricing",
    image: PricingImg,
    previewLink: `${BASE_URL}/pricing.html`,
  },
  {
    id: 25,
    title: "FAQs",
    image: FaqImg,
    previewLink: `${BASE_URL}/faq.html`,
  },
  {
    id: 26,
    title: "Coming Soon",
    image: ComingSoonImg,
    previewLink: `${BASE_URL}/coming-soon.html`,
  },
  {
    id: 27,
    title: "Register",
    image: RegisterImg,
    previewLink: `${BASE_URL}/register.html`,
  },
  {
    id: 28,
    title: "Login",
    image: LoginImg,
    previewLink: `${BASE_URL}/login.html`,
  },
  {
    id: 29,
    title: "Terms & Conditions",
    image: TermsImg,
    previewLink: `${BASE_URL}/terms-conditions.html`,
  },
  {
    id: 30,
    title: "Privacy Policy",
    image: PrivacyImg,
    previewLink: `${BASE_URL}/privacy-policy.html`,
  },
  {
    id: 31,
    title: "404 Page",
    image: NotFoundImg,
    previewLink: `${BASE_URL}/404.html`,
  },
];

export const features = [
  {
    id: 1,
    icon: <SiHtml5 />,
    title: "Built with HTML5, CSS3 & JS",
    desc: "Standard-compliant code structure ensuring high performance and compatibility across all modern web standards.",
  },
  {
    id: 2,
    icon: <TbBrandTailwind />,
    title: "Tailwind CSS v3.5+",
    desc: "Utilizes the latest Tailwind CSS framework for rapid UI development, utility-first styling, and easy customization.",
  },
  {
    id: 3,
    icon: <SiGulp />,
    title: "Gulp Build Tool",
    desc: "Automated workflow for compiling assets, minifying code, and optimizing images for production-ready deployment.",
  },
  {
    id: 4,
    icon: <FaLayerGroup />,
    title: "2 Unique Home Pages",
    desc: "Includes two distinct homepage layouts with Image Mega Menu Preview options for versatile presentation.",
  },
  {
    id: 5,
    icon: <TbFileCode />,
    title: "35+ Inner Pages",
    desc: "Comprehensive set of pages including Services, Portfolio variations, Team, Blog layouts, and Contact forms.",
  },
  {
    id: 6,
    icon: <HiMiniDevicePhoneMobile />,
    title: "Fully Responsive Design",
    desc: "Optimized for seamless viewing on Mobile, Tablet, and Desktop devices with fluid grid systems.",
  },
  {
    id: 7,
    icon: <TbBrowserCheck />,
    title: "Cross-Browser Compatible",
    desc: "Tested and verified to work seamlessly across Chrome, Firefox, Safari, Edge, and other major browsers.",
  },
  {
    id: 8,
    icon: <SiGooglefonts />,
    title: "Google Fonts Integration",
    desc: "Uses Kumbh/Sans fonts from Google Fonts library for modern typography that is easy to swap or customize.",
  },
  {
    id: 9,
    icon: <FaPenNib />,
    title: "Smooth Animations",
    desc: "Integrated Fade, Slide, and Hover transitions using CSS and JavaScript for an engaging user experience.",
  },
  {
    id: 10,
    icon: <SiCss3 />,
    title: "Easy Customization",
    desc: "Leverage Tailwind utility classes to change colors, spacing, and layout without writing custom CSS.",
  },
  {
    id: 11,
    icon: <TbTerminal />,
    title: "Clean & Commented Code",
    desc: "Well-structured and documented codebase makes it easy for developers to understand, modify, and maintain.",
  },
  {
    id: 12,
    icon: <TbHeadphonesFilled />,
    title: "Premium Support",
    desc: "Dedicated support team ready to assist with any issues or questions regarding the template usage.",
  },
];

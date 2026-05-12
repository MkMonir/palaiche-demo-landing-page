import Link from "next/link";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PreviewItem from "./components/PreviewItem";
import Title from "./components/Title";
import { demoItems, features } from "./data";
import Image from "next/image";
import ComingSoonImage from "@/public/images/preview/coming-soon.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section className="overflow-x-hidden scroll-image-section relative mb-20">
        {/* ITEMS */}
        <ul className="flex animate-scrolling-infinit relative -z-0">
          {demoItems?.map((item) => (
            <li key={item?.id} className="flex-scroll-item">
              <Image
                src={item.image}
                alt="Preview Image"
                className="max-h-[450px] object-top object-cover"
              />
            </li>
          ))}
        </ul>
        {/* ITEMS */}
      </section>

      {/* PREVIEW ITEMS */}
      <section id="demos" className="py-12 space-y-32">
        <div className="container">
          {/* TITLE */}
          <Title
            title="2 Home Pages"
            subtitle="Beautiful and Exclusive Homepages. Build Your Business's Complete Website Effortlessly"
          />
          {/* TITLE */}

          {/* ITEMS */}
          <div>
            <ul className="grid md:grid-cols-3 gap-x-8 lg:gap-y-12 gap-y-8">
              {demoItems?.slice(0, 2)?.map((item) => (
                <PreviewItem item={item} key={item?.id} />
              ))}

              {/* Comming Soon */}
              <li className="w-full p-5 rounded-md border border-solid border-border h-fit">
                <Image
                  src={ComingSoonImage}
                  alt="More Coming Soon..."
                  priority
                  className="w-full h-full rounded-md min-h-[420px] max-h-[420px] object-cover object-center "
                />
              </li>
              {/* Comming Soon */}
            </ul>
          </div>
          {/* ITEMS */}
        </div>
        <div className="container">
          {/* TITLE */}
          <Title
            title="23+ Inner Pages"
            subtitle="Exciting Inner Pages Make Your Website More Interesting and Flexible"
          />
          {/* TITLE */}

          {/* ITEMS */}
          <div>
            <ul className="grid md:grid-cols-3 gap-x-8 lg:gap-y-12 gap-y-8">
              {demoItems?.slice(2, -1)?.map((item) => (
                <PreviewItem item={item} key={item?.id} />
              ))}

              {/* Comming Soon */}
              <li className="w-full p-5 rounded-md border border-solid border-border h-fit">
                <Image
                  src={ComingSoonImage}
                  alt="More Coming Soon..."
                  priority
                  className="w-full h-full rounded-md min-h-[400px] max-h-[400px] object-cover object-center "
                />
              </li>
              {/* Comming Soon */}
            </ul>
          </div>
          {/* ITEMS */}
        </div>
      </section>
      {/* PREVIEW ITEMS */}

      {/* PREVIEW ITEMS */}
      <section id="feature" className="py-12">
        <div className="container">
          {/* TITLE */}
          <Title
            title="Key Features"
            subtitle="Unlock the Power of Our Platform"
          />
          {/* TITLE */}

          {/* FEATURE ITEMS */}
          <div>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 lg:gap-y-12 gap-y-8">
              {features?.map((item) => (
                <Feature item={item} key={item?.id} />
              ))}
            </ul>
          </div>
          {/* FEATURE ITEMS */}
        </div>
      </section>
      {/* PREVIEW ITEMS */}

      {/* FOOTER SECTION */}
      <footer className="py-20 mt-20 border-t-2 border-solid border-border hidden">
        <div className="container flex flex-col items-center">
          {/* TITLE */}
          <Title title="Let's go to Purchase?" subtitle="" />
          {/* TITLE */}

          <Link
            href="#"
            className="py-4 px-6 rounded-md border-2 border-solid border-primary font-semibold text-gray hover:bg-primary hover:text-black transition-all duration-500 hover:-translate-y-2 -mt-5"
          >
            PURCHASE NOW
          </Link>
        </div>
      </footer>

      <footer className="py-20 mt-20 border-t-2 border-solid border-border">
        <div className="container flex flex-col items-center">
          {/* TITLE */}
          <Title title="Need Support?" subtitle="" />
          {/* TITLE */}

          <div className="flex items-center gap-6 justify-center flex-wrap">
            <a
              href="mailto:khanmonir1335@gmail.com?subject=Techwizard Template Support!"
              className="py-4 px-6 rounded-md border-2 border-solid border-primary font-semibold text-gray hover:bg-primary hover:text-black transition-all duration-500 hover:-translate-y-2 -mt-5"
            >
              Contact Us
            </a>
            <Link
              href="#"
              className="py-4 px-6 rounded-md border-2 border-solid border-primary font-semibold text-gray hover:bg-primary hover:text-black transition-all duration-500 hover:-translate-y-2 -mt-5"
            >
              PURCHASE NOW
            </Link>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION */}
    </>
  );
}

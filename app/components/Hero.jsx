import Link from "next/link";
import { DOCS_URL, PURCHASE_URL } from "../data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:min-h-screen h-full flex flex-col justify-center pt-24 bg-cover bg-center hero-bg"
    >
      <div className="container relative z-20">
        <div className="max-w-5xl mx-auto py-14 flex flex-col items-center justify-center gap-14">
          <h1 className="md:text-[60px] sm:text-[35px] text-[25px] text-gray text-center font-bold tracking-wide leading-[1.3]">
            Palaiche - <span className="text-primary"> Multipurpose </span>
            Business Agency
            <span className="text-primary"> Html Tailwind CSS</span> Template.
          </h1>

          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Link
              href={PURCHASE_URL}
              className="py-4 px-6 rounded-md border-2 border-solid border-primary bg-primary font-semibold text-gray hover:bg-transparent hover:text-gray transition-all duration-500 hover:-translate-y-2 uppercase w-[200px] text-center"
            >
              PURCHASE NOW
            </Link>

            <Link
              href="#demos"
              className="py-4 px-6 rounded-md border-2 border-solid border-primary font-semibold text-gray hover:bg-primary hover:text-gray transition-all duration-500 hover:-translate-y-2 w-[200px] text-center"
            >
              View Demos
            </Link>

            <Link
              href={DOCS_URL}
              target="_blank"
              className="py-4 px-6 rounded-md border-2 border-solid border-border font-semibold text-gray hover:border-primary transition-all duration-500 hover:-translate-y-2 w-[200px] text-center"
            >
              Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

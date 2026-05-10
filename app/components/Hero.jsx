import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:min-h-screen h-full flex flex-col justify-center pt-24 bg-cover bg-center hero-bg"
    >
      <div className="container relative z-20">
        <div className="max-w-5xl mx-auto py-14 flex flex-col items-center justify-center gap-10">
          <h1 className="md:text-[55px] sm:text-[35px] text-[25px] text-gray text-center font-bold tracking-wide leading-[1.3]">
            TechWizard - <span className="text-primary"> IT Solutions </span>
            and <span className="text-primary">Technology</span> Services
            <span className="text-primary"> React NextJs</span> Template.
          </h1>

          <div className="flex flex-col-reverse items-center gap-8 sm:flex-row-reverse">
            <Link
              href="#"
              className="py-4 px-6 rounded-md border-2 border-solid border-primary font-semibold text-gray hover:bg-primary hover:text-black transition-all duration-500 hover:-translate-y-2"
            >
              PURCHASE NOW
            </Link>

            <Link
              href="#demos"
              className="py-4 px-6 rounded-md border-2 border-solid border-primary bg-primary font-semibold text-black hover:bg-transparent hover:text-gray transition-all duration-500 hover:-translate-y-2 uppercase"
            >
              View Demos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

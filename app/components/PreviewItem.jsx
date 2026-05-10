import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { HiArrowRight, HiArrowUp } from 'react-icons/hi';

const PreviewItem = ({ item }) => {
  return (
    <li className="group w-full">
      <Link
        href={item?.previewLink}
        target="_blank"
        className="p-5 rounded-md border border-solid border-border inline-block backdrop-blur relative w-full"
      >
        <Image
          src={item?.image}
          alt={item?.title}
          priority
          className="w-full h-full rounded-md max-h-[400px] min-h-[400px] object-cover object-top group-hover:object-bottom transition-all duration-[2s]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px] rounded-md">
          <button className="py-3 px-6 rounded-md bg-primary font-semibold text-gray tex-lg transition-all duration-500 hover:-translate-y-2 flex items-center gap-2">
            Live Preview
            <HiArrowRight className="text-xl -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
          </button>
        </div>
      </Link>

      <Link
        href={item?.previewLink}
        target="_blank"
        className="text-center p-4 text-2xl text-gray font-bold group-hover:text-primary transition-colors duration-500 flex justify-center items-center gap-3"
      >
        {item?.title}
        <HiArrowRight className="text-2xl -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
      </Link>
    </li>
  );
};

export default PreviewItem;

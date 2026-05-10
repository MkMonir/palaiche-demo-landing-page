import { Collapse } from "react-collapse";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Define an Accordion component that takes props: 'item', 'toggle', and 'open'.
const Accordion = ({ item, toggle, open, primary }) => {
  return (
    // container for the accordion item with styling.
    <div
      className={`w-full group ${
        primary && "bg-white rounded-3xl shadow-custom sm:py-[22px] sm:px-9 p-5"
      } `}
    >
      {/* Header section of the accordion */}
      <div
        className={`flex items-center cursor-pointer justify-between md:gap-32 sm:gap-10 gap-6 border-b-2 border-solid border-border pb-3`}
        onClick={toggle}
      >
        {/* Title of the accordion item, which can be clicked to toggle open/close */}
        <h4
          className={`font-medium cursor-pointer text-gray ${
            open && "text-primary"
          } sm;text-2xl text-xl`}
        >
          {item?.title}
        </h4>

        <button className="text-2xl">
          <FiChevronUp
            className={`${
              open ? "text-primary rotate-180" : "text-gray"
            } transition-all duration-500`}
          />
        </button>
      </div>

      {/* Content of the accordion, displayed when it's open */}
      <Collapse isOpened={open}>
        {/* Description text */}
        <p
          className={`lg:text-lg max-w-[980px] pt-3 text-justify text-[#c4cfde]`}
        >
          {item?.description}
        </p>
      </Collapse>
    </div>
  );
};

export default Accordion;

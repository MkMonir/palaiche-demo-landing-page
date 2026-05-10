const Feature = ({ item }) => {
  return (
    <li className="py-10 px-8 border border-solid border-border rounded-md space-y-5 grid place-items-center text-center shadow-md  hover:-translate-y-3 transition-all duration-500">
      <span className="text-6xl text-primary">{item?.icon}</span>
      <h4 className="text-[26px] font-medium text-gray">{item?.title}</h4>
      <p className="text-[#c4cfde]">{item?.desc}</p>
    </li>
  );
};

export default Feature;

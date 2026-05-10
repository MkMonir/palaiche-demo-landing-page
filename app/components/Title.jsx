const Title = ({ title, subtitle }) => {
  return (
    <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
      <h2 className="sm:text-5xl text-3xl font-bold text-primary">{title}</h2>
      <p className="md:text-2xl text-xl font-medium text-body">{subtitle}</p>
    </div>
  );
};

export default Title;

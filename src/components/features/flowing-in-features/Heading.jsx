const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12  md:text-center`}>
      {title && <h2 className="h2 text-5xl">{title}</h2>}
      {text && <p className="body-2 mt-4 text-[#c3c3c3]">{text}</p>}
    </div>
  );
};

export default Heading;

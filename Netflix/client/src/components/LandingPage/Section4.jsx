import Kids from "../../assets/Kids.png";

const Section4 = () => {
  return (
    <div className="w-[100%] h-[600px] bg-black p-5 flex flex-col-reverse items-center justify-center lg:flex-row lg:px-40 xl:px-60 gap-5 2xl:px-80">
      <div className="relative flex justify-center lg:flex-1">
        <img
          src={Kids}
          alt="TV-Image"
          className="w-[500px] z-10 xl:w-[800px]"
        />
      </div>
      <div className="flex flex-col gap-5 lg:flex-1">
        <h1 className="text-white text-3xl font-bold text-center lg:text-5xl lg:text-start">
          Create profiles for kids
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl lg:text-start">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </h1>
      </div>
    </div>
  );
};

export default Section4;

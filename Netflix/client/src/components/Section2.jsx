import Mobile from "../assets/Mobile.jpg";
import Movie from "../assets/Movie.png";
import DownloadIcon from "../assets/DownloadIcon.gif";

const Section2 = () => {
  return (
    <div className="w-[100%] h-[600px] bg-black p-5 flex flex-col-reverse items-center justify-center lg:flex-row lg:px-40 xl:px-60 gap-5 2xl:px-80">
      <div className="relative flex justify-center lg:flex-1">
        <img
          src={Mobile}
          alt="TV-Image"
          className="w-[500px] z-10 xl:w-[800px]"
        />
        <div className="absolute w-[350px] h-[100px] bg-black z-10 top-60 rounded-xl border-[2px] border-gray-500 p-2 flex items-center justify-between 2xl:top-80">
          <div className="flex h-full gap-2 items-center">
            <img src={Movie} alt="" className="h-full" />
            <div className="flex flex-col">
              <h1 className="text-white text-xl font-medium">
                Stranger Things
              </h1>
              <h1 className="text-blue-600 text-base">Downloading...</h1>
            </div>
          </div>
          <img src={DownloadIcon} alt="Download-Icon" className="h-2/3" />
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:flex-1">
        <h1 className="text-white text-3xl font-bold text-center lg:text-5xl lg:text-start">
          Download your shows to watch offline
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl lg:text-start">
          Save your favourites easily and always have something to watch.
        </h1>
      </div>
    </div>
  );
};

export default Section2;

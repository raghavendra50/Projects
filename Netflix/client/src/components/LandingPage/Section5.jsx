import { useState } from "react";
import { GoPlus } from "react-icons/go";

const Section5 = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (key) => {
    setOpen(open === key ? null : key);
  };
  const QA = {
    "What is Netflix?":
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    "How much does Netflix cost?":
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    "Where can I watch?":
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\nYou can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "How do I cancel?":
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "What can I watch on Netflix?":
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "Is Netflix good for kids?":
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  };
  return (
    <div className="w-[100%] min-h-[600px] bg-black p-5 flex flex-col items-center justify-center gap-10 lg:py-20">
      <h1 className="text-white text-3xl font-bold text-center lg:text-5xl lg:text-start">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-1">
        {Object.keys(QA).map((key) => {
          return (
            <div
              className="w-[400px] bg-[#2D2D2D] flex flex-col h-auto lg:w-[800px]"
              key={key}
            >
              <div className="w-[100%] h-1/4 flex justify-between items-center p-5 text-white text-xl">
                {key}{" "}
                <GoPlus
                  size="32px"
                  onClick={() => handleClick(key)}
                  className={`transform transition-transform duration-100 ease-in-out ${
                    open === key ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>
              <div className="w-[100%] bg-black h-[1px]"></div>
              <div
                className={`w-[100%] text-white text-xl text-justify transition-all ${
                  open === key
                    ? "p-5 max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {QA[key].split("\n").map((ele, index) => (
                  <p key={index}>{ele}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;

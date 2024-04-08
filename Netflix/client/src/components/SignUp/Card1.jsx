import { FaRegCircle } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Card1 = ({ obj, selected, setSelected, index }) => {
  const isSelected = selected === index;
  return (
    <div className="flex-1 flex flex-col m-1 cursor-pointer">
      <div className={`${index != 1 && "mt-[25px]"}`}>
        <div
          className={`h-[25px] rounded-t-2xl flex items-center justify-center text-white text-[11px] font-[Netflix-Sans-Regular]
          ${index == 1 ? "flex" : "hidden"}
          ${isSelected ? "bg-purple-700" : "bg-[#333]"}
          `}
        >
          Most Popular
        </div>
        <div
          className={`flex flex-col h-[130px] p-3 border-[1px] text-[12px] gap-1 font-[Netflix-Sans-Medium]
        ${isSelected ? `${obj.bgColor} text-white` : "bg-white text-black"}
        ${index == 1 ? "rounded-b-2xl" : "rounded-2xl"}
        `}
          onClick={() => setSelected(index)}
        >
          {isSelected ? (
            <IoMdCheckmarkCircle color="white" size={18} />
          ) : (
            <FaRegCircle color="#333" size={18} />
          )}
          <h1>{obj.plan}</h1>
          <h1 className="text-[#b0b0b0]">{obj.resolution}</h1>
          <h1 className="flex-1 flex justify-end items-end">
            ₹{obj.monthlyPrice}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card1;

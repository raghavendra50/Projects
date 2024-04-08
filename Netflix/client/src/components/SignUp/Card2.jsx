import { FaRegCircle } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Divider from "./Divider";

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
          className={`flex flex-col h-[650px] p-3 border-[1px] font-[Netflix-Sans-Regular] gap-5 ${
            index == 1 ? "rounded-b-2xl" : "rounded-2xl"
          }`}
          onClick={() => setSelected(index)}
        >
          <div
            className={`${obj.bgColor} h-[100px] rounded-2xl p-3 text-lg text-white`}
          >
            <h1>{obj.plan}</h1>
            <h1 className="text-sm">{obj.resolution}</h1>
            <div className="flex items-end justify-end">
              {isSelected ? (
                <IoMdCheckmarkCircle color="white" size={18} />
              ) : (
                <FaRegCircle color="#333" size={18} />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 font-[Netflix-Sans-Medium]">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">Monthly Price</h1>
              <h1 className="text-[#000000b3]">₹ {obj.monthlyPrice}</h1>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">
                Video and sound quality
              </h1>
              <h1 className="text-[#000000b3]">{obj.videoAndSoundQuality}</h1>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">Resolution</h1>
              <h1 className="text-[#000000b3]">{obj.resolution}</h1>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">Supported Devices</h1>
              <h1 className="text-[#000000b3]">{obj.supportedDevices}</h1>
            </div>
            <Divider />
            <div
              className={`flex flex-col gap-1 ${
                index == 3 ? "flex" : "hidden"
              }`}
            >
              <h1 className="text-[#767676] text-xs">
                Spatial audio (immersive sound)
              </h1>
              <h1 className="text-[#000000b3]">{obj.spatialAudio}</h1>
            </div>
            {index == 3 && <Divider />}
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">
                Devices your household can watch at the same time
              </h1>
              <h1 className="text-[#000000b3]">{obj.devicesAtSameTime}</h1>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
              <h1 className="text-[#767676] text-xs">Download devices</h1>
              <h1 className="text-[#000000b3]">{obj.downloadDevices}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

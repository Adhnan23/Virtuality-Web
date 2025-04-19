import { IoIosStar } from "react-icons/io";

function ReviewCard({ name, comment, device, imgUrl }) {
  return (
    <div className="flex flex-col gap-4 border border-[#474646] rounded-4xl p-6 md:p-8 lg:p-10 w-full">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <IoIosStar key={i} color="#b709c0" size={20} />
        ))}
      </div>
      <p className="text-[#787878] text-sm md:text-base">{comment}</p>
      <div className="flex items-center gap-3">
        <img className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src={imgUrl} alt={`${name}'s profile`} />
        <div>
          <h5 className="text-white font-bold text-base md:text-lg">{name}</h5>
          <p className="text-[#787878] text-xs md:text-sm">{device}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
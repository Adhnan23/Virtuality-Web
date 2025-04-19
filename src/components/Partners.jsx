import htc from "../assets/htc.svg";
import nba from "../assets/nba.svg";
import vk from "../assets/vk.svg";
import nike from "../assets/nike.svg";
import adobe from "../assets/adobe.svg";
import valve from "../assets/valve.svg";
import twitch from "../assets/twitch.svg";
import binance from "../assets/binance.svg";
import apple from "../assets/apple.svg";

function Partners() {
  return (
    <div className="py-8 mb-10 lg:mb-30">
      <h2 className="text-white text-2xl md:text-3xl mb-8 md:mb-10">Our Partners</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-40">
        {[ 
          { src: htc, alt: "HTC", className: "grayscale" },
          { src: nba, alt: "NBA" },
          { src: vk, alt: "VK" },
          { src: nike, alt: "Nike" },
          { src: adobe, alt: "Adobe", className: "filter invert" },
          { src: valve, alt: "Valve", className: "filter invert" },
          { src: twitch, alt: "Twitch" },
          { src: binance, alt: "Binance", className: "filter invert" },
          { src: apple, alt: "Apple" },
        ].map((logo, index) => (
          <div
            key={index}
            className="flex-grow basis-1/2 sm:basis-1/3 lg:basis-[20%] flex justify-center max-w-[120px] lg:max-w-[180px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`w-full h-auto opacity-70 hover:opacity-100 transition ${logo.className || ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
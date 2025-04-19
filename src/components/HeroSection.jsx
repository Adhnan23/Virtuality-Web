import HeroCard from "./HeroCard";
import GradientButton from "./GradientButton";

import heroImage from "../assets/hero-main.jpg";
import appleVision from "../assets/apple-vision-pro.png";
import htc from "../assets/htc-vive.jpg";
import valve from "../assets/valve.jpg";

function HeroSection() {
  return (
    <div className="w-full py-6 md:py-10">
      {/* Mobile Layout (default) */}
      <div className="block md:hidden">
        {/* Main Hero Content */}
        <div className="w-full relative rounded-4xl overflow-hidden mb-2">
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: "url('" + heroImage + "')",
              backgroundSize: "130%",
              backgroundPosition: "0% 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top left, rgba(0, 0, 0, 0.6), transparent 100%)`,
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative h-full flex flex-col justify-center p-6">
              <h1 className="text-lg sm:text-3xl font-bold text-white mb-4">
                IMMERSE YOURSELF INTO THE
                <br /> WORLD OF VIRTUAL REALITY
              </h1>
              <p className="text-[#979797] text-sm sm:text-base mb-6 max-w-xl">
                Try new emotions and impressions <br /> right at home
              </p>
              <GradientButton text="Catalog" to="/catalog" />
            </div>
          </div>
        </div>

        {/* Small Cards - Horizontal Row on Mobile */}
        <div className="grid grid-cols-3 gap-2 h-24">
          <HeroCard imgSrc={appleVision} text="APPLE VISION PRO" />
          <HeroCard imgSrc={htc} text="HTC VIVE FOCUS 3" />
          <HeroCard imgSrc={valve} text="VALVE INDEX VR KIT" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-10 md:gap-4 md:h-[70vh]">
        {/* Main Hero Content (div1) */}
        <div className="col-span-8 relative rounded-4xl overflow-hidden">
          <div
            className="absolute inset-0 p-2"
            style={{
              backgroundImage: "url('" + heroImage + "')",
              backgroundSize: "140%",
              backgroundPosition: "10% 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top left, rgba(0, 0, 0, 0.6), transparent 100%)`,
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                IMMERSE YOURSELF INTO THE
                <br /> WORLD OF VIRTUAL REALITY
              </h1>
              <p className="text-[#979797] text-lg mb-6 max-w-xl">
                Try new emotions and impressions <br /> right at home
              </p>
              <GradientButton text="Catalog" to="/catalog" />
            </div>
          </div>
        </div>

        {/* Sidebar cards (div2, div3, div4) - vertical column on desktop */}
        <div className="col-span-2 grid grid-rows-3 gap-4">
          <HeroCard imgSrc={appleVision} text="APPLE VISION PRO" />
          <HeroCard imgSrc={htc} text="HTC VIVE FOCUS 3" />
          <HeroCard imgSrc={valve} text="VALVE INDEX VR KIT" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

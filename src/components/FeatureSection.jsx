import FeatureCard from "./FeatureCard";
import GradientButton from "./GradientButton";

import vrRoom from "../assets/vr-room.jpg";

function FeatureSection() {
  return (
    <div 
      className="w-full py-6 md:py-10 mb-10 relative"
      style={{
        background: "radial-gradient(circle at center bottom, #4a1d5f, transparent 40%)",
      }}
    >
      <h2 className="text-white text-4xl mb-10">Online Store of The Future</h2>
      {/* Mobile Layout (default) */}
      <div className="block md:hidden">
        {/* Main Feature Content */}
        <div className="w-full relative rounded-4xl overflow-hidden mb-4">
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: "url('" + vrRoom + "')",
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
                WE WORK AROUND
                <br /> THE CLOCK
              </h1>
              <p className="text-white text-sm sm:text-base mb-6 max-w-xl">
                Our online store operates 24/7 <br />Every client important to us, so we do everything to make <br />you satisfied
              </p>
              <GradientButton text="View Products" to="/catalog" />
            </div>
          </div>
        </div>

        {/* Small Cards - Horizontal Row on Mobile */}
        <div className="grid grid-cols-2 gap-2 h-64">
          <FeatureCard title="30" text="Employees" />
          <FeatureCard title="1 000+" text="Satisfied Clients" />
          <FeatureCard title="5 Years" text="In the electronics market" />
          <FeatureCard title="24 Hours" text="Average delivery time" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 md:h-[60vh]">
        {/* Sidebar cards - Now in a 2x2 grid on the LEFT */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <FeatureCard title="30" text="Employees" />
          <FeatureCard title="1 000+" text="Satisfied Clients" />
          <FeatureCard title="5 Years" text="In the electronics market" />
          <FeatureCard title="24 Hours" text="Average delivery time" />
        </div>
        
        {/* Main Hero Content (div1) - Now on the RIGHT */}
        <div className="relative rounded-4xl overflow-hidden border-2 border-[#474646]">
          <div
            className="absolute inset-0 p-2"
            style={{
              backgroundImage: "url('" + vrRoom + "')",
              backgroundPosition: "center",
              backgroundSize: "cover",

              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none "
              style={{
                background: `radial-gradient(circle at top left, rgba(0, 0, 0, 0.6), transparent 100%)`,
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col h-full p-12">
              <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-white mb-8">
              WE WORK AROUND
              <br /> THE CLOCK
              </h1>
              <p className="text-white text-md lg:text-lg max-w-xl mb-40">
                Our online store operates 24/7 <br />Every client important to us, so we do everything to make <br />you satisfied
              </p>
              <GradientButton text="View Products" to="/catalog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
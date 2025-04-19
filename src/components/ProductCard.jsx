import GradientButton from "./GradientButton";

function ProductCard({ imageUrl, title, description }) {
  return (
    <div className="relative w-full rounded-4xl overflow-hidden shadow-xl h-full border-1 border-[#474646]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src={imageUrl}  
          alt={title} 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Gradient Overlay - Left to Right (Black to Transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 pt-[30%] md:pt-[30%] lg:pt-[20%] xl:pt-[20%] pl-[10%] p-6 text-white h-48 flex flex-col justify-between">
        <div>
          <h2 className="text-xl md:text-2xl 2xl:text-6xl font-bold text-white mb-4">{title}</h2>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        
        <div className="mt-6">
          <GradientButton
            text={"Order Now"}
            to="/"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
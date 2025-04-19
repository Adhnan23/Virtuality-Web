function FeatureCard({title, text}) {
    return (
      <div className="relative rounded-2xl md:rounded-4xl overflow-hidden h-full bg-[#151718] border-1 border-[#474646]">
      {/* Image container without forced aspect ratio */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h4 className="text-white text-3xl font-bold text-center lg:text-5xl lg:font-extrabold">{title}</h4>
        {/* Overlay text with gradient */}
          <h3 className="text-[#787878] text-xs text-center md:text-lg">{text}</h3>
      </div>
    </div>
    )
  }
  
  export default FeatureCard
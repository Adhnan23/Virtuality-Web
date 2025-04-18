function HeroCard({imgSrc, text}) {
  return (
    <div className="relative rounded-2xl md:rounded-4xl overflow-hidden h-full bg-gray-900">
    {/* Image container without forced aspect ratio */}
    <div className="w-full h-full">
      <img 
        src={imgSrc} 
        alt={text} 
        className="w-full h-full object-cover"
      />
      {/* Overlay text with gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white font-medium text-[12px] text-center md:text-lg">{text}</h3>
      </div>
    </div>
  </div>
  )
}

export default HeroCard
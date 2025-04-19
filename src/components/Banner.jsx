function Banner({ imgUrl, title, description }) {
    return (
      <div className="relative w-full h-56 md:h-128 flex items-center justify-start px-4 rounded-4xl overflow-hidden border-1 border-[#474646]">
        {/* Background image - Fixed to fill the entire height */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${imgUrl})`, 
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '65% 100%'  // Width 65%, height 100%
          }} 
        />
        
        {/* Gradient overlay - now covers more than half of the div */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17171717] via-black to-transparent" 
             style={{ width: '70%' }} />
        
        {/* Content */}
        <div className="relative z-10 text-white space-y-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2 md:ml-24 md:px-4">
          <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-white mb-8">{title}</h2>
          <p className="text-[#979797] text-md lg:text-2xl md:w-xl">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Banner;
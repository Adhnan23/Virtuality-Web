import ProductCard from './ProductCard'
import psvr from "../assets/psvr2.png"
import htcvive from "../assets/htcvive.png"

function ProductsSection() {
  return (
    <div
      className='w-full py-8 h-auto'
      style={{
        background: "radial-gradient(circle at center top, #202343, transparent 20%)",
      }}
    >
      <div className='flex flex-col md:flex-row w-full h-[80vh] lg:h-[50vh] md:h-[30vh] items-center md:justify-between gap-8'>
        <ProductCard
          imageUrl={htcvive}
          title="HTC VIVE PRO 2"
          description="A high-end VR headset with a wide field of view."
        />
        <ProductCard
          imageUrl={psvr}
          title="PLAYSTATION VR2"
          description="The latest VR headset from Sony."
        />
      </div>
    </div>
  )
}

export default ProductsSection

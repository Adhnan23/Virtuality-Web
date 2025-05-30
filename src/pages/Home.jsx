import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Banner from '../components/Banner';
import ProductsSection from "../components/ProductsSection";
import ReviewsSection from "../components/ReviewsSection";
import Partners from "../components/Partners";

import bannerImage from "../assets/vr-banner.avif"

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Banner
        imgUrl={bannerImage}
        title="Explore the Future of VR"
        description="Immerse yourself in a world of endless possibilities with our cutting-edge VR technology."
      />
      <ProductsSection />
      <ReviewsSection />
      <Partners />
    </>
  );
}

export default Home;

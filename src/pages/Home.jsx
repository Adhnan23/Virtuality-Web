import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Banner from '../components/Banner.jsx';

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
    </>
  );
}

export default Home;

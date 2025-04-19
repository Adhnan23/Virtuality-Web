import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  PiTelegramLogoBold,
  PiInstagramLogoBold,
  PiGoogleLogoBold,
} from "react-icons/pi";
import { TbBrandFacebook } from "react-icons/tb";

function Footer() {
  return (
    <footer className="relative bg-[#141414] left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="pt-12 px-8 md:px-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-6 items-start">
          <Link to="/" className="z-20">
            <img className="w-24 md:w-32" src={logo} alt="brand logo" />
          </Link>
          <p className="text-[#787878] text-sm md:text-base">
            Try new emotions and impressions <br /> right at home
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-row justify-between gap-12 sm:gap-32">
          <div>
            <h3 className="text-white mb-4 font-bold text-xl md:text-2xl">Company</h3>
            <ul className="text-[#787878] flex flex-col gap-3 text-sm md:text-base">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/special-conditions">Special conditions</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4 font-bold text-xl md:text-2xl">Production</h3>
            <ul className="text-[#787878] flex flex-col gap-3 text-sm md:text-base">
              <li><Link to="/">Virtual reality helmets</Link></li>
              <li><Link to="/">Virtual reality glasses</Link></li>
              <li><Link to="/">Virtual reality systems</Link></li>
              <li><Link to="/">Augmented reality glasses</Link></li>
              <li><Link to="/">Accessories</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-24 text-center pb-16 lg:pb-8">
        <div className="flex items-center justify-center gap-6">
          <PiInstagramLogoBold size={24} color={"#fff"} />
          <PiTelegramLogoBold size={24} color={"#fff"} />
          <TbBrandFacebook size={24} color={"#fff"} />
          <PiGoogleLogoBold size={24} color={"#fff"} />
        </div>
        <p className="text-[#787878] text-sm">© 2023 VR Store. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/special-condition">Special Condition</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
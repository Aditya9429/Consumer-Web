import { IoMdCall } from "react-icons/io";
import { FaShoppingCart, FaWallet, FaBell, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
export default function Navbar() {
    return (
        <nav className="flex justify-evenly gap-20 lg:justify-between items-center px-6 py-3 bg-[#FFF7E2] shadow-sm">

            <div className="hidden lg:flex items-center font-medium">
                <span className="mr-3"><IoMdCall /></span>
              <p className="text-[#3A643C]">9075543112</p>
            </div>
            <div className="flex items-center font-medium mr-10">
            <span className="lg:hidden mr-3"><FiMenu /></span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-green-700 font-bold text-xl tracking-widest">AMURAM</h1>
                <div className="hidden lg:flex space-x-6 mt-2 ">
                    <NavLink to="/" className={({ isActive }) => `font-semibold text-[#3A643B] ${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>Home</NavLink>
                    <NavLink to="/find" className={({ isActive }) => `font-semibold text-[#3A643B] ${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>Find Doctors</NavLink>
                    <NavLink to="/lab" className={({ isActive }) => `font-semibold text-[#3A643B] ${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>Lab Tests </NavLink>
                    <NavLink to="/Shop" className={({ isActive }) => `font-semibold text-[#3A643B] ${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>Shop</NavLink>
                    <NavLink to="/forum" className={({ isActive }) => ` font-semibold text-[#3A643B]${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>Forum</NavLink>
                    <NavLink to="/About" className={({ isActive }) => `font-semibold text-[#3A643B] ${isActive ? "border-b-2 border-green-700 text-[#3A643B]" : ""}`}>About Us</NavLink>

                </div>

            </div>
            <div className="hidden lg:flex items-center space-x-4 text-green-900 pt-5">

                <div className="relative bg-gray-200 p-2 rounded-full">
                    <FaWallet />
                    <span className="absolute -top-2 -right-2 bg-green-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">₹2</span>
                </div>


                <div className="relative bg-gray-200 p-2 rounded-full">
                    <FaShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-green-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                </div>


                <div className="bg-gray-200 p-2 rounded-full">
                    <FaBell />
                </div>


                <div className="bg-gray-200 p-2 rounded-full">
                    <FaUser />
                </div>
            </div>
            <div className=" flex items-center gap-2 lg:hidden ">
                <BsWallet2 className="text-green-700" />
                <IoMdCart  className="text-green-700"/>
                <button className="py-1 px-2 bg-green-700 text-white  text-sm rounded-2xl">Login</button>
            </div>

        </nav>
    );
}

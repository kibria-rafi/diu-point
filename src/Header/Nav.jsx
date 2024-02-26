import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-purple-800" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-purple-800" : ""
          } to="/about">Services</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-purple-800" : ""
          } to="/Career">Career</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-purple-800" : ""
          } to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#0A1D56] shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h1 className="text-purple-600 text-2xl font-semibold">
          DIU<span className="text-white">Point</span>
        </h1>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="text-white menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-4 ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="https://i.ibb.co/Zc5m7bv/images.png" />
          </div>
        </label>
        <Link to="/login">
          <button className="px-5 text-white font-bold py-1 rounded-lg bg-purple-900">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

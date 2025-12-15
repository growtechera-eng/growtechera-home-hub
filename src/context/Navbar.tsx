import { Link } from "react-router-dom";
import useAuth from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">GrowTech Era</Link>

      <div className="flex items-center gap-5">

        {/* Conditionally show Create Course for admin/instructor */}
        {user && ["admin", "instructor"].includes(user.role) && (
          <Link
            to="/create-course"
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Create Course
          </Link>
        )}

        {/* Auth Section */}
        {!user ? (
          <Link to="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

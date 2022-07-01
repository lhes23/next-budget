import Link from "next/link";
import { FaTachometerAlt } from "react-icons/fa";

const SideBar = () => {
  const navContent = (
    <nav className="text-gray-200 text-base font-semibold pt-3">
      <Link href="/dashboard">
        <a className={styles.anchor}>
          <FaTachometerAlt size={30} className="px-2" />
          Dashboard
        </a>
      </Link>
      <Link href="/dashboard">
        <a className={styles.anchor}>
          <FaTachometerAlt size={30} className="px-2" />
          All Users
        </a>
      </Link>
      <Link href="/dashboard">
        <a className={styles.anchor}>
          <FaTachometerAlt size={30} className="px-2" />
          Profile
        </a>
      </Link>
      <Link href="/dashboard">
        <a className={styles.anchor}>
          <FaTachometerAlt size={30} className="px-2" />
          Logout
        </a>
      </Link>
    </nav>
  );

  return (
    <>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-gradient-to-tr from-purple-500 to-pink-500">
        <div className="p-6">
          <Link href="/dashboard/add-budget">
            <a className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
              <i className="fas fa-plus mr-3" /> Add New Budget
            </a>
          </Link>
        </div>
        {navContent}
      </aside>

      {/* Mobile Header & Nav */}
      {/* <aside className="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
          <a
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <button className="text-white text-3xl focus:outline-none">
            <i className="fas fa-bars" />
            <i className="fas fa-times" />
          </button>
        </div>
        
        <nav className="flex flex-col pt-4">
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <i className="fas fa-tachometer-alt mr-3" />
            Dashboard
          </a>
          <a
            href="blank.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-sticky-note mr-3" />
            Blank Page
          </a>
          <a
            href="tables.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-table mr-3" />
            Tables
          </a>
          <a
            href="forms.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-align-left mr-3" />
            Forms
          </a>
          <a
            href="tabs.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-tablet-alt mr-3" />
            Tabbed Content
          </a>
          <a
            href="calendar.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-calendar mr-3" />
            Calendar
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-cogs mr-3" />
            Support
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-user mr-3" />
            My Account
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i className="fas fa-sign-out-alt mr-3" />
            Sign Out
          </a>
        </nav>
      </aside> */}
    </>
  );
};
export default SideBar;

const styles = {
  anchor:
    "flex items-center py-4 pl-6 nav-item hover:bg-red-500  hover:text-white",
};

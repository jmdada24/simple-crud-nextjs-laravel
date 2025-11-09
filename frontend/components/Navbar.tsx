import Link from "next/link";

const Navbar = () =>{


    return(
        <nav className="navbar  bg-primary text-primary-content">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand */}
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                MyProduct
                </Link>

            {/* Mobile Menu Toggle */}
            <div className="dropdown dropdown-end md:hidden">
                <button tabIndex={0} className="btn btn-ghost">
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
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </button>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/auth">Login</Link>
                    </li>
                </ul>
            </div>

                {/* Desktop Menu */}
                <ul className="menu menu-horizontal hidden md:flex items-center gap-2">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/auth">Login</Link>
                    </li>
                </ul>
        </div>
    </nav>


    );
       

}

export default Navbar;
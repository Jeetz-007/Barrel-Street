// import { NavLink , Outlet } from "react-router-dom";

// function Layout(){
//     return(
//         <>
//             <header className="navbar">
//                 <div className="logo">
//                     <a href="/">
//                         <img src="/images/Barrel_street.png" alt="" />
//                     </a>
//                 </div>

//                 <nav className="nav-links">
//                     <NavLink to="/" className="link">Home</NavLink>
//                     <NavLink to="/about" className="link">About</NavLink>
//                     <NavLink to="/menu" className="link">Menu</NavLink>
//                     <NavLink to="/contact" className="link">Contact</NavLink>
//                 </nav>
//             </header>


//             <main className="main-content">
//                 <Outlet />
//             </main>


//             {/* <Footer /> */}
//         </>
//     )
// }

// export default Layout



// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import Footer from "./Footer.jsx"
// import { useEffect, useState } from "react";

// function Layout() {
//   const location = useLocation();
//   const isHome = location.pathname === "/";
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <div className={isHome ? "home-bg" : ""}>
//       <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//         <div className="logo">
//           <a href="/">
//             <img src="./images/Barrel_street.png" alt="Barrel Street Logo" />
//           </a>
//         </div>

//         <nav className="nav-links">
//           <NavLink to="/" className="link">Home</NavLink>
//           <NavLink to="/about" className="link">About</NavLink>
//           <NavLink to="/menu" className="link">Menu</NavLink>
//           <NavLink to="/contact" className="link">Contact</NavLink>
//         </nav>
//       </header>

//       <main className="main-content">
//         <Outlet />
//       </main>

//       <Footer/>
//     </div>
//   );
// }

// export default Layout;

import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import { useEffect, useState } from "react";

function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // derive page name from route
  // "/" → "home"
  // "/menu" → "menu"
  // "/about" → "about"
  const pageClass =
    location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`page-wrapper ${pageClass}-bg`}>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <a href="/">
            <img
              src="./images/Barrel_street.png"
              alt="Barrel Street Logo"
            />
          </a>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/menu" className="link">Menu</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

import HeaderLogo from "@/components/global/header-logo";
import Navbar from "@/components/global/navbar";
import NavbarMobile from "@/components/global/navbar-mobile";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="relative z-50 shadow-sm">
      <div className="mx-auto max-w-6xl p-3">
        <div className="flex w-full items-center justify-between">
          <HeaderLogo />
          <Navbar navItems={navItems} />
          <NavbarMobile navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;

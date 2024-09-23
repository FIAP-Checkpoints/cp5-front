import { useState } from 'react';
import PropTypes from 'prop-types';
import { Car, MenuIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
];

const NavItem = ({ item, mobile, onClick }) => {
  const location = useLocation();
  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "w-full justify-start",
        location.pathname === item.path && "bg-accent text-accent-foreground",
        mobile && "text-lg"
      )}
      onClick={onClick}
    >
      <Link to={item.path} aria-label={item.name}>{item.name}</Link>
    </Button>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  mobile: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

NavItem.defaultProps = {
  mobile: false,
};

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => setIsOpen(false);
  const handleLoginClick = () => {
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ElectroDrive</span>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <NavItem key={item.name} item={item} onClick={handleNavItemClick} />
          ))}
          <Button variant="default" onClick={handleLoginClick}>Login</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <NavItem key={item.name} item={item} mobile onClick={handleNavItemClick} />
              ))}
              <Button className="w-full mt-4" onClick={handleLoginClick}>
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

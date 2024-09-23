import { Car } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import React from 'react';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="p-4 border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="text-xl font-bold">ElectroDrive</span>
        </div>

        <div className="md:hidden">
          <Menu>
            <Menu.Button className="flex items-center justify-center p-2 bg-gray-200 rounded-md">
              Menu
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Button
                      variant="ghost"
                      asChild
                      className={`w-full text-left ${active ? 'bg-gray-200' : ''}`}
                    >
                      <Link to="/">Home</Link>
                    </Button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Button
                      variant="ghost"
                      asChild
                      className={`w-full text-left ${active ? 'bg-gray-200' : ''}`}
                    >
                      <Link to="/products">Products</Link>
                    </Button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Button
                      variant="ghost"
                      asChild
                      className={`w-full text-left ${active ? 'bg-gray-200' : ''}`}
                    >
                      <Link to="/about">About</Link>
                    </Button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Button
                      variant="outline"
                      className={`w-full ${active ? 'bg-gray-200' : ''}`}
                      onClick={() => navigate('/login')}
                    >
                      Login
                    </Button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* menu desktop - editar dps */}
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
          <Button variant="ghost" asChild><Link to="/products">Products</Link></Button>
          <Button variant="ghost"><Link to="/about">About</Link></Button>
          <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </nav>
    </header>
  );
}

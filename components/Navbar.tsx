import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  return (
    <Navbar className="bg-t_primary ">
      <NavbarBrand>
        <p className="font-bold text-3xl"><span className="text-5xl">20</span> Habits</p>
      </NavbarBrand>
   
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button as={Link}  href="#" variant="flat" className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary">
            About
          </Button>
        </NavbarItem>
       
      </NavbarContent>
    </Navbar>
  );
}

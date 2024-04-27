'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, useDisclosure} from "@nextui-org/react";
import About from "@/app/homepage/@about/page";



export default function App() {
  const about = useDisclosure();
  return (
    <Navbar className="bg-t_primary ">
      <NavbarBrand>
        <p className="font-bold text-3xl"><span className="text-5xl">20</span> Habits</p>
      </NavbarBrand>
   
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button onPress={about.onOpen} variant="flat" className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary">
            About
          </Button>
        </NavbarItem>
       
      </NavbarContent>
      <About isOpen={about.isOpen} onOpenChange={about.onOpenChange} />
    </Navbar>
  );
}

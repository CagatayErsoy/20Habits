'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import React from "react";
import Login from "./@login/page";
import SignUp from "./@signup/page";


export default function Homepage() {
  const login = useDisclosure();
  const signUp = useDisclosure();
  const about = useDisclosure();
  
  return (
    <main className="flex flex-col align-middle justify-center   h-full">
      
      <AnimatedTitle text="10 Tiny Habits that can change your life in 6 months"></AnimatedTitle>
      <section className="flex align-middle justify-center gap-4 h-5">
        <Button
        onPress={login.onOpen}
          variant="flat"
          className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary"
        >
          Login
        </Button>
        <Button
         onPress={signUp.onOpen}
          variant="flat"
          className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary"
        >
          Sign Up
        </Button>
      </section>
      <Login isOpen={login.isOpen} onOpenChange={login.onOpenChange} />
      <SignUp isOpen={signUp.isOpen} onOpenChange={signUp.onOpenChange} />
      
    </main>
  );
}

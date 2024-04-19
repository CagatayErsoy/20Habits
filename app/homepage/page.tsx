'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Homepage() {
  return (
    <main className="flex flex-col align-middle justify-center   h-full">
      
      <AnimatedTitle text="10 Tiny Habits that can change your life in 6 months"></AnimatedTitle>
      <section className="flex align-middle justify-center gap-4 h-5">
        <Button
          as={Link}
          href="#"
          variant="flat"
          className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="#"
          variant="flat"
          className="hover:bg-t_third hover:text-t_primary bg-t_pink text-t_secondary"
        >
          Sign Up
        </Button>
      </section>
    </main>
  );
}

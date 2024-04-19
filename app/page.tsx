'use client'

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import React, { useState } from "react";
import habitsData from "@/db/data"; 
import TableElement from "@/components/TableElement";
import Homepage from "./homepage/page";
const colors = ["completed", "not completed", "all"];


export default function Home() {

  return (
    <div className="flex flex-col  bg-t_primary items-center justify-center grow">
      <Homepage></Homepage>
  
    </div>
  );
}

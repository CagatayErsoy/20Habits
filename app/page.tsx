'use client'

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import React, { useState } from "react";
import habitsData from "@/db/data"; 
import TableElement from "@/components/TableElement";
const colors = ["completed", "not completed", "all"];


export default function Home() {
  const [selectedColor, setSelectedColor] = useState("all");
  const [data,setData]=useState(habitsData)
  return (
    <div className="flex flex-col gap-3 p-5">
      <Table 
        bgcolor={selectedColor}
        disallowEmptySelection
        selectionMode="multiple" 
        defaultSelectedKeys={["2", "3"]} 
        aria-label="Example static collection table"
      >
        <TableHeader className="text-4xl">
          <TableColumn >HABIT</TableColumn>
          <TableColumn>EXPLANATION</TableColumn>
          <TableColumn>NOTES</TableColumn>
        </TableHeader>
        <TableBody>
         {data.map(item=> TableElement(item))}
        </TableBody>
      </Table>
      <RadioGroup 
        label="Current Status"
        orientation="horizontal"
        value={selectedColor} 
        onValueChange={setSelectedColor}
      >
        {colors.map((color) => (
          <Radio
            key={color}
            
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>  
        ))}
      </RadioGroup>
    </div>
  );
}

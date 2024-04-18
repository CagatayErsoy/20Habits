import React from 'react'
import {Input} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
interface TableElementProps{
    id:number,
    title:string,
    description:string,
   
}
export default function TableElement (props:TableElementProps) {
  return (
    <TableRow key={props.id}>
    <TableCell>{props.title}</TableCell>
    <TableCell>{props.description}</TableCell>
    <TableCell> <Input type='textarea' placeholder='notes goes here'></Input></TableCell>
  </TableRow>
  )
}

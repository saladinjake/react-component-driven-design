import React from "react";
import styled from "styled-components";
import {
  useState
} from "react"
import {
 IoMdFunnel
} from "react-icons/io"
import {
  Box 
} from "components/shared/library"

const StyledeNotification=styled.div`
  display:flex;
  text-align: center;
  align-items: center;
  font-size:15px;
  justify-content: center;
  flex-direction: row;
  padding: 20px;
  margin:20px;
`

export const TableContent = ({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  page,
  prepareRow,
  selectedSortColumn,
  selectedSortOrder,
  showModalFilter = false,
  setShowModalFilter
}) => {

 
  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              return (
                
                 <th onClick={()=>{
                  setShowModalFilter(val=>!val)
                 }} id={"tabledefined-index"+ index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span onClick={()=>{
                  setShowModalFilter(val=>!val)
                 }}>{column.isSorted? (column.isSortedDesc? <IoMdFunnel/>: <IoMdFunnel/>): <IoMdFunnel/>}</span>
              </th>
              
             
             
            )})}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
     
    </table>
      {page.length<=0 &&(
            <div>
               <StyledeNotification>
                 Enter a search value and hit the search button.
               </StyledeNotification> 
            </div>
          ) 
        }
    </>
  );
};

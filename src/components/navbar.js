import React from "react";
import styled from "styled-components";
import DropdownMenu from "./dropdownMenu";
import { SearchBar } from "../containers/searchBar";


const cLink =`https://researchkernel.org`;
const popularLink = `${cLink}/popular`;
const allLink = `${cLink}/all`;

const Navbar1 = styled.div`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  font-weight: bold;
  font-size: 20px;
  padding: .7rem 1.5rem .2rem 1.5rem;
  display: flex;
  flex-direction: row;
  `;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  margin-left: 5px;
  padding: .3rem .3rem .3rem .3rem;  
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
    color: #007bff; 
   }
`;


export default class Navbar extends React.Component {
  
  render() {
    return (
     <Navbar1>
       Logo
       
       <SearchBar placeholder="Search Research Papers" />
       <Link href={popularLink} > Popular </Link>
       <Link href={allLink} > All </Link>
       <DropdownMenu />
              
     </Navbar1>
    )};
};



import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import styled from "styled-components";

export const SearchBar = styled.input`
    background-color: rgb(246, 247, 248);
    box-shadow: none;
    color: rgb(28, 28, 28);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(237, 239, 241);
    border-image: initial;
    outline: none;
    width: 40%;
    padding: 0rem .5rem 1.2rem .5rem;
    margin-left: 350px;  
    margin-bottom: 9px;
    margin-right: 370px;
    height: 20px;
     
   &:hover {
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 121, 211);
    border-image: initial;
 }
 `;


import React from "react";
import '../../App.css'
import CardItem from "../CardItem";
import '../Cards.css';

export default function Projets(){
    return (
    
    <div className='cards__container'>
    <div className='cards__wrapper'>
      
       
      <ul className='cards__items'>
        <CardItem
          src='images/OIPe.jpg'
          text='ælUUAALJFLJSDHFGUEALluhsjhgljhdflghlsrthg'
          label='machin learning'
          path='/desciption'
        />
        <CardItem
          src='images/OIPg.jpg'
          text='jhajhfjhjhfdghuhafuhguhasdfhjghjhdafgu'
          label='games developement'
          path='/desciption'
        />
        <CardItem
          src='images/oom.jpeg'
          text='luhaerlguhuhdfahuuherhguhjhdfnljadgljhd'
          label='mobile app'
          path='/desciption'
        />

      
      </ul>
    </div>
</div>
   ) 

}
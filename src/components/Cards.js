import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Anciens projets</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/download.jpg'
              text='oæearjgohæoaheæorhgæoaerg'
              label='AI'
              path='/desciption'
            />
            <CardItem
              src='images/OIP.jpg'
              text='ljaræeræojæowrogljsdnvluerahfluearg'
              label='web site'
              path='/desciption'
            />
          </ul>
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
    </div>
  );
}

export default Cards;
import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const unit_px = 300
const width = unit_px
const height = unit_px * 1.5

// const headStyle = {
//     // width: 'inherit',
//     height: unit_px * 0.1
// }

// const imgStyle = {
//     width: 'inherit',
//     height: unit_px,
//     // border: '2px solid black',
// }
const divStyle = {
    // border: '2px solid black',
    border: '1px solid #e6e6e6',
    // boxShadow: '0px 0px 10px grey',
    // width: width,
    maxWidth: unit_px * 3.25,
    maxHeight: unit_px * 7,
    // padding: 5,
    margin: 10,
    overflow: 'hidden',


}






const Tiles = (props) => {





    return (
        <div 
        style={divStyle}
        >
        <Tile> </Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        </div>
    );
}



// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
  };


export default Tiles
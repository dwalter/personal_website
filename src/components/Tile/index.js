import React from 'react';

const unit_px = 300
const width = unit_px
const height = unit_px * 1.5

const headStyle = {
    // width: 'inherit',
    height: unit_px * 0.1
}

const imgStyle = {
    width: 'inherit',
    height: unit_px,
    // border: '2px solid black',
}
const divStyle = {
    // border: '2px solid black',
    border: '1px solid #e6e6e6',
    // boxShadow: '0px 0px 10px grey',
    width: width,
    height: height,
    // padding: 5,
    margin: 10,
    display: 'inline-block',

}


const Tile = (props) => {



    return (
        <div 
        style={divStyle}
        >
            <div style={headStyle}>
                <h2> Tile Title</h2>

            </div>
            <img 
                style={imgStyle}
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fvulture%2F2017%2F07%2F18%2F18-arya-stark.w700.h700.jpg&f=1"
                alt="tile here"
            >
            </img>
            tile text here
        </div>
    );
}

export default Tile
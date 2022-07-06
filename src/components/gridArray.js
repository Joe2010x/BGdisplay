import React from 'react';

const DisplayNumber = ({ inputArray }) => {

    return (
        <div className='numberBar1'>display Numbers
            {(inputArray.map(item =>
                <span key = {`displayNum${item}`} className='span-number'>{item}</span>
            ))}
        </div>
    )
}

export default DisplayNumber;
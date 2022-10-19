import React from 'react';
import 'tachyons'

const Card = ({ name, email, id}) => {
    return(
        <div className='bg-light-green ma2 pa3 br3 tc dib bw2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;
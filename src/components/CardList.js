import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {

    return (
        robots.map((robot, i) => {
            return <Card key={robots[i].name} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        })
    );
}

export default CardList;
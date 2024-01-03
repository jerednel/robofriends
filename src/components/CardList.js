import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {

    return (
        <>
        {
            robots.map((robot, idx) =>{
                return (
                <Card 
                 key={idx} 
                 id={robot.id} 
                 name={robot.name}
                 email={robot.email} 
                />
                );
            })
            
        }
        
        </>
    )
}

export default CardList;


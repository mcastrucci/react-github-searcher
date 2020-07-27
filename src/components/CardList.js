import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <div id="container" className="mt-10">
        {props.userList.map((user, index) => (
          <Card {...user} key={index}/>
        ))}
      </div>
    );
}

export default CardList;
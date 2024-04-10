import React from 'react';
import './MyselfCard.scss'

import MyselfCardProps from '#interfaces/IMyselfCardProps';

const MyselfCard : React.FC<MyselfCardProps> = ({ name, img }) => {
    return (
        <section className="myself">
            <img src={img}></img>
            <p className="name">{name}</p>
        </section>
    )
}

export default MyselfCard;
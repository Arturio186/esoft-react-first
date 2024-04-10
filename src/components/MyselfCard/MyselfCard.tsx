import React from 'react';
import classes from './MyselfCard.module.scss'

import MyselfCardProps from '../../interfaces/MyselfCardProps';

const MyselfCard : React.FC<MyselfCardProps> = ({ name, img }) => {
    return (
        <div className={classes.myself}>
            <img src={img}></img>
            <p className={classes.name}>{name}</p>
        </div>
    )
    
}

export default MyselfCard;
import React from 'react'
import './Competence.scss'

import ICompetenceProps from '#interfaces/ICompetenceProps';

const Competence : React.FC<ICompetenceProps> = ({ name }) => {
    return (
        <div className="competence">
            <p>{name}</p>
        </div>
    )
}

export default Competence;
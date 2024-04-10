import React from 'react';
import './Competences.scss'

import Competence from '#components/Competence/Competence';

import ICompetencesProps from '#interfaces/ICompetencesProps';

const Competences : React.FC<ICompetencesProps> = ({ competences }) => {
    return (
        <section className="competences">
            {competences.map(competence => 
                <Competence name={competence} />
            )}
        </section>
    )
}

export default Competences;
import React from 'react'
import './App.scss'
import CatIMG from '#assets/images/cat.jpg'

import MyselfCard from '#components/MyselfCard/MyselfCard'
import Competences from '#components/Competences/Competences'

const App : React.FC = () => {
    const name = 'Гаджиибрагимов Артур Гаджиибрагимович'
    const myCompetences = ['React', 'TypeScript', 'SCSS', 'MobX']
    const learnCompetences = ['Тестирование', 'Проектирование', 'Docker', 'Nginx', 'Redis', 'Кэширование', 'WebSocket', 'Swagger', 'PM2', 'PostgerSQL']

    return (
        <>
            <MyselfCard name={name} img={CatIMG}/>

            <h2>Компетенции</h2>
            <Competences competences={myCompetences} />

            <h2>Хотелось бы изучить</h2>
            <Competences competences={learnCompetences} />
        </>
    )
}

export default App

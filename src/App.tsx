import React from 'react'
import './App.scss'
import CatIMG from './assets/images/cat.jpg'

import MyselfCard from './components/MyselfCard/MyselfCard'

const App : React.FC = () => {
    const name = 'Гаджиибрагимов Артур Гаджиибрагимович'
    const competences = ['React', 'TypeScript', 'SCSS', 'MobX']

    return (
        <>
            <MyselfCard name={name} img={CatIMG}/>
            <section className="competences">
                
            </section>
        </>
    )
}

export default App

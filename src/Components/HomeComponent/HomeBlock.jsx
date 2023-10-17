import React from 'react'
import { Link } from 'react-router-dom'
import './HomeBlockStyle.css'
const HomeBlock = () => {
  return (
    <section className='home_block'>
        <div className="home_block_content">
            <h1 className='home_block_content-title'>
                Доступное образование<br />для каждого
            </h1>
            <p className='home_block_content-subtitle'>
                Наша миссия - сделать качественное образование доступным для каждого, независимо от возраста и местоположения.
                Присойденятей к нам в этом увлекательной путешествии знаний и успехов!
            </p>
            <Link className='home_block_content-button'>Читать больше</Link>
        </div>
        <div className="home_block_image">

        </div>
    </section>
  )
}

export default HomeBlock
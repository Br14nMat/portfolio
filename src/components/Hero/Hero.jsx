import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Brian Matasca</h2>
            <p>
                Passionate FullStack Developer
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='./assets/img/react.png' alt='' />
                </div>
                <img src='./assets/img/hero.png' alt=''/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src='./assets/img/spring.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/img/angular.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/img/sql.png' alt='' />
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero
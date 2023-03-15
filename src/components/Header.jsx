import React from 'react'
import wordmark from '../assets/wordmark.png'

const Header = () => {
  return (
    <section className="header">
        <div className="logo fixed top-0 w-36 m-5 mb-0">
            <img src={wordmark} alt="Wordmark Dinner" />
        </div>
    </section>
  )
}

export default Header
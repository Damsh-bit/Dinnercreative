import React from 'react'

const Footer = () => {
  return (
    <section className="Footer">
        <div className="flex absolute inset-x-0 bottom-0 font-bold  items-center justify-center">
            <h1 className='p-2 cursor-pointer'><a target='_blank' rel="noreferrer" href='mailto:contact@dinnercreative.com'>Twitter</a></h1>
            ·
            <h1 className='p-2 cursor-pointer'><a target='_blank' rel="noreferrer" href='https://www.instagram.com/dinnercreative/'>Instagram</a></h1>
            ·
            <h1 className='p-2 cursor-pointer'><a target='_blank' rel="noreferrer" href='https://twitter.com/dinnercreative'>Contact </a></h1>
        </div>
    </section>
  )
}

export default Footer
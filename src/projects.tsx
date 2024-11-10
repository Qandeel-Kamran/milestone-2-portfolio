import React from 'react'
import Heading from './heading';
import image from '../public/static.png'


const data = [
   {
    id: "0",
    title: "Static resume",
    desc: "A static resume to show how it is made.",
    img: image, 

   },

];

const Projects = () => {
 return  (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        <img src='..//static.png' />
      </div>
    </div>
  )
}

export default Projects
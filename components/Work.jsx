"use client";
import Link from 'next/link'
import {Button} from "./ui/button";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

import ProjectCard from './ProjectCard';

const projectData=[
    {
        image:'/work/image1.jpeg',
        category:'web developement',
        name:'Astrox website',
        description:'',
        link:''



    },
    {
        image:'/work/image2.jpeg',
        category:'react js',
        name:'Coffee Landingpage',
        description:' a Landing page for coffee shop using React and Tailwind CSS, with integrated animations to enhance user experience.',
        link:'',



    },
    {
        image:'/work/image3.png',
        category:'react js',
        name:'Apple Clone',
        description:'a Apple clone using React and Tailwind CSS and also converted that to React.js',
        link:'',



    },
    {
        image:'/work/image4.jpeg',
        category:'react js',
        name:'Chat Room',
        description:'Using react as front-end and firebase as back-end.Which can be accessed by everyone and communicate with each other.',
        link:'',



    },
    {
        image:'/work/image3.png',
        category:'next js',
        name:'Apple clone',
        description:'a Apple clone using React and Tailwind CSS and also converted that to Next.js',
        link:'https://www.linkedin.com/posts/dhanalakshmi-r-759a25248_react-webdevelopment-appleproject-activity-7160616280071307264-n9aH?utm_source=share&utm_medium=member_android',



    },
    {
        image:'/work/image.png',
        category:'next js',
        name:'Bg Remover',
        description:'A background remover is a tool or software that automatically removes the background from an image, allowing users to isolate the main subject.',
        link:'https://www.linkedin.com/posts/dhanalakshmi-r-759a25248_nextjs-fullstack-imageediting-activity-7192493494354038784-JRfX?utm_source=share&utm_medium=member_android',



    },
    {
        image:'/work/image5.jpeg',
        category:'IOT',
        name:'Water Quality Monitoring System',
        description:'The objective of the water quality monitoring system is to continuously assess and analyse the characteristic and parameters of water sources, ensuring the safety and purity of the water supply for various applications such as drinking, Industrial process and environmental preservation',
        link:''
        



    },
    {
        image:'/work/image6.jpeg',
        category:'IOT',
        name:'Smart street light Fault Detection',
        description:'The project aims to detect faults in street lights and transmit real-time updates to the cloud, facilitating immediate communication with the lineman for prompt maintenance and ensuring efficient street lighting',
        link:''
        



    },
    
]


const Work = () => {
  return <section className='relative mb-12 xl:mb-48'>
    <div className='container mx-auto'>
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
            <h2 className='container  text-4xl mx-auto font-bold text-center'>
                Latest Projects
            </h2>
            <p className='mt-4 mx-4 xl:mx-0'>My latest project involves building features for a Discord bot, enhancing functionality and user experience within the Discord platform.</p>
            
            <Link href='/projects'>
                <Button>All Projects</Button>
            </Link>
            </div>
            <div className='xl:max-w-[850px] xl:absolute right-0 top-0 ml-48'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView:2
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                    {projectData.slice(0,4).map((project,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
    </div>
  </section>
}

export default Work
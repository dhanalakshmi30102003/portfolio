"use client"
import React,{useState} from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import ProjectCard from '@/components/ProjectCard';


const projectData=[
  {
      image:'/work/image1.png',
      category:'web developement',
      name:'Astrox website',
      description:'',
      link:''



  },
  {
      image:'/work/image2.png',
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
      image:'/work/image4.png',
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
      image:'/work/image5.png',
      category:'IOT',
      name:'Water Quality Monitoring System',
      description:'The objective of the water quality monitoring system is to continuously assess and analyse the characteristic and parameters of water sources, ensuring the safety and purity of the water supply for various applications such as drinking, Industrial process and environmental preservation',
      link:''
      



  },
  {
      image:'/work/image6.png',
      category:'IOT',
      name:'Smart street light Fault Detection',
      description:'The project aims to detect faults in street lights and transmit real-time updates to the cloud, facilitating immediate communication with the lineman for prompt maintenance and ensuring efficient street lighting',
      link:''
      



  },
  
]
const uniqueCategories=[
  'all projects',
  ...new Set(projectData.map((item)=>item.category)),

];

const Projects = () => {
  const[categories,setCategories]=useState(uniqueCategories);
  const[category,setCategory]=useState('all project');
  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project 
    : project.category === category;
  });

  
  return (
    <section className='min-h-screen pt-12'>
    <div className='container mx-auto'>
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        My Projects</h2>
        <Tabs defaultValue={category}>
          <TabsList className='w-full grid h-full   md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category,index)=>
            {
              return(<TabsTrigger onClick={()=>setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto' >
                {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div>
            {filteredProjects.map((project,index)=>{
            return (
            <TabsContent value={category} key={index}>
              <ProjectCard project= {project}/>
              
            </TabsContent>
            );
          })}
          </div>
        </Tabs>
        </div></section>
  )
}

export default Projects
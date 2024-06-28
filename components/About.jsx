
import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'

import{User2,MailIcon,PhoneCall,GraduationCap,Calendar,Briefcase, HomeIcon, University} from 'lucide-react';
const infoData=[
    {
        icon:<User2 size={20}/>,
        text: 'Dhanalakshmi'
    },
    {
        icon:<PhoneCall size={20}/>,
        text: '+91 8074041662'
    },
    {
        icon:<MailIcon size={20}/>,
        text: 'dhanalakshmi30182003@gmail.com'
    },
    {
        icon:< Calendar size={20}/>,
        text: 'Born on 30 Oct,2003'
    },
    {
        icon:<GraduationCap size={20}/>,
        text: 'B.E Electronics and Communication Engineering'
    },
    {
        icon:<HomeIcon size={20}/>,
        text: '01 subramaniyapuram stree,tiruttani,thiruvallur-631209'
    },
   

]
const qualificationData=[
    {
        title:'education',
        data:[
            {
                Univerity:'RMK College of Engineering and Technology',
                qualification:'B.E. Electronics and Communication Engineering',
                year:'2025',
                Cgpa:'8.78',
            },
            {
                School:'Sri Divya chaitanya Matric.Hr.Sec.School',
                qualification:'Higher Secondary Education',
                year:'2021',
                percentage:'91%'
            },
            {
                School:'Saraswathi Matric.Hr.Sec.School',
                qualification:'Senior Secondary Education',
                year:'2019',
                percentage:'92%'
            }
        ]
    }
];
const SkillData=[
    {
        title:'Skills',
        data:[
            {
                name:'HTML,CSS,JAVASCRIPT,MERN STACK'
            },
            {
                name:'C,C++,PYTHON,JAVA(beginner)'
            },
            {
                name:'SQL'
            }
        ]
    },
    {
        title:'Tools',
        data:[
            {
                imgPath:'/about/img1.jpg',
            },
            {
                imgPath:'/about/img2.png',
            },
            {
                imgPath:'/about/img2.png',
            }

        ]

    }
]
const About = () => {
    const getData=(arr,title) =>{
        return arr.find((item)=>item.title===title);

    };
  return (
    // screen sized greater than  1280 px
    <section className='xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='hidden xl:flex flex-1 relative'>
                <DevImg containerStyles='w-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
            </div>
            <div className="flex-1 text-center items-center">
                    <Tabs defaultValue='personal'>
                        <TabsList className='flex text-center items-center'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger  className='w-[162px] xl:auto' value='skills'>Skills</TabsTrigger>

                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4 ">
                                    A fresh graduate enthusiastic about exploring new technologies.

                                    </h3><br>
                                    </br>
                                   
    I am eagerly awaiting apply my expertise in cutting-edge technologies, contribute to high-impact projects, and grow professionally while aligning with the company's commitment to excellence and innovation.
    <div className="mt-10 items-center grid xl:grid-cols-2 gap-4 mb-12 ">
        {infoData.map((item,index)=>{
            return(
                <div  className='flex items-center gap-x-4 am-auto xl:mx-0' key={index}>
                    <div className="text-primary">{item.icon}</div>
                    <div>{item.text}</div>
                </div>
        
            );
        })}
    </div>
    <div className="flex flex-col gap-y-2">
        <div className="text-proimary">
            Language Skill

        </div>
        <div className="border-b border-border"></div>
        <div className="mt-5">Tamil,English,Telugu</div>
    </div>



                                   
              </div>
                                </TabsContent>
                            <TabsContent value='qualifications'>

                                <h3 className="h3 mb-8 text-center xl:text-left">Learning Voyage</h3>
                                <div>
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        
                                            <Briefcase/>
                                            <h4 className="capitalize font-medium text-center">
                                                {getData(qualificationData,'education').title}

                                        </h4>
                                    </div>
                                    <div>
                                    {getData(qualificationData,'education').data.map(
                                        (item,index)=>{
                                            const{school,qualification,year,percentage,University,Cgpa}=item;
                                            return(
                                                
                                        
                                                <div  key={index}>
                                                    <div className="font-semibold text-xl leading-none mb-2">{University}</div>
                                                    <div className="font-semibold text-xl leading-none mb-2">{school}</div>
                                                    <div>{qualification}</div>
                                                    <div>{year}</div>
                                                    <div>{Cgpa}</div>
                                                    <div>{percentage}</div>
                                                </div>
                                                
                                            )
                                        }
                                    )}
                                       
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
    <div className="text-center xl:text-left">
        <h3 className="h3 mb-8 text-center">Tools I Use Everyday</h3>
        <div className="mb-16">
            <h4 className="text-xl font-semibold mb-2">Skills</h4>
            <div className="border-b border-border mb-4"></div>
            <div>
                {getData(SkillData,'Skills').data.map((skill, index) => (
                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                        <div className="font-medium">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h4 className="text-xl font-semibold mb-2 xl:text-left ">
                Tools
            </h4>
            <div className="border-b border-border mb-4"></div>
            <div className="flex gap-x-8 justify-center xl:justify-start">
    {getData(SkillData, 'Tools') ? getData(SkillData, 'Tools').data.map((item, index) => {
        const { imgPath } = item;
        return (
            <div key={index}>
                <Image src={imgPath} width={100} height={100} alt='' priority />
            </div>
        );
    }) : null}
</div>

        </div>

    </div>
</TabsContent>

                          

                        </div>
                    </Tabs>
                </div>
            
        </div>

    </section>
  )
}

export default About
import {GanttChartSquare,Blocks,Gem} from 'lucide-react';
import{
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Description } from '@radix-ui/react-dialog';
const servicesData=[
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:'Web design',
    Description:'Web design is the art of crafting visually appealing and user-friendly websites, incorporating elements like layout, color, typography, and imagery to create engaging online experiences.'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title:'Web Development',
    Description:'Web development is the process of creating and maintaining websites or web applications using programming languages and frameworks.'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title:'Iot',
    Description:'IoT involves connecting everyday objects to the internet to gather and share data for improved functionality and automation.'
  }
]

const Service = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
       My Services 
      </h2>
      <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
        {servicesData.map((item,index)=>{
          return(
            <Card className='w-full max-w-[424px] h-[300px]  flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
              <CardHeader className='text-primary absolute -top-[60px]'>
                <div className='w-[140px] h-[80px] bg-white dark:bg-backgroung flex justify-center items-center'>{item.icon}</div>

              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className='mb-4'>{item.title}</CardTitle>
                <CardDescription className='text-lg'>{item.Description}</CardDescription>
              </CardContent>
            </Card>
          )

        })}
      </div>
    </section>
    
  )
}

export default Service
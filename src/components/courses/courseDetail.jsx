import React from 'react'
import TextComponent from '../common/text'
import { Button } from '../common'
import { useNavigate } from 'react-router-dom'

const CourseDetail = () => {
    const navigate =useNavigate()
    function handleTest() {
        navigate('/take-test')
    }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11'>
        <div className='rounded-lg bg-gray-500 p-4 shadow-sm h-[80%]'>
        </div>
        <div>
            <h3 className="text-3xl md:text-4xl font-light text-black tracking-wider mb-10 text-center mt-4">
                Lesson 1 - Understanding Salvation
           </h3>
            <hr className='border-solid border-[#EAEAEA] border-t-2 w-98 mb-6' ></hr>
            <div className=''> 
           
            <TextComponent className='mb-2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis iste omnis dolor at maiores aut consequatur totam magni iure?Esse repellat quas ipsa optio aperiam natus rem modi qui et harum nesciunt eius odio, tempora aspernatur, ipsum at. Reprehenderit dolorem incidunt magnam odit atque, dignissimos inventore, quos unde provident quam sit eveniet quasi veritatis deleniti esse a praesentium placeat maxime quia.'
            />
             <TextComponent className='mb-2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis iste omnis dolor at maiores aut consequatur totam magni iure?Esse repellat quas ipsa optio aperiam natus rem modi qui et harum nesciunt eius odio, tempora aspernatur, ipsum at. Reprehenderit dolorem incidunt magnam odit atque, dignissimos inventore, quos unde provident quam sit eveniet quasi veritatis deleniti esse a praesentium placeat maxime quia.'
            />
             <TextComponent className='mb-2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis iste omnis dolor at maiores aut consequatur totam magni iure?Esse repellat quas ipsa optio aperiam natus rem modi qui et harum nesciunt eius odio, tempora aspernatur, ipsum at. Reprehenderit dolorem incidunt magnam odit atque, dignissimos inventore, quos unde provident quam sit eveniet quasi veritatis deleniti esse a praesentium placeat maxime quia.'
            />
             <TextComponent className='mb-2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis iste omnis dolor at maiores aut consequatur totam magni iure?Esse repellat quas ipsa optio aperiam natus rem modi qui et harum nesciunt eius odio, tempora aspernatur, ipsum at. Reprehenderit dolorem incidunt magnam odit atque, dignissimos inventore, quos unde provident quam sit eveniet quasi veritatis deleniti esse a praesentium placeat maxime quia.'
            />
             <TextComponent className='mb-2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis iste omnis dolor at maiores aut consequatur totam magni iure?Esse repellat quas ipsa optio aperiam natus rem modi qui et harum nesciunt eius odio, tempora aspernatur, ipsum at. Reprehenderit dolorem incidunt magnam odit atque, dignissimos inventore, quos unde provident quam sit eveniet quasi veritatis deleniti esse a praesentium placeat maxime quia.'
            />
        
            </div>
            <div className=' flex items-center justify-center  m-8 '>
             <Button size='md' onClick={handleTest}
            className="w-96 bg-purple-600 hover:bg-purple-700 text-white  font-light" >Take Test</Button>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail
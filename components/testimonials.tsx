import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

const Testimonials: React.FC = () => <Carousel className='bg-black text-yellow-600 py-10 lg:py-20'>
    <CarouselItem index={0}>
        <div>Review 1</div>
    </CarouselItem>
</Carousel>

export default Testimonials
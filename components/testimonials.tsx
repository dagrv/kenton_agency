import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => 
<Carousel className='bg-black text-yellow-600 py-10 lg:py-20'>
    <CarouselItem index={0}>
        <Review by="Thomas Bishop (Company 1)">Kenton Agency has a passion for start-ups and outputs high-qality software each time we asked them help</Review>
    </CarouselItem>

    <CarouselItem index={1}>
        <Review by="Andrew Colman (Company 2)">We all need a good support and and good listening skills like the people give you the people Kenton Agency</Review>
    </CarouselItem>

    <CarouselItem index={2}>
        <Review by="Manuel Derek (Company 3)">We can trust them</Review>
    </CarouselItem>

    <CarouselItem index={3}>
        <Review by="Hugo Delenoy (Company 4)">Good timing & good people</Review>
    </CarouselItem>
</Carousel>

export default Testimonials
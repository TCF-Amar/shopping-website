import React from 'react'
import Title from '../component/Title'
import HeroSection from '../component/HeroSection'
import LatestCollection from '../component/LatestCollection'
import BestSellers from '../component/BestSellers'
function Home() {
    return (
        <div>
            <HeroSection /><br />
            <Title test1="Latest" test2="Collections" />
            <LatestCollection />
            <br />

            <Title test1="Best" test2="Sellers" />
            <BestSellers />
        </div>
    )
}

export default Home
import {SlArrowDown} from "react-icons/sl";
import {Carousel} from "@mantine/carousel";
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import {useRef} from "react";
export default function LandingPage() {
    let images = [
        "../assets/LandingPage-1.jpeg",
        "../assets/LandingPage-2.jpeg",
        "../assets/LandingPage-3.jpeg",
        "../assets/LandingPage-4.jpeg",
        "../assets/LandingPage-5.jpeg",
        "../assets/LandingPage-6.jpeg",
        "../assets/LandingPage-7.jpeg",
        "../assets/LandingPage-8.jpeg",
        "../assets/LandingPage-9.jpeg",
    ];

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const slides = images.map((data) => (
        <Carousel.Slide key={data}>
            {data}
            <Image src={data} />
        </Carousel.Slide>
    ));

    return (
        <div className={"LandingPage"}>
            <div className={"BackgroundImage"} />
            {/*<Carousel
                className={"Carousel"}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {slides}
            </Carousel>*/}
            <div className={"Title"}>
                Karateverein Kenkyo Rheinzabern
            </div>
            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}
import {Carousel} from "@mantine/carousel";
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import {Image} from "@mantine/core";

const images = [
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-2.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-4.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-6.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-7.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg",
    "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-9.jpeg", //x
];
export default function ImageViewCarousel(props: any) {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image className={"images"} src={url} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            className={"BackgroundImageCarousel"}
            mx="auto"
            withControls={false}
            withIndicators
            styles={{
                indicator: {
                    width: 12,
                    height: 4,
                    transition: 'width 250ms ease',

                    '&[data-active]': {
                        width: 40,
                    },
                },
            }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            {slides}
        </Carousel>
    );
}

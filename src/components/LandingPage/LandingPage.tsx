import {SlArrowDown} from "react-icons/sl";
import ImageView from "./ImageView";

export default function LandingPage() {

    return (
        <div className={"LandingPage"}>
            {/* <ImageViewCarousel /> */}
            <ImageView />

            <div className={"BackgroundImageBlur"} />
            <div className={"Title"}>
                Kenkyo
            </div>
            <div className={"Subtitle"}>
                Karateverein Rheinzabern
            </div>
            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}
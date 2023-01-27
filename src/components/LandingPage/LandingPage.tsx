import {SlArrowDown} from "react-icons/sl";
import ImageView from "./ImageView";

export default function LandingPage(props: any) {
    // TODO: zuerst Title dann Subtitle anzeigen -> siehe Sestertius Image Gen.
    return (
        <div className={"LandingPage"}>

            {/* <ImageViewCarousel /> */}
            <ImageView imgurl={props.imgurl}/>

            <div className={"TextContainer"}>
                <div className={"Title"}>
                    Kenkyo
                </div>
                <div className={"Subtitle"}>
                    Karateverein Rheinzabern
                </div>
            </div>

            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}
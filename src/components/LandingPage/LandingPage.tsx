import {SlArrowDown} from "react-icons/sl";
import ImageView from "./ImageView";
import React from "react";
import Logo from "../Header/Logo";

export default function LandingPage(props: any) {
    return (
        <div className={"LandingPage"}>
            <ImageView imgurl={props.imgurl}/>

            <div className={"TextContainer"}>
                <div className={"Title"}>
                    Kenkyo
                </div>
                <div className={"Subtitle"}>
                    {props.subtitle}
                </div>
            </div>
            <Logo />

            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}
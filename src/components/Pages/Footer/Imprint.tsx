import React from "react";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {imprint} from "../../Content/FooterContent";

export default function Imprint() {

    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title1 = imprint[current_lang][0];
    // @ts-ignore
    let title2 = imprint[current_lang][1];
    // @ts-ignore
    let title3 = imprint[current_lang][2];
    // @ts-ignore
    let title4 = imprint[current_lang][3];
    // @ts-ignore
    let title5 = imprint[current_lang][4];
    // @ts-ignore
    let title6 = imprint[current_lang][5];
    // @ts-ignore
    let title7 = imprint[current_lang][6];
    // @ts-ignore
    let title8 = imprint[current_lang][7];
    // @ts-ignore
    let title9 = imprint[current_lang][8];
    // @ts-ignore
    let title10 = imprint[current_lang][9];
    // @ts-ignore
    let title11 = imprint[current_lang][10];
    // @ts-ignore
    let title12 = imprint[current_lang][11];
    // @ts-ignore
    let title13 = imprint[current_lang][12];
    // @ts-ignore
    let title14= imprint[current_lang][13];
    // @ts-ignore
    let title15= imprint[current_lang][14];
    // @ts-ignore
    let title16= imprint[current_lang][15];
    // @ts-ignore
    let title17 = imprint[current_lang][16];
    // @ts-ignore
    let title18 = imprint[current_lang][17];

    return(
        <div>
            <MyTitle content={title1}/>
            <MyContent content={title2} />

            <MyTitle content={title3}/>
            <MyContent content={title4}/>

            <MyTitle content={title5}/>
            <MyContent content={title6}/>

            <MyTitle content={title7}/>
            <MyContent content={title8}/>

            <MyTitle content={title9} />
            <MyContent content={title10} />

            <MyTitle content={title11} />
            <MyContent content={title12} />

            <MyTitle content={title13} />
            <MyContent content={title14} />

            <MyTitle content={title15} />
            <MyContent content={title16} />

            <MyTitle content={title17} />
            <MyContent content={title18} />

        </div>
    );
}
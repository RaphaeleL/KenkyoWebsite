import {Grid} from "@mantine/core";
import Card from "./Card";
import {GiBlackBelt} from "@react-icons/all-files/gi/GiBlackBelt";
import {BsPersonCheck} from "@react-icons/all-files/bs/BsPersonCheck";
import {IoTrophyOutline} from "@react-icons/all-files/io5/IoTrophyOutline";
import {BsPencil} from "@react-icons/all-files/bs/BsPencil";
import {succ} from "./Content";

export default function Success() {
    let current_lang = window.location.href.split("/")[3];

    let title1 = succ.de.black;
    let title2 = succ.de.trainer;
    let title3 = succ.de.champ;
    let title4 = succ.de.exam;

    if (current_lang === "en") {
        title1 = succ.en.black;
        title2 = succ.en.trainer;
        title3 = succ.en.champ;
        title4 = succ.en.exam;
    } else if (current_lang === "ja") {
        title1 = succ.ja.black;
        title2 = succ.ja.trainer;
        title3 = succ.ja.champ;
        title4 = succ.ja.exam;
    } else if (current_lang === "un") {
        title1 = succ.un.black;
        title2 = succ.un.trainer;
        title3 = succ.un.champ;
        title4 = succ.un.exam;
    }

    return (
        <Grid grow className={"Success"}>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<GiBlackBelt size={50}/>} title={title1} count={"4"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<BsPersonCheck size={50}/>} title={title2} count={"6"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<IoTrophyOutline size={50}/>} title={title3} count={"2"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<BsPencil size={50}/>} title={title4} count={"1"}/>
            </Grid.Col>
        </Grid>
    );
}
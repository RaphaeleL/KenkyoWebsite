import {Grid} from "@mantine/core";
import Card from "./Card";
import {GiBlackBelt} from "@react-icons/all-files/gi/GiBlackBelt";
import {BsPersonCheck} from "@react-icons/all-files/bs/BsPersonCheck";
import {IoTrophyOutline} from "@react-icons/all-files/io5/IoTrophyOutline";
import {BsPencil} from "@react-icons/all-files/bs/BsPencil";
import {succ} from "../../Content/HomeContent";

export default function Success() {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title1 = succ[current_lang][0];
    // @ts-ignore
    let title2 = succ[current_lang][1];
    // @ts-ignore
    let title3 = succ[current_lang][2];
    // @ts-ignore
    let title4 = succ[current_lang][3];

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
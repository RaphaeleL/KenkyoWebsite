import {Grid} from "@mantine/core";
import Card from "./Card";
import {GiBlackBelt} from "@react-icons/all-files/gi/GiBlackBelt";
import {BsPersonCheck} from "@react-icons/all-files/bs/BsPersonCheck";
import {IoTrophyOutline} from "@react-icons/all-files/io5/IoTrophyOutline";
import {BsPencil} from "@react-icons/all-files/bs/BsPencil";

export default function Success() {
    return (
        <Grid grow className={"Success"}>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<GiBlackBelt size={50}/>} title={"Schwarzgurte"} count={"4"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<BsPersonCheck size={50}/>} title={"Trainer"} count={"6"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<IoTrophyOutline size={50}/>} title={"Champions"} count={"2"}/>
            </Grid.Col>
            <Grid.Col span="auto" className={"SuccessItem"}>
                <Card logo={<BsPencil size={50}/>} title={"Prüfer"} count={"1"}/>
            </Grid.Col>
        </Grid>
    );
}
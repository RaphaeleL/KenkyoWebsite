import {Grid} from "@mantine/core";
import Card from "./Card";
import {GiBlackBelt} from "@react-icons/all-files/gi/GiBlackBelt";
import {BsPersonCheck} from "@react-icons/all-files/bs/BsPersonCheck";
import {IoTrophyOutline} from "@react-icons/all-files/io5/IoTrophyOutline";
import {BsPencil} from "@react-icons/all-files/bs/BsPencil";

export default function Success() {
    let current_lang = window.location.href.split("/")[3];
    let title1 = "Schwarze Gürtel";
    let title2 = "Trainer";
    let title3 = "Champions";
    let title4 = "Prüfer";

    if (current_lang === "en") {
        title1 = "Black Belt";
        title2 = "Trainer";
        title3 = "Champions";
        title4 = "Exmanier";
    } else if (current_lang === "ja") {
        title1 = "有段者";
        title2 = "コーチ";
        title3 = "チャンピオンズ";
        title4 = "審査員";
    } else if (current_lang === "un") {
        title1 = "Fekete öv";
        title2 = "Edző";
        title3 = "Bajnokok";
        title4 = "Exmanier";
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
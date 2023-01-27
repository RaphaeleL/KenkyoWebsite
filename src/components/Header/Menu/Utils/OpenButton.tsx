import {HiBars3} from "react-icons/hi2";

export default function OpenButton(props: any) {

    return (
        <HiBars3 size={50} className={"OpenMenu"} onClick={props.toggle} />
    );
}
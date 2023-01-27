import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";
import {useState} from "react";
import {HiBars3} from "react-icons/hi2";

export default function Menu() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
        console.log(show);
    }

    if (show) {
        return <MobileMenu toggle={toggle}/>;
    }

    return <OpenButton toggle={toggle}/>
}

function OpenButton(props: any) {
    return (
        <HiBars3 size={50} className={"OpenMenu"} onClick={props.toggle} />
    );
}

function MobileMenu(props: any) {
    return (
        <div className={"Menu"} id="toggle" >
            <AiOutlineClose size={50}  className={"toggle"} onClick={props.toggle}/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Vorstand</a></li>
                <li><a href="#">Weitere Informationen</a></li>
            </ul>
        </div>
    );
}

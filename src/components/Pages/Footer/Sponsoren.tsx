import MyContent from "../../Utils/MyContent";

export default function Sponsoren() {
    return (
        <>
            <MyContent content={"Möchten Sie uns etwas Spenden oder uns Sponsoren? Dann melden Sie sich bei uns!"} />
            <MyContent content={<a href={"mailto: todo@todo.de"}>todo@todo.de</a>} />
            <MyContent content={"Wir freuen uns auf Ihre Nachricht. Doch nun die bisherigen Sponsoren und Spender:"} />
        </>
    );
}
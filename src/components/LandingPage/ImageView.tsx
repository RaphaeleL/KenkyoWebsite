export default function ImageView(props: any) {
    return (
        <div className={"BackgroundImage"} style={{
            backgroundImage: `url(${props.imgurl})`
        }} />
    );
}
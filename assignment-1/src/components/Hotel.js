function Hotel({image,place}){
    return(
    <div style={{   display: "flex",
        flexDirection: "column",width:"90%"}}>
    <img src={image} alt="hotelpic"/>
    <h1>{place}</h1>
</div>
);
}
export default Hotel;
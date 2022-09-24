import AccCont from "./AccCont";

function Accomodation(){
    return(
        <div style={{    display: "flex",
            alignContent: "space-around",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center",
            color: "black",
            fontFamily: 'Roboto',
            gap: "50px"}}>
    <h2>BEAUTIES</h2>
    <h1>Hotels and Appartments</h1>
    <AccCont/>
    </div>
);
}
export default Accomodation;

import PartnerCont from "./PartnerCont";

function Partners(){
    return(
        <div style={{
            display: "flex",
            alignContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            height: "50vh", 
            marginBottom: "5%",
            marginTop: "15%",
            color: "black",
            fontFamily: 'Roboto',
            gap: "50px"
        }}>

<h2>Network</h2>
<h1>Our Partners</h1>
<PartnerCont/>
</div>

);
}
export default Partners;
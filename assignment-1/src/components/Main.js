import Destinations from "./Destinations";
import Hero from "./Hero";
import NavBar from "./NavBar";

function Main(){
    return(
        <div style={{ display: "flex",alignContent:"space-around",flexDirection: "column",
            width: "100vw",
            height: "70vh",
            backgroundImage: "url(/Assets/Rectangle1.jpg)",
            backgroundSize: "100vw 70vh",
            backgroundRepeat: "no-repeat",
            color: "white",
            fontFamily: "Roboto",
            gap: "2%"}}>
        
        <NavBar/>
        <Hero/>     
        <Destinations/>

</div>

);
}
export default Main;
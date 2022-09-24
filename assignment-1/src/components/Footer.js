import EndBar from "./EndBar";
import EndCredit from "./EndCredit";

function Footer(){
    return(
        <div style={{
            display: "flex",
    
            /* align-items: center;  */
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
            width: "100vw",
            color: "white",
           backgroundColor: "#0C2F3A",
           fontSize: "100%",
            gap: "5%"
        }}>
<EndBar></EndBar>
<hr style={{width:"60%",marginLeft:"20%",marginTop:"2%"}}></hr>
<EndCredit></EndCredit>
    </div>
);
}
export default Footer;

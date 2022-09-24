function Place({Place}){
    return(
        <div style={{
            backgroundColor: "gray",
            width: "20%",
            height: "20%",
            
            /* height: 70px; */
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap:"5%",
            padding: "10px"
        }}>
        <i class="bi bi-geo-alt"></i>
        <div style={{
                display: "flex",
                justifyContent: "flexStart",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "left", 
                fontSize: "50%"  
        }}>
        <h1>{Place}</h1>
        <h2 style={{letterSpacing: "0", fontSize: "100%"}}>Plan a Trip</h2>  
        </div>
        </div>

);
}
export default Place;
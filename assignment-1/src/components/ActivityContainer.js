function ActivityContainer({image,activity,number}){
    return(
        <div style={{
            backgroundImage: "url(/Assets/"+image+")",
            /* height: 100vh; */
            width: "20vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }}>
        <h1 style={{
               position: "relative",
               /* text-align: left; */
               width:"60%",
               top: "70%",
               left: "2%",
                fontSize: "150%"
        }}>{activity}</h1>
        <h2 style ={{
               position: "relative",
               top: "72%",
               left: "2%",
                fontSize: "100%",
                width: "60%",
                letterSpacing: "0"
        }}>{number} activities</h2>
    </div>

);
}
export default ActivityContainer;
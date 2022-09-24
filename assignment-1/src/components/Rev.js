function Rev({desc,img,name,title}){
    return(
<div style={{display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    gap: "5%",
    width: "25vw",
    marginleft: "5%"}}>
    <div style={{
        flexDirection: "column",
        display: "flex",
           justifyContent: "center",
           alignContent: "center",
           padding:"5% 5% 5% 5%",
            backgroundColor: "white",
            height: "20vh",
            width: "90%",
            borderRadius: "5%",
            color: "black",
            /* padding-left: 15px; */
            marginBottom: "5%"
    }}>
        <h1 style={{color: "#FF9921"}}>"</h1>
        <p style={{fontSize:"70%"}}>{desc}
        </p>
        </div>
    <div style={{display: "flex",
   marginLeft: "5%"}}>
        <img src={img} alt="people" style={{width: "50px",
   height: "50px"}}/>
        <div>
            <h3 style={{fontWeight: "500"
}}>{name}</h3>
            <h4 style={{fontWeight: "100"
}}>{title}</h4>
        </div>
    </div>
</div>
);
}
export default Rev;



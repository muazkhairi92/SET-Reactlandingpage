import Container from "./Container";

function Activities(){
    return(
<div style={{    display: "flex",
     alignContent: "space-around",
     flexDirection: "column",
     alignItems: "center",
     width: "100vw",
      height: "80vh",
    marginTop: "50px",
     color: "black",
     fontFamily: 'Roboto',
     gap: "20px"}}>
<h2>HUNDREDS OF</h2>
<h1>Activities for Everyone</h1>
<Container/>
</div>
);
}
export default Activities;

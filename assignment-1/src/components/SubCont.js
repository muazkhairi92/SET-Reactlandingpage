function SubCont({num,title,desc}){
    return(
<div style={{ width: "100%", 
       /* height: 20%; */
     color: "black",
     display: "flex",
     justifyContent: "space-between",
     gap:"15%",marginBottom:"5%"}}>
<h2 style={{letterSpacing: "1rem"}}>{num}</h2>
<div style={{   width: "100%",
   height: "30%",
   display: "flex",
   flexDirection: "column",
   gap: "5%",fontSize:"90%"}}>
    <h1>{title}</h1>
    <p>{desc}</p>
</div>
</div>

);
}
export default SubCont;
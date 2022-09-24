const socmed = [ {soc:"bi bi-instagram"},
                {soc:"bi bi-dribbble"},
                {soc:"bi bi-twitter"},
                {soc:"bi bi-youtube"},
                ];

function EndCredit(){
    return(
    <div style={{   display: "flex",
        justifyContent: "space-between",
        height:"80%",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop:"5%",
        marginBottom:"10%"}}>
<h3>© 2020 Bikart Design. All rights reserved</h3>
<div style={{
       width: "10vw",
       display: "flex",
       justifyContent: "space-between",
       marginLeft: "50px",
       marginRight: "120px",
}}>
    {socmed.map((med)=>(
        <i class={med.soc}></i>
    ))}
</div>
</div>
);
}
export default EndCredit;
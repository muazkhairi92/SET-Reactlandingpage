import MenuBar from "./MenuBar";

const Menu = [  {Menu:'Destinations'},
                {Menu:'Activities'},
                {Menu:'About Us'},
                {Menu:'Contact'}
];
function EndBar(){
    return(
<div style={{   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   gap:"2%",
   width: "70vw",
   marginLeft: "15%",
   fontFamily:"roboto"}}>
    <ul style={{   marginTop: "4%",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   gap:"2%",
   marginBottom: "30px",
   }}>
       <li style={{display:"inline"}}> <img src="/Assets/footer-logo_white-xs1.png" alt="logo" style={{
           height: "80%",
           width: "100%",
           backgroundColor:"#5F3E2C",
           border:"8px solid #5F3E2C",
           borderRadius: "50%"
       }}/></li>
        <li style={{display:"inline",fontWeight:"800"}}>TRAVELx</li>
    </ul>
    <div class="menu">
        <ul style={{display: "flex",
    justifyContent: "spaceAround",
    alignItems: "center",
    gap: "5%", width:"80%"}}>
        {Menu.map((item)=>(
      <MenuBar Menu={item.Menu}></MenuBar> ))}
        </ul>
    </div>
</div>
);
}
export default EndBar;

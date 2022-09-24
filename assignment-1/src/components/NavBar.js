import MenuBar from "./MenuBar";

const Menu = [  {Menu:'Destinations'},
                {Menu:'Activities'},
                {Menu:'About Us'},
                {Menu:'Contact'}
];

function NavBar(){
    return(
<div style={{
        display: "flex",
        justifyContent:"center",
         alignItems: "center", 
        fontSize: "60%",
        /* height: 10%; */
        width: "100vw",
        gap:"20%",
        padding: "10px"
}}>
    <ul style={{width:"10%", 
 display: "flex",
  alignItems: "center"}}>

   <li style={{display:"inline"}}> <img src="/Assets/footer-logo_white-xs1.png" alt="logo" style={{   
    width:"50%", 
   display: "flex",
    alignItems: "center"}}></img></li>
    <li style={{display:"inline"}}>TRAVELx</li>
</ul>
    <ul style={{display: "flex",
    justifyContent: "spaceAround",
    alignItems: "center",
    gap: "5%", width:"40%"}}>
          {Menu.map((item)=>(
      <MenuBar Menu={item.Menu}></MenuBar>
      ))}
    </ul>
 <i class="bi bi-list"></i>
</div>

);
}
export default NavBar;
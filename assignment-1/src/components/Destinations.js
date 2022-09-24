import Place from "./Place";
const Places = [  {Place:'Trondheim'},
                {Place:'Geirangerfjord'},
                {Place:'Lofoten'}
                ];


    function Destinations(){
        return(
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        alignItems: "center",
        gap:"30px",
        height: "60vh",
       width:"100vw"
    }}>
     {Places.map((item)=>(
      <Place Place={item.Place}></Place>
     ))}
  
</div>

);
}
export default Destinations;
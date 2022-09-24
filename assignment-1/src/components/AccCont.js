import Hotel from "./Hotel";


const hotel = [
    {image:"/Assets/Rectangle9.jpg",
    place:'Reine'},
    {image:"/Assets/Rectangle10.jpg",
    place:'Norway'},
    {image:"/Assets/Rectangle11.jpg",
    place:'Bergen'},
 
  ];
function AccCont(){
    return(
    <div style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "30%",
        gap: "30px"
    }}>
{hotel.map((item)=>(
      <Hotel image={item.image} place={item.place}/>
           ))}
</div>
);
}
export default AccCont;
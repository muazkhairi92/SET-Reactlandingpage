import ActivityContainer from "./ActivityContainer";

const activity = [
    {image:'Rectangle2.jpg',
    activity:'hiking',
    number:'230'},
    {image:'Rectangle3.jpg',
    activity:'sailing',
    number:'20'},
    {image:"Rectangle4.jpg",
    activity:'skiing',
    number:'130'},
    {image:'Rectangle5.jpg',
    activity:'kayaking',
    number:'132'},
  ];

function Container(){
    return(
<div style={{    display:"flex",
    justifyContent: "flex-start",
    color: "white",
    gap: "1%",
    height: "300%"
}}>

{activity.map((item)=>(
      <ActivityContainer image={item.image} activity={item.activity} number={item.number}/>
           ))}

</div>

);
}
export default Container

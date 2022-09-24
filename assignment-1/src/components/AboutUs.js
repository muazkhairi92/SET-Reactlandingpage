import SubCont from "./SubCont";

const about = [
    {num:"01",title:"Sustainable",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in similique officiis dolorum quos iste itaque consequuntur est nisi aliquam quaerat aperiam, enim eum accusamus temporibus explicabo ea suscipit? Vitae!"},
    {num:"02",title:"Fair & Share",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in similique officiis dolorum quos iste itaque consequuntur est nisi aliquam quaerat aperiam, enim eum accusamus temporibus explicabo ea suscipit? Vitae!"},
    {num:"03",title:"Experience",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in similique officiis dolorum quos iste itaque consequuntur est nisi aliquam quaerat aperiam, enim eum accusamus temporibus explicabo ea suscipit? Vitae!"},
]

function AboutUs(){
    return(
        <div style={{
            display: "flex",
            alignContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
            fontSize:"90%",
            height: "80%",
           marginTop: "10%",
           marginBottom: "10%",
            color: "black",
            fontFamily: 'Roboto',
            gap: "50px"
        }}>
    <h2> ABOUT US</h2>
    <h1>Our Philosophy</h1>
    <div style={{    display: "flex",
    // justifyContent: "space-between",
     height: "40%", 
    width: "80%",
    gap:"5%"
    }}>
        <div style={{width:"100%"}}>
            <img src="/Assets/Rectangle6.jpg" alt="mountain" style={{maxWidth:"100%"}}/>
        </div>
        <div style={{   width: "50%",
                height: "100%",
                color: "black",
            display: "flex",
            flexDirection: "column",
            gap:"2%",}}>

        {about.map((item)=>(
        <SubCont num={item.num} title={item.title} desc={item.desc}/>
           ))}    


        </div>
    </div>
    </div>
);
}

export default AboutUs;
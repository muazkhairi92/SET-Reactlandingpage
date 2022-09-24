import Rev from "./Rev";

const reviews = [  {desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?',img:"/Assets/people1.svg",name:"Jane Cooper",title:"CEO, ABC Corporation"},
                {desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?',img:"/Assets/people2.svg",name:"Alan Jackson",title:"CEO, Travelers Community "},
                {desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?',img:"/Assets/people3.svg",name:"Jane Cooper",title:"CEO, Go Travel"},
                ];

function Review(){
    return(
<div style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        alignContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "10%",
 
        height: "50vh",
        color: "white",
        fontFamily: 'Roboto',
        backgroundImage: "url(/Assets/GwT7fA1zjwY.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
}}>

{reviews.map((item)=>(
      <Rev desc={item.desc} img={item.img} name={item.name} title={item.title}/>
           ))}
{/* <div class="re">
    <div class="cloud">
        <h1>"</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?
        </p>
        </div>
    <div class="people">
        <img src="/Assets/people1.svg"/>
        <div class="name">
            <h3> Jane Cooper</h3>
            <h4> CEO, ABC Corporation</h4>
        </div>
    </div>
</div>
<div class="re">
    <div class="cloud">
        <h1>"</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?
        </p>
        </div>
        <div class="people">
            <img src="/Assets/people2.svg"/>
            <div class="name">
                <h3> Jane Cooper</h3>
                <h4> CEO, ABC Corporation</h4>
            </div>
        </div>
    
</div>
<div class="re">
    <div class="cloud">
        <h1>"</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quos ab ullam, illo alias voluptatum nesciunt illum perferendis voluptates. Laboriosam numquam dolorum, commodi provident aut accusamus hic repudiandae vitae sint?
        </p>
        </div>
    <div class="people">
        <img src="/Assets/People3.svg"/>
        <div class="name">
            <h3> Jane Cooper</h3>
            <h4> CEO, ABC Corporation</h4>
        </div>
    </div>
</div> */}
</div>

);
}
export default Review;
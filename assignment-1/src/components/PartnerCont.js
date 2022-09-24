const image = [ {img:"/Assets/Microsoft-Logo-Grey1.png"},
                {img:"/Assets/magento-grey-logo1.png"},
                {img:"/Assets/Lakehouse-logo_grey_01.png"},
                {img:"/Assets/Midea-Logo-grey1.png"},
];
function PartnerCont(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "5%"
    }}>
        {image.map((item)=>(
                <img src={item.img} alt="partners"style={{
                    maxWidth: "80%",
                    height:"60%"
                }}/>
        ))}
</div>
);
}
export default PartnerCont;
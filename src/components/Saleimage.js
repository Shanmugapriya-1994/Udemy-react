import sale from "../assets/image/Saleimage.jpg"

//Saleimage component
function Saleimage()
{
    return(
        <div className="saleimage">
        <img src={sale} alt="SaleImage"></img>
        <div className="saleimage__offer">
            <h2>Udemy Flash Sale!24 Hours to Save</h2>
            <p>Get the Top Course for just 499. Just one day to Save But Lifetime to learn</p>
        </div>
    </div>
    )
}

export default Saleimage
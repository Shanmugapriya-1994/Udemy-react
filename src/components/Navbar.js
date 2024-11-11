//Navbar component

function Navbar()
{
    return(
   
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
    
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{color: "#0d0d0d"}}></i>
                <input placeholder="Search for Anything Here. Tech,Business,Art.."></input>
            </div>
            <div className="navbar__s3">
                <p>Courses</p>
            
                 <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">                     
                        <p>You did not purchase anything yet</p>
                    </div>
                 </div>
                <i class="fa-solid fa-cart-shopping" style={{color: "#050505"}}></i>
                <i class="fa-solid fa-bell" style={{color: "#050505"}}></i>
                <i class="fa-solid fa-user" style={{color: "#050505"}}></i>
            </div>
            <div class="navbar__s4">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

    )

}

export default Navbar
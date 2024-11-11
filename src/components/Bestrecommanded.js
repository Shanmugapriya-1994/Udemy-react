import img1 from  "../assets/image/img1.jpg"
import img2 from  "../assets/image/img2.jpg"
import img3 from  "../assets/image/img3.jpg"
import img4 from  "../assets/image/img4.jpg"
import img5 from  "../assets/image/img5.jpg"
import img6 from  "../assets/image/img6.jpg"
import img7 from  "../assets/image/img7.jpg"
import img8 from  "../assets/image/img8.jpg"
// import img9 from  "../assets/image/img7 (3).jpg"
// Bestrecommanded component
function Bestrecommanded()
{
    return(
    <div className="recommended">
    <h1 className="recommended__title">Recommended for you</h1>
    <p>Pick the best fit</p>
    <div className="recommended__container">
        <div className="course-card">
            <img src={img1} alt="Best"></img>
            <h3>2023 Python Data Visualization Masterclass</h3>
            <p>col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img2} alt="Best"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>col Steele</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img3} alt="Best"></img>
            <h3>Master UI/UX Design with Figma</h3>
            <p>col Steele</p>
            <p>3.6 ⭐⭐⭐</p>
            <p>599 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img4} alt="Best"></img>
            <h3>Basic to Advance Java core Programming with EMC</h3>
            <p>col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>       
    </div>
    
    <div className="recommended__container">
        <div className="course-card">
            <img src={img5} alt="Best"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>col Steete</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img6} alt="Best"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>col Steete</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img7} alt="Best"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>col Steete</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src={img8} alt="Best"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>col Steete</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>349 <del>1999</del></p>
        </div>
    </div>
</div>

    )
}
export default Bestrecommanded
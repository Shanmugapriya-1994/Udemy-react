import c1 from "../assets/image/c1.jpg"
import c2 from "../assets/image/c2.jpg"
import c3 from "../assets/image/c3.jpg"
import c4 from "../assets/image/c4.jpg"

//Recommended component
function Recommended()
{
    return(
        <div className="recommended">
        <h1 className="recommended__title">Most Popular</h1>

        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={c1} alt="course"></img>

                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c2} alt="course"></img>

                <h3>Web Development Bootcamp 2023</h3>
                <p>col Steele</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>349 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c3} alt="course"></img>
                <h3>Master UI/UX Design with Figma</h3>
                <p>col Steele</p>
                <p>3.6 ⭐⭐⭐</p>
                <p>599 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c4} alt="course"></img>

                <h3>Basic to Advance Programming with EMC</h3>
                <p>col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>349 <del>1999</del></p>
            </div>
        </div>
    </div>

    )
}

export default Recommended
import Navbar from "./components/Navbar.js"
import Categories from "./components/Categories.js"
import Saleimage from "./components/Saleimage.js"
import Recommended from "./components/Recommended.js"
import Topics from "./components/Topics.js"
import Contact from "./components/Contact.js"
import Bestrecommanded from "./components/Bestrecommanded.js"


function App(){
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Bestrecommanded></Bestrecommanded>
        <Contact></Contact>        
        </>
    )
}

export default App
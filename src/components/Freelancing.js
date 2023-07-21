import Card from "./Card.js";
import "./Card.css";
import "./Freelancing.css";
import docf1 from "../images/doctor (2).png"
import docf2 from "../images/doctor (4).png"
import docf3 from "../images/doctor.png"
import docf4 from "../images/doctor 5.png"
import docf5 from "../images/new doc.png"
import docf6 from "../images/ophthalmologist.png"

function Freelancing()
{
    return(
        <>
        <h1 class="lefthead">Our Experts</h1>
        <br>
        </br>
        <br></br>
           <div class="container">
            <Card desc="Mrs. Anukriti Aishwarya" img={docf1}/>
            <Card desc="Mr. Girish Kumar Gautam" img={docf2}/>
            <Card desc="Mrs. Anupriya Banerjee" img={docf3}/>
            <Card desc="Mrs. Aashima Omkashyap" img={docf4}/>
            <Card desc="Mrs. Kshitija Jaiswal" img={docf5}/>
            <Card desc="Mrs. Hritu Madan" img={docf6}/>
           </div>
        </>
    )
}
export default Freelancing;
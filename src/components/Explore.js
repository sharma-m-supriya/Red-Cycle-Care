import Card from "./Card";
import {Link} from "react-router-dom";
import down from "../images/down.png";
import boy from "../images/drop.png";
import drop from "../images/bb.png"
import pad from "../images/sanitary-pad (1).png"
import female from "../images/female.png";
import doc from "../images/diagnosis.png"

function Explore()
{
    return(
        <>
        <div class="menu" id="explore">
        <div class="arrow">
        <a href="#"><img src={down} class="up"/></a>
        </div>
        <div class="container">
           <Link to="/education"> <Card desc="Period Education: Gain knowledge about menstruation and its biological processes." img={pad}/></Link>
           <Link to="/pending"> <Card desc="Myths and Facts: Beliefs and truths regarding menstrual cycles & its effects on the female body." img={female}/></Link>
            <Link to="/freelancing"> <Card desc="Reach out to our experts: Talk to expert professionals to clarify doubts regarding menstruation." img={doc}/> </Link>
        </div>
        <img src={drop} class="rightbottomup"></img>
        </div>
           
            
        </>
    )
}
export default Explore;
import down from "../images/down.png";
import red from "../images/meditation-g720ce0cf2_1280.png";
import drop from "../images/bb.png"
import blood from "../images/blood.png"
import Explore from "./Explore";
function Landing()
{
return(
      
    <>
    <div class="landing" >
        <div class="heading">
            <p>Periods</p>
            
        </div>
        <div class="cont">Menstruation is a normal and healthy part of life for most women.A period is the part of the menstrual cycle when women, girls and people who menstruate bleed from their vagina.</div>
        <div class="explore">Explore To Know More</div>
        <div class="arrow">
            <a href="#explore">
            <img src={down} class="down"></img>
            </a>
        </div>  
      <img src={drop} class="leftbottomup" width={500}></img>
      <img src={drop} class="rightbottom"></img>
      
        
        </div>
        <Explore/>
    </>
)
}
export default Landing;
import Content from "./Contentcard.js";
import "./Freelancing.css";
import redb from "../images/blood (1).png"
import woman from "../images/workout-machine.png"
import pregnant from "../images/woman.png"
import Card from "./Card";
function Pending()
{
    return(
        <>
            <h1 class="lefthead">Myths and Facts</h1>
           <div class="container">
        <Card desc="Myth: Women shed impure blood during periods." img={redb}/> 
        <Content heading="Fact" content="This is an extremely common misconception that period blood is dirty or impure. However, what most people fail to understand is that the menstrual cycle is part of a woman’s reproductive system that prepares her body for a (possible) pregnancy. The menstrual blood is also the same blood that circulates throughout the body."/>
        <Card desc="Myth: You cannot exercise while you are on your period" img={woman}/> 
        <Content heading="Fact" content="There is no scientific evidence that exercising while you are on your period can harm your physical health. In fact, exercise is good for a sound body and mind and can even help to reduce the pain due to menstrual cramps. There are no risks to regular physical activity, like walking. Certain yoga asanas may help you feel better during your period cramps."/>
        <Card desc="Myth: If you miss your period, you are pregnant. " img={pregnant}/> 
        <Content heading="Fact" content="A late or missed period does not necessarily point out that you are pregnant. Hormonal imbalances like polycystic ovary syndrome, excessive weight, unhealthy diet, illness, stress can be the causes of your missed or irregular periods too."/>
           </div>
        </>
    )
}
export default Pending;
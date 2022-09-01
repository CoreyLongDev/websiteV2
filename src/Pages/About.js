import Selfie from "../Images/ProfileOne.jpeg"

const About = () => {

    return (
        <>
            <img id="selfie" src={Selfie} alt="closed and locked door detailing that this page does not exist" />
            <div className="aboutcontent">
                <h3 className="cooltext" id="aboutheading">That's Me!</h3>
                <br />
                <p id="aboutp">Yo, I'm Corey,
                    A Software Developer from the Carolinas.
                    <br />
                    <br />
                    I Recently graduated from General Assembly's Software Engineering Immersive Program and I'm currently obtaining my Bachelors of Science in Computer Science from Western Governors University.
                    I grew up playing games and drawing a lot, so naturally tech always interested me as a means of expression.
                    When i was 20 i joined the United States Air Force under the job title Structural Engineering Technician because at the time i thought i would be happiest as a Environemnt Artist in the Games end of the industry.
                    little did i know life would get in the way of my college attempts for a good while. after spending most of my 20s in a lucrative and accomplished career in Construction Logistics i decided enough was enough and started getting back into tech.
                    While i was still drawing i started to delve into actual development and programming and found the challenge and extensive research behind every project inspired me to try harder at every turn.
                    So since that fateful day ive been here on the web slinging away at projects to be the best i can.
                </p>
            </div>
        </>
    )
}

export default About;
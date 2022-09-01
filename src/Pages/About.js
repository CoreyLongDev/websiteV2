import Selfie from "../Images/ProfileOne.jpeg"

const About = () => {

    return (
        <>
        <img id="selfie" src={Selfie} alt="closed and locked door detailing that this page does not exist" />
        <div className="aboutcontent">
            <h3 className="cooltext" id="aboutheading">That's Me!</h3>
            <br />
            <p id="aboutp">This is a paragraph or so about me and the things i like and can do at the moment 
                and that i am interested in.
                <br />
                also this is more about me in a sexcond paragraph
                <br />
                i wanted this to include at least three paragraphs 
                so lets just see how this looks without using lame ipsom whatever it is.
            </p>
        </div>
        </>
    )
}

export default About;
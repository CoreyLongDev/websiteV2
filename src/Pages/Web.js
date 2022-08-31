import Cards from "../Components/Cards/Cards";
import webData from "../Components/Cards/webData";

function createCard(webData) {
    return (
        <>
            <Cards
                name={webData.name}
                subTitle={webData.subTitle}
                imgURL={webData.imgURL}
                info={webData.info}
                githubLink={webData.githubLink}
                liveSite={webData.liveSite}
            />
        </>
    )
}

function Web() {
    return (
        <div className="content" id="cardcontainter">
            {webData.map(createCard)}
        </div>
    )
}

export default Web
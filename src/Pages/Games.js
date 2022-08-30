import Cards from "../Components/Cards/Cards";
import gamesData from "../Components/Cards/gamesData"

function createCard(gamesData) {
    return (
            <Cards
                name={gamesData.name}
                subTitle={gamesData.subTitle}
                imgURL={gamesData.imgURL}
                infoTwo={gamesData.infoTwo}
                githubLink={gamesData.githubLink}
                liveSite={gamesData.liveSite}
            />
    )
}

function Games() {
    return (
        <div className="content">
            <h1>Games</h1>
            {gamesData.map(createCard)}
        </div>
    )
}

export default Games
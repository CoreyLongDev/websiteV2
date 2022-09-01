import "./cards.css"

function Cards(props) {
  return (
        <div className="cardContainer">
          <img src={props.imgURL} className="cardImage" />
          <div className="cardTitle">{props.name}</div>
          <div className="cardSub">{props.subTitle}</div>
          <a href={props.githubLink} className="githubLink">GitHub</a>
        </div>
  )
}

export default Cards
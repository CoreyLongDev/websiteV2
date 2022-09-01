import "./cards.css"

function Cards(props) {
  return (
        <div className="cardContainer">
          <img src={props.imgURL} className="cardImage" />
          <div className="cardTitle">{props.name}</div>
          <div className="cardSub">{props.subTitle}</div>
          <p className="cardInfo">{props.info}</p>
          <a href={props.githubLink} className="githubLink">github</a>
        </div>
  )
}

export default Cards
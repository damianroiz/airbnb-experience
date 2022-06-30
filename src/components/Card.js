import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`/images/${props.coverImg}`} alt="" className="card-image" />
                <div className="card-stats">
                    <img src="/images/star-icon.png" alt="" className="star-icon"/>
                    <span>{props.status.rating} </span>
                    <span>({props.status.reviewCount}) · </span>
                    <span>{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}


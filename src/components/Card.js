import React from "react"

export default function Card(props) {
    return (
        <div className="card">
                <img src={`/images/${props.img}`} alt="" className="card-image" />
                <div className="card-stats">
                    <img src="/images/star-icon.png" alt=""/>
                    <span>{props.rating} </span>
                    <span>({props.reviewCount}) · </span>
                    <span>{props.country}</span>
                </div>
                <p>{props.title}
</p>
                <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

import React from "react"

export default function JournalEntry(props) {
    return (
        <>
            <div className="journal-entry">
                <img className="location-image" src={props.item.imageUrl}/>
                <div className="location-info">
                    <span className="material-icons">place</span>            
                    <span className="location">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="google-maps-url">View on Google Maps</a>
                    <h1 className="title">{props.item.title}</h1>
                    <p className="date-range">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}
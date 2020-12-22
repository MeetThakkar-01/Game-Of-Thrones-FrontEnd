import React, { useState } from "react";
import "./card.css";

function Card({
  AttackerImage,
  DefenderImage,
  battle_name,
  attacker,
  defender,
  ...data
}) {
  const [showMore, setshowMore] = useState(false);
  return (
    <div className="card-outer">
      <h1>{battle_name}</h1>
      <div className="card">
        <article className="center mw50 mv4 card-info">
          <div className="pv2 ph3 white">
            <h1 className="f6 ttu tracked">{attacker}</h1>
          </div>
          <img
            src={AttackerImage.link}
            key={AttackerImage.id}
            className="avatar"
            alt="Closeup "
          />
        </article>
        <div className="vs">
          <h2>vs</h2>
        </div>
        <article className="center mw50 mv4 card-info">
          <div className="pv2 ph3 white">
            <h1 className="f6 ttu tracked">{defender}</h1>
          </div>
          <img
            src={DefenderImage.link}
            key={DefenderImage.id}
            className="avatar"
            alt="Closeup "
          />
        </article>
      </div>
      <i
        className={`${
          showMore
            ? "fa fa-caret-square-o-up more-icon"
            : "fa fa-caret-square-o-down more-icon"
        }`}
        onClick={() => setshowMore(!showMore)}
      />
      <div className={`${showMore ? "details-show" : "details-hide"}`}>
        <span>Battle Year : {data.year}</span>
        <span>Battle type : {data.battle_type}</span>
        <span>Major Death : {data.major_death}</span>
        <span>Major Capture : {data.major_capture}</span>
        <span>Attacker Commander : {data.attacker_commander}</span>
        <span>Location : {data.location}</span>
        <span>Region : {data.region}</span>
      </div>
    </div>
  );
}

export default Card;

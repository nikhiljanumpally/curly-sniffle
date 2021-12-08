import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Karnataka's weavers and artisans strive to survive in lockdown with paltry government aid,", "Top news ")}
      {newsArticle("Coronavirus: UK updates", "Top news ")}
      {newsArticle("Toy-making artisans of Karnataka's Channapatna struggle to stay afloat without government help in lockdown", "Top news ")}
      {newsArticle("India can become a one-stop sourcing destination for textiles for brands, retailers from ASEAN, says Smriti Irani", "Top news ")}
      {newsArticle("Flipkart launches initiative 'Samarth' to bring Indian artisans, weavers, handicrafts makers on platform", "Top news ")}
    </div>
  );
};

export default Widgets;

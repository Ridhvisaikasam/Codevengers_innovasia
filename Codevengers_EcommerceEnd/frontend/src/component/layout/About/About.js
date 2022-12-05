import React from "react";
import "./aboutSection.css";
import {  Typography} from "@material-ui/core";
const About = () => {

  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div className="aboutSectionContainer1">
          <div className="aboutSectionContainer2">
            
            <Typography component="h2">CODEVENGERS</Typography>
            <br/>
           
            <Typography component="h3">
              This is a wesbite made by codevenger to help farmers choose the right crop and start with it very easily at one stop.
            </Typography>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">WHAT WE DO</Typography>
            <Typography component="h3">1) Recommend the best crops and seeds to be grown based on weather , temperature and market analysis.</Typography>
            <br/>
            <Typography component="h3">2) Make the recommended seeds and machinery available to farmers easily via our online e-store.</Typography>
            <br/>
            <Typography component="h3">3) After buying the crop providing guidance and suggestions with the best practices of farming.</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

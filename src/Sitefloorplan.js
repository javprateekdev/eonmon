import React from "react";
import FloorDialog from './FloorDialog';

const Sitefloorplan = () => {
  return (
    <div
    className="floorplan">
      
      <h2 style={{ textAlign: "center",textDecoration: "underline", marginBottom:'40px'}}>Floor and Site Plan</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="pricecheckbox">
          <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)",
              objectFit:"cover"
            }}
          />
       <div className="floorplanbutton">
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

        <div
         className="pricecheckbox"
        >
          <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)"
            }}
          />
         <div className="floorplanbutton"
            
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

        <div
        className="pricecheckbox"
         
        >
          <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)",
              objectFit:"cover"
            }}
          />
          <div className="floorplanbutton"
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

     
        <div
          className="pricecheckbox"
        >
         <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)"
            }}
          />
        <div className="floorplanbutton"
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>
        
        <div
         className="pricecheckbox"
        >
         <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)"
            }}
          />
         <div className="floorplanbutton"
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>
        
        <div
          className="pricecheckbox"
        >
         <img
            src="https://i.imgur.com/614jnyQ.jpg"
            style={{
              height: "85%",
              width: "100%",
              position: "relative",
              zIndex: "0",
              borderBottomLeftRadius:"120px",
              borderRadius:"20px",
              filter:"blur(2px)"
            }}
          />
        <div className="floorplanbutton"
          >
            <button style={{color:"white",padding:"5px"}}><FloorDialog/></button>
          </div>
        </div>

        
      </div>
    
    </div>
  );
};

export default Sitefloorplan;

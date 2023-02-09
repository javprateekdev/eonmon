import React from 'react'

const Foot = () => {
  return (
    <div className='footer'>
        <div style={{color:"white",width:"27%",padding:"4px",textAlign:"center",verticalAlign:"middle",borderRight:"1px solid white"}}><img src="https://i.imgur.com/MKDXIiy.png" style={{width:"20px",background:"#434343",marginRight:"2px"}}/>Call Now </div>
        <div style={{color:"white",width:"31%",padding:"4px",verticalAlign:"middle",borderRight:"1px solid white"}}><img src="https://i.imgur.com/hw5F4AO.png" style={{width:"20px",background:"#434343",marginRight:"5px",marginRight:"2px"}}/>WhatsApp</div>
        <div style={{color:"white",width:"42%",padding:"4px",verticalAlign:"middle"}}><img src="https://i.imgur.com/tWQVbyr.png" style={{width:"20px",background:"#434343",marginRight:"2px"}}/>Schedule A Visit</div>
    </div>
  )
}

export default Foot;
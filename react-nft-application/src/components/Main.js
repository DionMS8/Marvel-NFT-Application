// IMPORTING THE REACT LIBRARY
import React from "react"
// IMPORTING THE CSS FILE FOR MAIN COMPONENT
import "./Main.css"

// IMPORTING OWNER SOCIAL LINK IMAGES
 import instagramLogo from "./assets/owner/instagram.png"
 import twitterLogo from "./assets/owner/twitter.png"
 import moreIcon from "./assets/owner/more.png"

const Main = () => {
    return (
       <div className="main">
          <div className="mainContent">
              <div className="punkHighlight">
                  <div className="punkContainer">
                      <img className="selectedPunk" src={"https://www.google.com/search?q=spiderman+chibi+iron+armor&tbm=isch&ved=2ahUKEwjv-NmVpo31AhXLBd8KHWa6CYQQ2-cCegQIABAA&oq=spiderman+chibi+iron+armor&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoECAAQQzoFCAAQgAQ6BAgAEB46BggAEAgQHjoICAAQCBAKEB5Q4wlYjxxg9x1oAHAAeACAAXmIAboKkgEEMC4xMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=D5TOYa-1EsuL_Abm9KagCA&bih=624&biw=683#imgrc=WbiJYJOwmRfbfM"} alt="" />
                  </div>
              </div>
              <div className="punkDetails" style={{ color: "#fff"}}>
                    <div className="title">Spiderman (Iron Armor)</div>
                    <span className="itemNumber">• #88</span>
              </div>
              <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={"https://www.google.com/search?q=opensea+profile+picture&tbm=isch&ved=2ahUKEwj9tIKepo31AhXbwikDHeyCDAAQ2-cCegQIABAA&oq=opensea+profile&gs_lcp=CgNpbWcQARgDMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYOgcIIxDvAxAnOgQIABADOgUIABCABDoLCAAQgAQQsQMQgwE6BAgAEEM6BggAEAgQHlDIKFiMT2CjX2gAcAB4AIABrwGIAeEPkgEEMC4xNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=IJTOYf2kLduFp8kP7IUy&bih=624&biw=683#imgrc=nU9tHa5qU00MdM"} alt=""/> 
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0x532gb764gf42gf64gff64g8540485g9nh49g</div>
                            <div className="ownerHandle">@dionms8</div>
                       </div>
                        <div className="ownerLink">
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className="ownerLink">
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className="ownerLink">
                            <img src={moreIcon} alt="" />
                        </div>
                    </div>
              </div>
          </div>
       </div>
    )
}

export default Main





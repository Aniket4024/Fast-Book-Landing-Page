import { useState } from "react"
import style from "../CSS/ComponentCSS/BannerPart.module.scss"
import BookVector from "../Media/Book-vector-graphics.png"
import BannerVideo from "../Media/BannerVideo.mp4"


const BannerPart = ()=>{

    const [Number1,setNumber] = useState("");

    return <div 
        id={style.Banner}
    >
        <div>
            {/* <img src={BookVector} alt="Book Vector" /> */}
            <video 
                width="90%" 
                height="80%"
                loop
                autoPlay
                type="video/mp4"
                muted
                src={BannerVideo}
            >
            </video>
        </div>
        <div>
            <input type="text" placeholder="Email I'd" />
            <button>Join Wishlist</button>
        </div>
        {/* <div>
            <h1>Start Now</h1>
            <input 
                type="text"  
                placeholder="Enter Mobile Number" 
                value={Number1}
                onChange={(e)=>setNumber(e.target.value)}
            />
            <br />
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <p>
                    By clicking the checkbox , you agree and accept that all your personal information 
                    (including the sensitive personal information) shall be governed as per the Privacy 
                    Policy and shall be stored in the servers located in territory of India owned ,
                    controlled and managed  by us.
                </p>
            </label>
            <button>
                Continue
            </button>
        </div> */}

    </div>
}

export default BannerPart
import { useState } from "react"
import style from "../CSS/ComponentCSS/BannerPart.module.css"
import Banner from "../Media/Banner.jpg"
import BookVector from "../Media/Book-vector-graphics.png"
import logo from "../Media/logo.png"


const BannerPart = ()=>{

    const [Number1,setNumber] = useState("");

    return <div 
        id={style.Banner}
    >
        <div>
            <img src={BookVector} alt="Book Vector" />
        </div>
        <div>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere assumenda, aspernatur ducimus quasi quisquam consectetur? Eveniet mollitia dignissimos ipsum consectetur deserunt voluptate dolorum quisquam labore, iure id corrupti odit.</p>
            </label>
            <button>
                Continue
            </button>
        </div>
    </div>
}

export default BannerPart
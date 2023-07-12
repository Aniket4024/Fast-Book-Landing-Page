import style from "../CSS/ComponentCSS/Navbar.module.scss"
import logo from "../Media/logo.png"
import {HiOutlineLogin} from "react-icons/hi";
import logo1 from "../Media/logo(1).svg"
import { useState } from "react";
import show from "../Media/show.png"
import hide from "../Media/hide.png"
import arrow from "../Media/arrow-right.png"


const Navbar = ()=>{

    const [show1,setShow] = useState(false)

    return <div id={style.Navbar}>
        <div>
            <img src={logo1} alt="logo" />
            {/* <svg>{logo1}</svg> */}
        </div>
        <div>
            <p>
                We have re-imagined accounting 
                <br />
                Minimize your effort focus on growth
                <br />
                Take Decisions using vital information
            </p>
        </div>
        <div>
           <div>
                <input type="text" placeholder="Mobile Number"/>
                <button onClick={()=>setShow(prev=>!prev)}>
                    <img src={show1 ? hide : show} alt="" />
                </button>
                <input type={show1 ? "text" : "password"} placeholder="Password"/>
                <button onClick={()=>setShow(prev=>!prev)}>
                    <img src={show1 ? hide : show} alt="" />
                </button>
           </div>
            <button>
                <HiOutlineLogin style={{marginTop:"-4px"}}/>
                <h4>Login / Register</h4>
            </button>
            <button>
                <img src={arrow} alt="" />
            </button>
        </div>
    </div>
}

export default Navbar
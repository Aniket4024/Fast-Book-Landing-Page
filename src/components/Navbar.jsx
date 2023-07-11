import style from "../CSS/ComponentCSS/Navbar.module.css"
import logo from "../Media/logo.png"
import {HiOutlineLogin} from "react-icons/hi";


const Navbar = ()=>{
    return <div id={style.Navbar}>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <button>
                <HiOutlineLogin style={{marginTop:"-4px"}}/>
                <h4>Login</h4>
            </button>
        </div>
    </div>
}

export default Navbar
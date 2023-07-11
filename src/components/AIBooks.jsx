import style from "../CSS/ComponentCSS/AIBooks.module.css"
import { BsBank, BsCashCoin, BsFileEarmarkBarGraph, BsFillCartCheckFill, BsGraphUpArrow, BsPeople, BsPersonWorkspace, BsQrCodeScan, BsRecycle, BsRobot, BsSortUpAlt } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";



const AIBooks = ()=>{
    return <div id={style.AIBooks}>
        <div>
            <h1>WHY AI BOOKS ?</h1>
            <div></div>
            <p>Exploring the Advantages of AI in the World of Books</p>
        </div>
        <div>
            <div>
                <label>
                    <BsRobot/>
                    <p>
                        Uses Artificial Intelligence
                    </p>
                </label>
                <label>
                    <BsPersonWorkspace/>
                    <p>
                        Minimum Manual Effort
                    </p>
                </label>
                <label>
                    <BsPeople/>
                    <p>
                        Focus on Customers
                    </p>
                </label>
                <label>
                    <BsQrCodeScan/>
                    <p>
                        Scan and get work done
                    </p>
                </label>
                <label>
                    <BsRecycle/>
                    <p>
                        Integrated teo ways data transfer from Tally and Zoho Frameworks
                    </p>
                </label>
                <label>
                    <BsGraphUpArrow/>
                    <p>
                        Dead Inventory | Cold Customers
                    </p>
                </label>
            </div>
            <div>
                <label>
                    <MdOutlinePrivacyTip/>
                    <p>
                        Privacy secured (How?)
                    </p>
                </label>
                <label>
                    <BsBank/>
                    <p>
                        Integrate your bank account with our software
                    </p>
                </label>
                <label>
                    <BsFileEarmarkBarGraph/>
                    <p>
                        Detailed Analytivs
                    </p>
                </label>
                <label>
                    <BsCashCoin/>
                    <p>
                        Debtor's Management
                    </p>
                </label>
                <label>
                    <BsFillCartCheckFill/>
                    <p>
                        Intelligence based automated purchsae order creation
                    </p>
                </label>
                <label>
                    <BsSortUpAlt/>
                    <p>
                        Focus on most profitable products and customers
                    </p>
                </label>
            </div>
        </div>
    </div>
}

export default AIBooks
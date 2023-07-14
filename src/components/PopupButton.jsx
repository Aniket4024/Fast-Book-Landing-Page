import React, { useMemo, useState } from 'react';
import { Button, Divider, Popover, Segmented } from 'antd';
import style from "../CSS/ComponentCSS/PopupButton.module.scss"
import hide from "../Media/hide.png"
import show from "../Media/show.png"


const text = <span>Login</span>;
const content = ({show1,setShow})=>{
    return (
        <div id={style.popup}>
            <input type="text" placeholder="Mobile Number"/>
            <div>
                <input type={show1 ? "text" : "password"} placeholder="Password"/>
                <button onClick={()=>setShow(prev=>!prev)}>
                        <img src={show1 ? hide : show} alt="" />
                </button>
            </div>
            <button id={style.popupButn}>
                <h4>Login / Register</h4>
            </button>
            <p>Forgot Password ?</p>
        </div>
      );
}

const buttonWidth = 70;

const PopupButton = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const [show1,setShow] = useState(false)

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" title={text} content={content({show1,setShow})} arrow={mergedArrow}>
          <Button 
            id={style.popupButn}
          >
                <h4>Login / Register</h4>
          </Button>
        </Popover>
      </div>
    </div>
  );
};

export default PopupButton;
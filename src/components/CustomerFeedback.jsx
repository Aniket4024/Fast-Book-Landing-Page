import style from "../CSS/ComponentCSS/CustomerFeedback.module.css"
import defaultImage from "../Media/defaultImage.png"

const CustomerFeedback = ()=>{
    return <div id={style.main}>
        <div>
            <h1>
                OUR USERS ARE LOVING IT
            </h1>
            <div></div>
            <p>Discover the Positive Feedback from Our Valued Users</p>
        </div>
        <div>
            <div>
                <h2>Hardware Industry</h2>
                <div id={style.Image}>
                    <img src={defaultImage} alt="Default Image" />
                </div>
                <div id={style.Paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem accusamus, voluptatum obcaecati sint qui corrupti ad voluptatem! Laborum exercitationem at placeat, sapiente a perferendis voluptates ducimus cumque aperiam nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem accusamus, voluptatum obcaecati sint qui corrupti ad voluptatem! Laborum exercitationem at placeat, sapiente a perferendis voluptates ducimus cumque aperiam nobis.
                </div>
            </div>
            <div>
                <h2>Textiles Industry</h2>
                <div id={style.Image}>
                    <img src={defaultImage} alt="Default Image" />
                </div>
                <div id={style.Paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem accusamus, voluptatum obcaecati sint qui corrupti ad voluptatem! Laborum exercitationem at placeat, sapiente a perferendis voluptates ducimus cumque aperiam nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem accusamus, voluptatum obcaecati sint qui corrupti ad voluptatem! Laborum exercitationem at placeat, sapiente a perferendis voluptates ducimus cumque aperiam nobis.
                </div>
            </div>
            
        </div>
    </div>
}

export default CustomerFeedback
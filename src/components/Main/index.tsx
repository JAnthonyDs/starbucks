import React, {useState} from "react";

import { Container, Circle, Footer, TextCentral, Button } from "./Styles";
import image1 from './assets/thumb1.png'
import image2 from './assets/thumb2.png'
import image3 from './assets/thumb3.png'

import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'


const Main: React.FC = () => {
    const [imgCentral, setImgCentral] = useState(img1)
    const [colorCentral, setColorCentral] = useState('#017143')

    function changeColor(color: string, img: string){
        setColorCentral(color)
        setImgCentral(img)
    }


    return(
        <Container>
            <Circle bgcolor={colorCentral}/>

            <TextCentral bgcolor={colorCentral}>
                <h1>It's not just Coffee It's <strong>Starbucks</strong></h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt, nam itaque doloribus ducimus repudiandae culpa reiciendis minus soluta laboriosam quas tenetur distinctio excepturi rem repellat? Adipisci totam consequuntur debitis!
                </p>

                <Button bgcolor= {colorCentral}>
                    Learn More
                </Button>
            </TextCentral>

            <img src={imgCentral}/>

            <Footer>
            <div>
                <img  src={image1} onClick={() => changeColor('#017143', img1)}/>
                <img  src={image2} onClick={() => changeColor('#eb7495', img2)}/>
                <img  src={image3} onClick={() => changeColor('#d752b1', img3)}/>
            </div>
            </Footer>
        </Container>
    );
}

export default Main;
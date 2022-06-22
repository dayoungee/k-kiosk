
import Carousel from 'react-material-ui-carousel'

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';

const Wait = () => {

    return(
        <>
            <div className="slider">
              <Carousel autoPlay animation="slide">
                  <img className="slider-image" src={image1} />
                   <img className="slider-image" src={image2} />
                   <img className="slider-image" src={image3} />
             </Carousel>
                <p className="wait-text">원하시는 언어를 터치해주세요.</p>
            </div>
        </>
    );
};

export default Wait;

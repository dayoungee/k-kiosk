
import Carousel from 'react-material-ui-carousel'

const Wait = () => {


    return(
        <>
            <Carousel autoPlay animation="slide">
                {
                    path.map( (item) => <Item item={item} /> )
                }
            </Carousel>
        </>
    );
};

export default Wait;

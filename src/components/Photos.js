import React, { useState, useEffect } from 'react'

/*
    Package for API Rendering calls
*/
import axios from 'axios'

/* 
    Lazy Load Image Component
    Package for Lazy loading image
*/
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/*
    Lightbox for photo rendering 
*/
import { SRLWrapper } from "simple-react-lightbox";


/* 
    React Icon Library
*/
import { FaHeart } from "react-icons/fa";


/*  
    Package for React bootstrap component
*/
import {
    Container,
    Row
  } from 'react-bootstrap'

const Photos = (props) => {
    console.log(props)


    // populate photo data into array state
    const [photos, SetPhotos] = useState([])

    useEffect(() => {
        getRandomPhotos()
    },[]);

    const getRandomPhotos = async () => {
        try {
            const res = await axios.get(`https://api.unsplash.com/photos/?client_id=zm6yP5utQrDdjin90JVGm7qie_4wPSZvbmUSpJnWsa0`)
            const data = res.data;
            console.log(res)
            if (res.status) {
                SetPhotos(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const options = {
        thumbnails: {
          showThumbnailsButton: false,
        }
    }

    console.log(photos !== 0)

  return (
    <Container>
          <Row>
            <div className="photos">
                <div className='srl-wrapper'>
                    <SRLWrapper options={options}>
                        {
                            photos.map((item, i) => {
                                return(
                                    <div className="holder-img" key={i}>
                                        <LazyLoadImage 
                                            src={item.urls.small} 
                                            alt={item.alt_description}
                                            effect="blur"
                                            className="img"  
                                            />

                                        <div className="overlay">
                                            <p className="overlay-name">{item.user.name}</p>
                                            <p className="overlay-heart"> <FaHeart /> {item.user.total_likes}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </SRLWrapper>
                </div>
            </div>
        </Row>
    </Container>
    );
}

export default Photos;

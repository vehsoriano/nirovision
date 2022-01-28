import React, { useState, useEffect } from 'react'
import axios from 'axios'

/*
    Lightbox for photo rendering 
*/
import { SRLWrapper } from "simple-react-lightbox";

/* 
    Lazy Load Image Component
    Package for Lazy loading image
*/
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* 
    React Icon Library
*/
import { FaHeart } from "react-icons/fa";

function Photos(props) {
    console.log(props)


    // populate photo data into array state
    const [photos, SetPhotos] = useState([])

    const getRandomPhotos = async () => {
        try {
            const res = await axios.get(`https://api.unsplash.com/photos/?client_id=zm6yP5utQrDdjin90JVGm7qie_4wPSZvbmUSpJnWsa0`)
            const data = await res.data;
            console.log(res)
            if (res.status) {
                SetPhotos(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRandomPhotos()
    },[]);

    const options = {
        thumbnails: {
          showThumbnailsButton: false,
        }
    }

    // function lightboxCustom(i) {
    //     props.triggerModal(i)
    //     // console.log(i)
    // }

  return (
        <div className="photos">
            <div className='srl-wrapper'>
                <SRLWrapper options={options}>
                    {
                        photos.map((item, i) => {
                            return(
                                <div className="holder-img" key={i}>
                                    {/* <div className="holder-img" key={i} onClick={() => lightboxCustom(item)}> */}
                                    <LazyLoadImage 
                                        effect="blur"
                                        className="img"  
                                        src={item.urls.small} 
                                        alt={item.alt_description}
                                        width="100%"
                                        height="auto"
                                        />
                                    {/* <p>{item.alt_description}</p> */}

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
    );
}

export default Photos;

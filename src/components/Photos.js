import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import 'react-lazy-load-image-component/src/effects/blur.css';


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


    function lightboxCustom(i) {
        props.triggerModal(i)
        // console.log(i)
    }

  return (
    <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry className="photos" gutter='10px'>
            {
                photos.map((item, i) => {
                    return(
                        <div className="holder-img" key={i} onClick={() => lightboxCustom(item)}>
                            <LazyLoadImage 
                                effect="blur"
                                className="img"  
                                src={item.urls.regular} 
                                alt={item.alt_description}
                                width="100%"
                                height="auto"/>
                            {/* <p>{item.alt_description}</p> */}

                            <div className="overlay">
                                <p className="overlay-name">{item.user.name}</p>
                                <p className="overlay-heart"> <FaHeart /> {item.user.total_likes}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Masonry>
    </ResponsiveMasonry>
    
  );
}

export default Photos;

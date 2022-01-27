import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


function Photos() {

    const [photos, SetPhotos] = useState([])

    const getRandomPhotos = async () => {
        const res = await axios.get(`https://api.unsplash.com/photos/?client_id=zm6yP5utQrDdjin90JVGm7qie_4wPSZvbmUSpJnWsa0`)
        console.log(res.data);
        SetPhotos(res.data)
        const data = await res.data;
    }

    useEffect(() => {
        getRandomPhotos()
    },[]);


    function lightboxCustom() {
        console.log('open swiper')
    }

  return (
    <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry className="photos" gutter='10px' onClick={lightboxCustom}>
            {
                photos.map((item, i) => {
                    return(
                        <div className="holder-img" key={i}>
                            <img className="img"  src={item.urls.raw} alt={item.description}/>
                            {/* <p>{item.alt_description}</p> */}
                        </div>
                    )
                })
            }
        </Masonry>
    </ResponsiveMasonry>
    
  );
}

export default Photos;

import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = ({ getImages }) => {
    //console.log(getImages);


    return (
        <div className='mx-[23px] lg:mx-[114px] mb-[47.99px] md:mb-[227px]'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 411: 2, 800: 3 }}>

                <Masonry>

                    {
                        getImages?.map(imgInfo => <ImageCard imgInfo={imgInfo} key={imgInfo.id}></ImageCard>)
                    }
                    
                </Masonry>

            </ResponsiveMasonry>

        </div>
    );
};

export default Gallery;
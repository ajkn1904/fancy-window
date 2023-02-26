import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from '../Modal/Modal';

const Gallery = ({ getImages }) => {
    //console.log(getImages);

    const [modalData, setModalData] = useState([])


    const handleDetailModal = data => {
        //console.log(data);
        setModalData(data);
    }
    //console.log(modalData);

    return (
        <div className='mx-[23px] lg:mx-[114px] mb-[47.99px] md:mb-[227px]'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 411: 2, 800: 3 }}>

                <Masonry>

                    {
                        getImages?.map(imgInfo => <ImageCard imgInfo={imgInfo} key={imgInfo.id}handleDetailModal={handleDetailModal}></ImageCard>)
                    }
                    
                </Masonry>

            </ResponsiveMasonry>

            {modalData &&
                <Modal modalData={modalData}/>
            }

        </div>
    );
};

export default Gallery;
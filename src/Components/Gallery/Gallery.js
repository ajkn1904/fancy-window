import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from '../Modal/Modal';

const Gallery = ({ getData, getSearchedData, isSearching, modalData, setModalData, searched, theme }) => {


    const handleDetailModal = data => {
        setModalData(data);
    }



    return (
        <div className='mx-[23px] lg:mx-[114px] pb-[47.99px] md:pb-[227px]'>


            <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 411: 2, 800: 3 }}>

                <Masonry>

                    {(isSearching && getSearchedData) ?

                        getSearchedData.map(imgInfo => <ImageCard imgInfo={imgInfo} key={imgInfo.id} handleDetailModal={handleDetailModal} theme={theme}></ImageCard>)

                        :
                        getData?.map(imgInfo => <ImageCard imgInfo={imgInfo} key={imgInfo.id} handleDetailModal={handleDetailModal} theme={theme}></ImageCard>)
                    }

                </Masonry>

            </ResponsiveMasonry>

            {modalData &&
                <Modal modalData={modalData} theme={theme}/>
            }

        </div>
    );
};

export default Gallery;
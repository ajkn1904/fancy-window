import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from '../Modal/Modal';

const Gallery = ({ getData, getSearchedData, isSearching, modalData, setModalData, searched, theme }) => {
    //console.log(getData);

    //const [modalData, setModalData] = useState([])


    const handleDetailModal = data => {
        //console.log(data);
        setModalData(data);
    }
    //console.log(modalData);

    return (
        <div className='mx-[23px] lg:mx-[114px] pb-[47.99px] md:pb-[227px]'>

{/*             {searched &&
                <div>
                    {
                        getSearchedData.map((data, i) => <div key={i} className='overflow-hidden overflow-x-scroll flex flex-row gap-2'>


                            {
                                (data.tags[0].source?.ancestry?.category?.pretty_slug !== undefined) && <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[0].source?.ancestry?.category?.pretty_slug}</label>
                            }

                            {data.tags[0].source?.ancestry?.subcategory?.pretty_slug !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[0].source?.ancestry?.subcategory?.pretty_slug}</label>

                            }

                            {data.tags[1].source?.ancestry?.subcategory?.pretty_slug !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[1].source?.ancestry?.subcategory?.pretty_slug}</label>

                            }

                            {data.tags[0].source?.cover_photo?.alt_description !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[0].source?.cover_photo?.alt_description}</label>
                            }
                            {data.tags[1].source?.cover_photo?.alt_description !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[1].source?.cover_photo?.alt_description}</label>
                            }
                            {data.tags[1].source?.title !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[1].source?.title}</label>
                            }
                            {data.tags[2]?.title !== undefined &&
                                <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{data.tags[2]?.title}</label>
                            }


                        </div>
                        )}
                </div>
            } */}

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
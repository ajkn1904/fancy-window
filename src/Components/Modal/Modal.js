import React from 'react';
import { SlLike } from 'react-icons/sl';
import { IoLogoInstagram } from 'react-icons/io';
import { CiTwitter } from 'react-icons/ci';
import { HiOutlineShare } from 'react-icons/hi';
import { BsInfoCircle } from 'react-icons/bs';

const Modal = ({ modalData, theme }) => {

    const { urls, likes, user } = modalData



    return (
        <div className=''>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className={`relative w-[388.08px] md:w-[650px] lg:w-[945px] mx-auto ${theme === 'light' ? 'bg-white' : 'bg-[#232323]'} rounded-lg`}>
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute -right-2 -top-2 bg-white text-black hover:bg-white">✕</label>

                    <img src={urls?.full} alt="" className='rounded-t-lg w-full h-[402.03px] md:h-[482.98px]' />




                    <div className='flex items-center gap-2 relative left-[230px] -top-[55px] md:left-[500px] lg:left-[20px]'>
                        <div className='flex justify-center items-center gap-2 border border-white rounded-lg p-2'>
                            <HiOutlineShare className='text-white h-3' />
                            <p className='text-white text-[8.23529px]'>Share</p>
                        </div>
                        <div className='flex justify-center items-center gap-2 border border-white rounded-lg p-2'>
                            <BsInfoCircle className='text-white h-3' />
                            <p className='text-white text-[8.23529px]'>Info</p>
                        </div>
                    </div>



                    <div className='flex justify-between items-center ml-[21.16px] mr-[21.34px] my-[20.86px] md:m-[25px] gap-5'>
                        <div className='flex flex-col md:flex-row items-start md:items-center'>
                            <div className='flex items-center gap-[8.31px] md:gap-[10px]'>

                                <label tabIndex={0} className="avatar">
                                    <div className="w-[46.53px] md:w-14 h-[46.53px] md:h-14 rounded-full">
                                        <img src={user?.profile_image?.large} alt="" />
                                    </div>
                                </label>

                                <div className='flex flex-col items-start'>
                                    <h3 className={`${theme === 'light' ? 'text-[#4F4F4F]' : 'text-[#E5E5E5]'}font-bold text-[11.6316px] md:text-sm light:text-[#4F4F4F]`}>{user?.name}</h3>

                                    <p className='italic text-[#A7A7A7] text-[9.96992px] md:text-xs font-semibold'>@{user?.username}</p>
                                </div>
                            </div>



                            <div className='flex gap-[9.97px] md:gap-3 ml-[21.56px] mt-[12.52px] md:mt-0'>
                                <div className='flex items-center'>
                                    <IoLogoInstagram className='w-3 md:w-4 h-3 md:h-4 text-[#A7A7A7]' />
                                    <p className='italic text-[#A7A7A7] font-semibold text-[9.96992px] md:text-xs'>/{user?.social?.instagram_username}</p>
                                </div>


                                <div className='flex items-center'>
                                    <CiTwitter className='w-3 md:w-4 h-3 md:h-4 text-[#A7A7A7]' />
                                    <p className='italic text-[#A7A7A7] font-semibold text-[9.96992px] md:text-xs'>/{user?.social?.twitter_username}</p>
                                </div>
                            </div>



                        </div>



                        <div className='flex flex-col justify-start'>
                            <button className='text-white bg-[#3CB46E] w-[139.48px] md:w-[157px] h-[43.14px] md:h-[39px] font-bold text-[10px] md:relative md:right-[22px] lg:-top-[115px] rounded'>Download Image</button>

                            <div className='flex justify-center items-center gap-[2px] mt-2 md:mt-0'>
                                <SlLike className='w-3 md:w-4 h-3 md:h-4 text-[#858484]' />
                                <p className='font-bold text-[8.35819px] md:text-[15px] text-[#858484]'>{likes}k</p>
                            </div>
                        </div>




                    </div>
                    {
                        modalData?.tags &&
                        <>
                            <h3 className={`text-start ml-5 mb-2 font-bold text-[9.96992px] md:text-[12px] ${theme === 'light' ? 'text-[#4F4F4F]' : 'text-[#E5E5E5]'} mt-[21.82px] md:mt-[33px]`}>Related Tags</h3>
                            <div className='flex flex-wrap gap-[9.97px] md:gap-3 ml-[21.16px] mr-[21.34px] mb-[19.54px] md:mb-6'>
                                {modalData.tags[0].source?.ancestry?.category?.pretty_slug &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[0].source?.ancestry?.category?.pretty_slug}</label>
                                }
                                {
                                    modalData.tags[0].source?.ancestry?.subcategory?.pretty_slug &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[0].source?.ancestry?.subcategory?.pretty_slug}</label>
                                }
                                {modalData.tags[1].source?.ancestry?.subcategory?.pretty_slug &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[1].source?.ancestry?.subcategory?.pretty_slug}</label>
                                }
                                {modalData.tags[0].source?.cover_photo?.alt_description &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[0].source?.cover_photo?.alt_description}</label>
                                }
                                {modalData.tags[1].source?.cover_photo?.alt_description &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[1].source?.cover_photo?.alt_description}</label>
                                }
                                {modalData.tags[1].source?.title &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[1].source?.title}</label>
                                }
                                {modalData.tags[2]?.title &&
                                    <label className='label font-medium text-[8.30827px] md:text-[10px] text-[#4F4F4F] bg-[#ECECEC] rounded h-[23.26px] md:h-[28px] my-[3.325px]'>{modalData.tags[2]?.title}</label>
                                }
                            </div>
                        </>
                    }


                </div>
            </div>

        </div>
    );
};

export default Modal;
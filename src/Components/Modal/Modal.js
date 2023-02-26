import React from 'react';
import { SlLike } from 'react-icons/sl';
import { IoLogoInstagram } from 'react-icons/io';
import { CiTwitter } from 'react-icons/ci';

const Modal = ({ modalData }) => {
    console.log(modalData)

    const { urls, likes, user } = modalData



    return (
        <div className=''>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-[388.08px] md:w-[945px] mx-auto p-0">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-0 top-0 bg-white text-black hover:bg-white">✕</label>

                    <img src={urls?.full} alt="" className='rounded-t-lg w-full h-[402.03px] md:h-[482.98px]' />


                    <div className='flex justify-between items-center ml-[21.16px] mr-[21.34px] mt-[20.86px] mb-[19.54px] md:mb-6 md:m-[25px] gap-5'>
                        <div className='flex flex-col md:flex-row items-start md:items-center'>
                            <div className='flex items-center gap-[8.31px] md:gap-[10px]'>

                                <label tabIndex={0} className="avatar">
                                    <div className="w-[46.53px] md:w-14 h-[46.53px] md:h-14 rounded-full">
                                        <img src={user?.profile_image?.large} alt="" />
                                    </div>
                                </label>

                                <div className='flex flex-col items-start'>
                                    <h3 className='text-[#4F4F4F] font-bold text-[11.6316px] md:text-sm light:text-[#4F4F4F] dark:text-[#E5E5E5]'>{user?.name}</h3>

                                    <p className='italic text-[#A7A7A7] text-[9.96992px] md:text-xs font-semibold'>@{user?.username}</p>
                                </div>
                            </div>

                            
                            
                            <div className='flex gap-[9.97px] md:gap-3 ml-[21.56px] mt-[12.52px] md:mt-0'>
                                <div>
                                    <IoLogoInstagram className='w-3 md:w-4 h-3 md:h-4 text-[#A7A7A7]' />
                                    <p className='italic text-[#A7A7A7] font-semibold text-[9.96992px] md:text-xs'>{user?.social?.instagram_username}</p>
                                </div>


                                <div>
                                    <CiTwitter className='w-3 md:w-4 h-3 md:h-4 text-[#A7A7A7]' />
                                    <p className='italic text-[#A7A7A7] font-semibold text-[9.96992px] md:text-xs'>{user?.social?.twitter_username}</p>
                                </div>
                            </div>



                        </div>



                        <div className='flex flex-col justify-start'>
                            <button className='text-white bg-[#3CB46E] w-[169.48px] md:w-[157px] h-[43.14px] md:h-[39px] font-bold text-[10px] md:relative md:right-[22px] md:-top-[85px] rounded'>Download Image</button>

                            <div className='flex justify-center items-center gap-[2px]'>
                                <SlLike className='w-3 md:w-4 h-3 md:h-4 text-[#858484]' />
                                <p className='font-bold text-[8.35819px] md:text-[15px] text-[#858484]'>{likes}k</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Modal;
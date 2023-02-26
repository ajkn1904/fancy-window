import React from 'react';
import { SlLike } from 'react-icons/sl'

const ImageCard = ({ imgInfo }) => {
    console.log(imgInfo)
    const { id, likes, urls, user } = imgInfo

    return (
        <div className='card border rounded-lg m-2 md:mx-[18px] md:my-4'>
            <img src={urls.thumb} alt="" className='max-h-[500px] rounded-t-lg'/>
            <div className='flex justify-between h-[38.01px] md:h-[59px] mr-[9.25px] md:mr-4'>
                <div className='flex items-center mx-[5.16px] my-[8.93px] md:m-[10px] gap-[5.16px] md:gap-[10px]'>
                    <label tabIndex={0} className="avatar">
                        <div className="w-[20.14px] md:w-[39px] h-[20.14px] md:h-[39px] rounded-full">
                            <img src={user.profile_image.large} alt=""/>
                        </div>
                    </label>

                    <div className='flex flex-col items-start'>
                        <h3 className='text-[#4F4F4F] font-bold text-[5.61186px] md:text-xs'>{user.name}</h3>

                        <p className='italic text-[#A7A7A7] text-[4.67655px] md:text-[10px] font-semibold'>@{user.username}</p>
                    </div>

                </div>

                <div className='flex justify-center items-center gap-[2px]'>
                    <SlLike className='h-[7.19px] md:h-[14px] md:w-[14px] w-[7.19px]'/>
                    <p className='font-bold text-[5.13807px] md:text-[10px]'>{likes}k</p>
                </div>

            </div>
        </div>
    );
};

export default ImageCard;
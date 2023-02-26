import React from 'react';

const Header = () => {

    return (
        <div className='bg-cover h-[327px] md:h-[384px] flex justify-center items-center flex-col mb-12 md:mb-[58px]' style={{ backgroundImage: `url('https://i.ibb.co/372d9Hf/banner.jpg')` }}>


            <h1 className='font-bold text-2xl md:text-[32px] text-[#FFFFFF] w-[291px] md:w-[694px] h-[58px] md:h-[39px]'>High Quality Images by creators</h1>

            <p className='w-[219px] md:w-[416px] h-6 md:h-[17px] font-medium text-[10px] md:text-sm text-[#C4C4C4] pt-[10px] md:pt-[17px] pb-[23px] md:pb-4'>Over 2.4 million+ stock Images by our talented community</p>
            
            <div className="form-control mt-[23px] md:mt-4">
                <input type="search" placeholder="Search high resolution Images, categories, wallpapers" className="input input-bordered h-10 w-[325px] md:w-[808px] md:h-[54px] bg-[#FFFFFF]" />
            </div>

        </div>
    );
};

export default Header;
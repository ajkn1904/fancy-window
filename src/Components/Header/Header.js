import React from 'react';

const Header = () => {

    return (
        <div className='bg-cover h-[327px] lg:h-[384px] flex justify-center items-center flex-col' style={{ backgroundImage: `url('https://i.ibb.co/372d9Hf/banner.jpg')` }}>


            <h1 className='font-bold text-2xl lg:text-[32px] text-[#FFFFFF] w-[291px] lg:w-[694px] h-[58px] lg:h-[39px]'>High Quality Images by creators</h1>

            <p className='w-[219px] lg:w-[416px] h-6 lg:h-[17px] font-medium text-[10px] lg:text-sm text-[#C4C4C4] pt-[10px] lg:pt-[17px] pb-[23px] lg:pb-4'>Over 2.4 million+ stock Images by our talented community</p>
            
            <div className="form-control mt-[23px] lg:mt-4">
                <input type="text" placeholder="Search high resolution Images, categories, wallpapers" className="input input-bordered h-10 w-[325px] lg:w-[808px] lg:h-[54px] bg-[#FFFFFF]" />
            </div>

        </div>
    );
};

export default Header;
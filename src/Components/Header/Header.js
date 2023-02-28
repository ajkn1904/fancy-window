import React from 'react';

const Header = ({ handleChange, searched, suggestions, suggestionHandler, isFromNav, setIsFromNav, handleKeyDown, hideBanner, theme}) => {



    return (
        <div className={`${hideBanner ? 'hidden' : ''} bg-cover h-[327px] md:h-[384px] flex justify-center items-center flex-col mb-12 md:mb-[58px]`} style={{ backgroundImage: `url('https://i.ibb.co/372d9Hf/banner.jpg')` }}>


            <h1 className='font-bold text-2xl md:text-[32px] text-[#FFFFFF] w-[291px] md:w-[694px] h-[58px] md:h-[39px]'>High Quality Images by creators</h1>

            <p className='w-[219px] md:w-[416px] h-6 md:h-[17px] font-medium text-[10px] md:text-sm text-[#C4C4C4] pt-[10px] md:pt-[17px] pb-[23px] md:pb-4'>Over 2.4 million+ stock Images by our talented community</p>

            <div className="form-control mt-[23px] md:mt-4">
                <form onSubmit={e => e.preventDefault()} className='flex items-center flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative left-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

                    <input type="search" name='searched' placeholder="Search high resolution Images, categories, wallpapers" className="input input-bordered h-10 w-[325px] md:w-[508px] lg:w-[808px] md:h-[54px] bg-[#FFFFFF] text-black pl-9" onChange={handleChange} value={searched} onClick={() =>setIsFromNav(false)} onKeyDown={handleKeyDown} />

                </form>


            </div>
            {searched && (isFromNav !== true) &&
                <div className={`overflow-hidden overflow-y-scroll scrollbar-hide w-[310px] md:w[326px] h-[100px] md:h-[120px] mx-auto mt-2 rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-black text-white'}`}>

                    {
                        suggestions && suggestions.map(
                            (suggestion, i) => <div key={i} className='text-start p-3 cursor-pointer' onClick={() => suggestionHandler(suggestion)}>
                                {suggestion}
                            </div>
                        )
                    }
                </div>
            }


        </div>
    );
};

export default Header;
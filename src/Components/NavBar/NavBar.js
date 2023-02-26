import React from 'react';

const NavBar = () => {

    const menu = <>
        <li><a href='#explore' className='font-bold text-xs text-[#333333] pr-1'>Explore</a></li>
        <li><a href='#collection' className='font-bold text-xs text-[#333333] pr-1'>Collection</a></li>
        <li><a href='#community' className='font-bold text-xs text-[#333333]'>Community</a></li>
    </>


    return (
        <div className="navbar h-[70px] md:h-[97px]">
            <div className="navbar-start">

                <a href='#home' className="text-[24px] md:text-3xl font-normal text-[#333333] ml-[27px] pt-[18px] pb-[19px] md:pt-[27px] md:mb-7">Image Gallery</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="form-control">
                        <input type="text" placeholder="Search images here" className="input input-bordered h-[43px] w-[419px] ml-16 mr-[27px]" />
                    </div>
                    {menu}
                </ul>
            </div>
            <div className="hidden md:flex ml-[88px] mr-[150px]">
                <label className="label cursor-pointer">
                    <span className="font-bold text-xs text-[#333333] w-[69px]">Dark Mode</span>
                    <input type="checkbox" className="toggle" />
                </label>

            </div>


            <button className="ml-[30%] mr-[10.05px] btn btn-ghost btn-circle md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>



            <div className="dropdown dropdown-end mr-[31px]">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-40 bg-white">


                    {menu}
                    <li>
                        <label className="label cursor-pointer pr-1">
                            <span className="font-bold text-xs text-[#333333]">Dark Mode</span>
                            <input type="checkbox" className="toggle" />
                        </label>
                    </li>
                </ul>
            </div>

        </div>

    );
};

export default NavBar;
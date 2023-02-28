import React from 'react';


const NavBar = ({ handleChange, handleResetSearch, isSearchLensClicked, handleInputBox, searched, suggestions, suggestionHandler, handleSearchFromNav, isFromNav, handleKeyDown, setTheme, theme}) => {


    
  const handleTheme = () => {
    setTheme(theme === 'night' ? 'light' : 'night');
    //localStorage.setItem('data-theme', theme)
  };


    const menu = <>
        <li><a href='#explore' className={`font-bold text-xs ${theme === 'light' ? 'text-[#333333]' : 'text-white'} pr-1`}>Explore</a></li>
        <li><a href='#collection' className={`font-bold text-xs ${theme === 'light' ? 'text-[#333333]' : 'text-white'}  pr-1`}>Collection</a></li>
        <li><a href='#community' className={`font-bold text-xs ${theme === 'light' ? 'text-[#333333]' : 'text-white'}`}>Community</a></li>
    </>


    return (
        <div className="navbar h-[70px] md:h-[97px]">
            <div className="navbar-start">

                <p className={`text-[24px] lg:text-3xl font-normal ml-[27px] pt-[18px] pb-[19px] md:pt-[27px] md:mb-7 ${theme === 'light' ? 'text-black' : 'text-white'}`} onClick={handleResetSearch}>Image Gallery</p>
            </div>


            <div className="navbar-center hidden md:flex">

                <ul className="menu menu-horizontal px-1">

                    <form onSubmit={e => e.preventDefault()} className="form-control flex items-center flex-row ml-16 lg:mr-[27px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative left-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

                        <div className='flex flex-col'>
                            
                            <input type="search" placeholder="Search images here" className={`${searched && isFromNav ? 'relative top-[74px]' : ''} input input-bordered h-[43px] md:w-[200px] lg:w-[419px] pl-8`} onChange={handleChange} value={searched} onClick={handleSearchFromNav} onKeyDown={handleKeyDown}/>

                            {searched && isFromNav &&

                                <div className='overflow-hidden overflow-y-scroll overflow-x-scroll scrollbar-hide w-[120px] h-[120px] md:h-[140px] mx-auto mt-2 rounded-lg relative top-20'>

                                    {
                                        suggestions && suggestions.map(
                                            (suggestion, i) => <div key={i} className={`text-start ${theme === 'light' ? 'bg-white' : 'bg-black text-white '} w-full cursor-pointer p-2`} onClick={() => suggestionHandler(suggestion)}>
                                                {suggestion}
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>

                    </form>


                    {menu}
                </ul>

            </div>



            <div className="hidden md:flex lg:ml-[88px] lg:mr-[150px]">
               
                <button onClick={handleTheme} className="label cursor-pointer">
                    <span className={`font-bold text-xs ${theme === 'light' ? 'text-[#333333]' : 'text-white'} w-[69px]`}>Dark Mode</span>
                    <input type="checkbox" className="toggle"  />
                </button>

            </div>


            <form onSubmit={e => e.preventDefault()} className={`md:hidden ${isSearchLensClicked ? '' : 'ml-[30%] mr-[10.05px]'}`}>

                {
                    isSearchLensClicked &&

                    <div className={`${isSearchLensClicked 
                    ? 'flex flex-col relative top-16' : ''}`}>

                        <input type="search" placeholder="Search images here" className={`relative ${searched && isFromNav ? 'top-0' : '-top-16'} mr-8 input input-bordered h-8 w-[120px] pl-7 `} onChange={handleChange} value={searched} onClick={handleSearchFromNav} onKeyDown={handleKeyDown}/>


                        {searched && isFromNav &&

                            <div className={`${isSearchLensClicked !== true ? 'hidden' : 'md:hidden overflow-hidden overflow-y-scroll overflow-x-scroll scrollbar-hide w-[120px] h-[120px] md:h-[140px] mx-auto mt-2 rounded-lg'} `}>

                                {
                                    suggestions && suggestions.map(
                                        (suggestion, i) => <div key={i} className={`text-start ${theme=== 'light' ? 'bg-white' : 'bg-black text-white'} w-full cursor-pointer p-2`} onClick={() => suggestionHandler(suggestion)}>
                                            {suggestion}
                                        </div>
                                    )
                                }
                            </div>
                        }

                    </div>

                }
                <div className={`${isSearchLensClicked ? 'hidden' : ''} `} onClick={handleInputBox} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>


            </form>



            <div className="dropdown dropdown-end mr-[31px]">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-40 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>


                    {menu}
                    <li>
                        <button  onClick={handleTheme} className="label cursor-pointer pr-1">
                            <span className={`font-bold text-xs ${theme === 'light' ? 'text-[#333333]' : 'text-white'}`}>Dark Mode</span>
                            <input type="checkbox" className="toggle"  />
                        </button>
                    </li>
                </ul>
            </div>

        </div>

    );
};

export default NavBar;
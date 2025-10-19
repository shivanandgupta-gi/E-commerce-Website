import React from 'react'

//this page for loading the skelaton of the product go visit skelaton in tailwind on the filtering page 
const ProductLoadingGrid = (props) => {
    return (
        <>
            {
                props.view === "grid" &&
                <div className='flex items-center gap-5 animate-pulse py-5 px-3'>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                </div>
            }
            {
                props.view == "list" &&
                <div className='flex items-center gap-5 animate-pulse py-5 px-3'>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                    <div className='col w-[16%] h-[250px]'>
                        <div className="flex items-center mb-3 justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-400">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-56 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-28 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-60 mb-2.5"></div>
                    </div>
                </div>
            }

        </>

    )
}

export default ProductLoadingGrid;

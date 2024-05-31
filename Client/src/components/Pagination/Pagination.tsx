import React from 'react'

const Pagination = ({currentPage,setCurrentPage,nPages}: any)  => {
    // generate an array containing all the page numbers from 1 to nPages 
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    console.log(pageNumbers);

    const gotToPrev = () =>{
        if(currentPage!==1){
            setCurrentPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if(currentPage !== nPages){
            setCurrentPage(currentPage + 1);
        }
    }
  return (
    <nav className=' flex justify-center'>
        <ul className='justify-center min-w-[15rem] flex gap-[2rem] '>
            <li>
                    <a onClick={gotToPrev} className="hover:cursor-pointer">
                        Prev
                    </a>
            </li>
            
            { pageNumbers.map(num => {
                
                return (
                <li className="hover:cursor-pointer hover:underline p-[0.1rem] rounded-3xl" key={num} style={{
                    background: currentPage== num ? "#E2DDBF" : "inherit"
                }}>
                    <a onClick={()=>
                    {setCurrentPage(num) 
                        console.log(num)}}>
                        {num}
                    </a>
                </li>
                )
            })
            }
            <a onClick={goToNextPage} className="hover:cursor-pointer">
                    next
            </a>
        </ul>
    </nav>
  )
}

export default Pagination
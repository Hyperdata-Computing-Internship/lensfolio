import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  const [page, setpage] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=100`)
    setdata(response.data)
  }
  let printuserdata = "Laoding"
  if (data.length > 0) {
    printuserdata = data.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  useEffect(() => {
    getdata();
  }, [page])






  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button
        onClick={() => {
          getdata()
        }}
        className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'
      >
        Get data
      </button> */}

      {/* data displlay */}

      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>

      {/* pagination buttons */}

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style={{ opacity: page == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if(page>1){
              setpage(page-1)
              setdata([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {page}</h4>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setpage(page+1)
            setdata([])
          }}
        >
          Next
        </button>
      </div>




    </div>
  )
}

export default App
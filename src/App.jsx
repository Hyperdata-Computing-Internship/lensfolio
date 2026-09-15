import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    setdata(response.data)
  }
  let printuserdata = "no data to display"
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






  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
        onClick={() => {
          getdata()
        }}
        className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'
      >
        Get data
      </button>

      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>
    </div>
  )
}

export default App
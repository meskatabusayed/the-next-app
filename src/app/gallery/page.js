import Image from 'next/image';
import React from 'react'

const GalleryPage = () => {
  return (
    <div>
      <h1 className='text-2xl text-center'>This is Gallery page</h1>
      <Image width={200} height={200} src="https://img.freepik.com/free-photo/view-3d-car_23-2150796894.jpg?t=st=1725518751~exp=1725522351~hmac=0821a4dbb9dd2255c79dd4e369c6da8b70aa7cf25533bf687c59c07cc1ea62ff&w=740" alt="image">

      </Image>
    </div>
  )
}

export default GalleryPage;

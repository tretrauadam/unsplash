import {useState, useEffect} from 'react';
import Image from './image';


export default function GetImages(){

    const[images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=_PhUqsjLlCRO6sLGQfy-OttIKWPwdE-v6UP7J51B1UU`)
            const data = await response.json()
            setImages(data)
            console.log(data)

        }

        fetchImages()
    }, [])
    return(
        <>
          {!images ? <h2 className='flex items-center justify-center h-screen text-center text-3xl text-slate-800' >Loading... </h2> : 
          <section className='px-5 max-w-7xl mx-auto'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-16 capitalize'> Search for a picture  </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => (
                    <Image key={image.id} {...images} /> 
                ))}
            </div>

          </section>
         }
        </>
    )
}
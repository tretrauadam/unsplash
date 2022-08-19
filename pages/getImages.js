import {useState, useEffect} from 'react';


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
          {!images ? <h2> Loading</h2> : 
          <section>
            <h1> Recommended for you </h1>

            <div>
                {images.map((image, index) => (
                    <Image key={image.id} {...images} /> 
                ))}
            </div>

          </section>
         }
        </>
    )
}
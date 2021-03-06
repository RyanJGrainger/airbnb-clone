import Image from 'next/image'



function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

            {/* <Image 
                src="https://links.papareact.com/0fm" 
                layout="fill" 
                objectFit="cover" /> */}

                <video class="object-cover h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full"     
                    src="video3.mp4"
                    autoPlay
                    muted 
                    playsInline
                    loop />

                

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white ">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
                active:scale-90 transition duration-150">I'm flexiable</button>
            </div>
        </div>


    )
}

export default Banner

import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrl from "@/lib/getbase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Footer from "./Footer";
type Props={
    topic?: string|undefined
    page?: string|undefined
}
export default async function Gallery({topic ="cars",page}:Props){

    const urlf=!page?"":`&page=${page}`
    const url=`https://api.pexels.com/v1/search?query=${topic}`+urlf

    const images:ImagesResults | undefined = await fetchImages(url)


    if (!images || images.per_page===0) return <h2 className="m-4 text-2xl font-bold">No images Found</h2>
    const photosWithBlur= await addBlurredDataUrl(images)

    const footerprops= {topic,page}

    return (<>
        <section className="px-1 my-3 gap-y-2  grid  grid-cols-gallery auto-row-[10px]">
            {photosWithBlur.map(photo=>(
                <ImgContainer  key ={photo.id} photo={photo}/>
                ))}
        </section>
        <Footer {...footerprops}></Footer>
                </>
    )
}
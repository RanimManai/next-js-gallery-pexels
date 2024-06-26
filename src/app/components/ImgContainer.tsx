import Image from "next/image";
import type { Photo } from "@/models/Images";
type Props={
    photo: Photo
}
export default function ImgContainer({photo}:Props){
    const widthHeightRatio= photo.height/photo.width
    const galleryHeight= Math.ceil(250*widthHeightRatio)
    const photoSpans= Math.ceil(galleryHeight/10)+1 
    return(
        <div  className="w-[250px] justify-self-center " style={{gridRow:`span ${photoSpans}`}}>
            <div className="rounded-xl overflow-hidden group">
            <Image src={photo.src.large} alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            className="group-hover:opacity-60"/>
            </div>
        </div>
    )
}

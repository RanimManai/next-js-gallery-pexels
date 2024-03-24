import { link } from "fs";
import next from "next";
import Link from "next/link";
type Props={
    topic:string,
    page:string|undefined,
}
function style(i:string|undefined,x:string){
    if (!i||i==undefined){
        i="1"
    }
    return i==x?"p-2 px-3 border border-slate-800 text-gray-500 hover:cursor-default":"p-2 px-3 border border-slate-600 hover:cursor-pointer"
}
export default function Footer({topic,page="1"}:Props){

    
    

    return (
    <footer >
        <br />
        <div className="flex justify-center mr-12 font-semibold">
        {((page=="1"))?<p className="p-2 border border-slate-600 rounded-l hover:cursor-pointer" >&lt;</p>:<Link href={`/results/${topic}/${parseInt(page)-1}`} className="p-2 border border-slate-600 rounded-l hover:cursor-pointer">&lt;</Link>}
        {(page=="1")?<p className={style(page,"1")} >1</p>:<Link href={`/results/${topic}/1`} className={style(page,"1")}>1</Link>}
        {(page=="2")?<p className={style(page,"2")} >2</p>:<Link href={`/results/${topic}/2`} className={style(page,"2")}>2</Link>}
        {(page=="3")?<p className={style(page,"3")} >3</p>:<Link href={`/results/${topic}/3`} className={style(page,"3")}>3</Link>}
        {((page=="3"))?<p className="p-2 border border-slate-600 rounded-l hover:cursor-pointer" >&gt;</p>:<Link href={`/results/${topic}/${parseInt(page)+1}`} className="p-2 border border-slate-600 rounded-l hover:cursor-pointer">&gt;</Link>}
    </div>
    <br />
    </footer>
)
}

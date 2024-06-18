export function Loading() {
 return (
  <div className="w-[288px] animate-pulse rounded shadow-xl border-[1px] border-zinc-700/20">
   <div className="bg-zinc-700/10 rounded w-full h-[168px]"></div>
   <section className="flex flex-col gap-3">
    <div>
     <div className="bg-zinc-700/10 rounded h-4 w-16"></div>
     <div className="bg-zinc-700/10 rounded h-4 w-16"></div>
    </div>
   </section>
  </div>
 )
}
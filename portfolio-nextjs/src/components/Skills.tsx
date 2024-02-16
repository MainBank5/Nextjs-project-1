import Image from "next/image"

export default function Skills() {
  return (
    <div id='skills'>
       <div>
          <div>
            <h2>Tools I Work With</h2>
            <div>
           <Image src="/javascript.png" alt="javascript." width={80} height={80} /> 
           <Image src="/typescript-icon.png" alt="javascript." width={80} height={80} /> 
           <Image src="/react.png" alt="javascript." width={80} height={80} /> 
           <Image src="/nextjs.png" alt="javascript." width={80} height={80} /> 
              
            </div>
          </div>
       </div>
    </div>
      
  )
}

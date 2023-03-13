// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
            <div>
            <Image src="/a.jpg" width={128} height={77}/>
            {/* <h1 className='logo'>folly</h1> */}
            </div>

        <div>
          <ol style={{display:"flex",gap:"10px"}}>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/service"><li>Service</li> </Link>
        <Link href="/contact"><li>Contact</li></Link>
        </ol>
        </div>
         
         
         
    </nav>
  )
}

export default Navbar

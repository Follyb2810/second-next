import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
const NotFound= () => {
 const router = useRouter
  useEffect(()=>{
      setTimeout(()=>{
        router.push("/")
      },3000)
  },[])
  return (
    <div className="not-found">
      <h1>oooooops</h1>
      <h2>that page not found</h2>
      <p>go back <Link href="/"><span>Home</span></Link></p>
    </div>
  )
}

export default NotFound

import Link from "next/link"
import style from "../../styles/folly.module.css"
export const getStaticProps =async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    const data = await res.json()
    // console.log(res)
    return{
        props:{user:data}
    }
    
}

const Folly = ({user}) => {
    return (
        <div>
            <h1>All user</h1>
            {
                user.map(user=>(
                    <Link href={'/folly/'+ user.id} key={user.id} >
                        <span className={style.single}>{user.name}</span>
                    </Link>
                ))
            }
        </div>
      ); 
}
 
export default Folly;
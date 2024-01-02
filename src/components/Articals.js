import React, { useEffect, useState } from 'react'

import SkeletonArticle from '../Skeletons/SkeletonArticle'

const Articals = () => {

     const [articles, setArticles]=useState(null)

     useEffect(()=>{
          
          setTimeout( async()=>{

               const res = await fetch('https://jsonplaceholder.typicode.com/posts');
               const data = await res.json();
               setArticles(data);
          },5000)
     },[])


  return (
    <div className='Articles'>
      <h2>Article</h2>

      
     
      {articles && articles.map( article=>(
          <div className="article" key={article.id}>
               {/* <h1>{article.id}</h1> */}
               <h3>{article.title}</h3>
               <p>{article.body}</p>
          </div>
      ))}

      {!articles && [1,2,3,4,5].map((n)=><SkeletonArticle key={n} theme="light"/>) }
    </div>
  )
}

export default Articals

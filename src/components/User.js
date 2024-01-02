import React, { useEffect, useState } from 'react'
import SkeletonUser from '../Skeletons/SkeletonUser';

const User = () => {

    const [profile, setProfile]= useState(null);

    useEffect(()=>{
      setTimeout(async()=>{
         const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
         const data = await res.json();
         setProfile(data);
      },5000)
    })

// useEffect(() => {
//      const fetchData = async () => {
//        try {
//          const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//          const data = await res.json();
//          setProfile(data);
//        } catch (error) {
         
//          console.error('Error fetching data:', error);
//        }
//      };
   
//      fetchData(); 
//    }, []);

  return (
    <div className='user'>
      <h2>User Details</h2>
      {profile && (
          <div className='profile'>
               <h3>{profile.username}</h3>
               <p>{profile.email}</p>
               <p>{profile.website}</p>
          </div>
      )}

      {!profile && (
          <SkeletonUser theme="dark"/>
      )}
    </div>
  )
}

export default User

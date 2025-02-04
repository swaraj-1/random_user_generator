import React, { useEffect, useState } from "react";
import { getPosts, getRandomUser } from "./api";
import PostCard from "./components/PostCard";
import "./App.css";
import UserCard from "./components/UserCard";





const App = () => {
  const[data, setData] = useState(null);
  const[userData, setUserData] = useState(null);
  const[refresh, setRefresh] = useState(true);
  
  useEffect(()=>{
    getPosts().then((posts) => setData(posts))
  },[])

  useEffect(()=> {
    getRandomUser().then(user=> setUserData(user.results[0]))
  },[refresh])

  return (
    <div className="App">
      <h3>Random User Generator</h3>
    {userData && <UserCard data={userData} />}
    <button onClick={()=> setRefresh(!refresh)} className='refresh-button'>Reresh</button>
    
    <h3>Posts</h3>
      {
        data ? data.map(e => <PostCard title={e.title} body={e.body} /> ) : <p>no data</p>
      }
   

    </div>
  );
};

export default App;
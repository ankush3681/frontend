import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Posts = () => {
  const [data,setData] = useState([]);
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [device,setDevice] = useState("");
  

  const getData = () =>{
     axios({
      method:"get",
      url:"https://colorful-poncho-mite.cyclic.app/posts/",
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
     }).then((res)=>{
      setData(res.data);
     }).catch((err)=>{
      console.log(err);
     })
  }

  const handleDelete  = ( id) =>{
    axios({
      method:"delete",
      "url":`https://colorful-poncho-mite.cyclic.app/posts/delete/${id}`,
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res)=>{
      console.log(res);
      alert("Post deleted successfully");
      getData();
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <h1>Add New Post</h1>
      <div>
      <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter device"
          value={device}
          required
          onChange={(e) => setDevice(e.target.value)}
        />
        <button>Submit </button>
      </div>
      <br /><hr /><br />
      <div>
        <h1>All Post</h1>
        <div>
          {
            data.length>0 && data.map((item)=>{
              return <div key={item._id}>
                     <p>Title:{item.title}</p>
                     <p>Body:{item.body}</p>
                     <p>Devise:{item.device}</p>
                     <button>Edit </button>
                     <button onClick={()=>handleDelete(item._id)}>Delete</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Posts

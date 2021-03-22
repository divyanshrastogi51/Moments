import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../api';
import '../App.css'
const Testform = () => {
  const [data, setData] = useState([])
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  useEffect(() => {

    const fetchposts = async () => {
      const res = await fetchPosts();
      setData(res.data);
    }
    fetchposts();
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const payload = { fname, lname };
    await createPost(payload);
    setFname('');
    setLname('');
  };


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
        <input
            type="text"
            value={fname}
            onChange={e => setFname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
        <input
            type="text"
            value={lname}
            onChange={e => setLname(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h3>Past Data</h3>
        {data.map((name, index) => (
          <p> {name.fname}  {name.lname}</p>
        ))}
      </div>
    </div>
  )
};

export default Testform;

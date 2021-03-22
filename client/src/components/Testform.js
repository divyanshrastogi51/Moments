import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../api';

const Testform = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  useEffect(() => {

    const fetchposts = async () => {
      const res = await fetchPosts();
      console.log(res.data)
    }
    fetchposts();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${fname}`);
    const payload = { fname, lname }
    const res = await createPost(payload);
    console.log(res.data);
  };

  return (
    <div>
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
  );
    </div>
  )
};

export default Testform

import React, { useState } from 'react';
import { createPost } from './api';

const Testform = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

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
          Frirst Name:
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

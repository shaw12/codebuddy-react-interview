import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://codebuddy.review/signup')
      .then(response => response.json())
      .then(val => setData(val));
  }, []);

  console.log(data);

  return (
    <div>
      <div>List your posts</div>
      {/* {data && data.data && data.data.map(val => <div>hiii hjh</div>)} */}
    </div>
  );
};

export default Posts;

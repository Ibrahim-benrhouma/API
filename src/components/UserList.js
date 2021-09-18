import React, { Component ,useState,useEffect }  from 'react';
import axios from 'axios';
import UserCard from './userCard';

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setlistOfUSer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
<div className="container"  style={{flexWrap:"wrap " ,display:"flex"}}>
        {listOfUSer.map((user) => (
            <div className="col-md-3 mx-30 ">
              <UserCard key={user.id} user={user}/>
            </div>
        ))}
      </div>

    </>
  );
};

export default UserList;

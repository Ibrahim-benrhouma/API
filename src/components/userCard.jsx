import React, { Components } from 'react';

const  UserCard = ({user}) => {
 
    return ( <>
    <div className="card mt-20" >
  <div className="avatar">
    <img width="100px" src={"https://www.bootdey.com/img/Content/avatar/avatar"+ Math.floor(Math.random() * 9)+".png"}/>
  </div>
  <div className="title">
      {console.log(user)}
    <h2>{user.name}</h2>
  </div>
  <div className="description">
  {user.email}
  </div>
  <div className="social">
    <ul>
      <li><i className="fab fa-facebook"></i></li>
      <li><i className="fab fa-twitter"></i></li>
      <li><i className="fab fa-github"></i></li>
      <li><i className="fab fa-dev"></i></li>
      <li><i className="fas fa-link"></i></li>
    </ul>
  </div>
</div>


    </> );
}
 
export default  UserCard;
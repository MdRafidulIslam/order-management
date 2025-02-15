import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDeleteUser=id=>{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${id}`,{
                method:'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your order has been deleted.",
                    icon: "success",
                  });
                  const remainingUsers=users.filter(us=>us._id !== id);
                  setUsers(remainingUsers);
                }
              });
          }
        });
  }
  return (
    <div>
      <h2 className="text-5xl text-center text-purple-400 mt-8 mb-8">Total Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
         {
            users.map(user =><tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                   
                    <button 
                    onClick={()=>handleDeleteUser(user._id)}
                    className="btn btn-error">X</button>
                </td>
              </tr>
            )
         }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

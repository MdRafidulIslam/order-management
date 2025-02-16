import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OrderTable = ({ order,orders,setOrders }) => {
  const { _id, name, cname, quantity, jobid, orderno, amount, place } = order;
  console.log(order);
  const handledelete = (_id) => {
    console.log(_id);
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
        fetch(`https://crud-operation-server-jet.vercel.app/order/${_id}`,{
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
              const remaining=orders.filter(ord=>ord._id !== _id);
              setOrders(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{cname}</td>
      <td>{quantity}</td>
      <td>{place}</td>
      <td>
        <Link to={`updateorder/${_id}`}> <button className="btn btn-success">Edit</button></Link>
       
      </td>

      <td>
        <button className="btn btn-error" onClick={() => handledelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;

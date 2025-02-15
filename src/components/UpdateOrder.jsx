import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateOrder = () => {
    const order=useLoaderData();
    const { _id, name, cname, quantity, jobid, orderno, amount, place } = order;
      let [location, setLocation] = useState("");
      const handleLocationkalarphul = () => {
        setLocation("Kalarphul");
      };
    
      const handleLocationbaizid = () => {
        setLocation("Baizid");
      };
    
      const handleLocationkalaurghat = () => {
        setLocation("Kalaurghat");
      };
      const handleUpdateOrder = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const cname = form.cname.value;
        const quantity = form.quantity.value;
        const jobid = form.jobid.value;
        const orderno = form.orderno.value;
        const amount = form.amount.value;
        let place = location;
        const updateOrder = { name, cname, quantity, jobid, orderno, amount, place };
        console.log(updateOrder);
    
        fetch(`http://localhost:5000/order/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateOrder),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount>0) {
              Swal.fire({
                title: "Success!",
                text: "Updated Order successfully",
                icon: "success",
                confirmButtonText: "updated",
              });
            }
          });
      };

    return (
        <div className="bg-[#F4F3F0] p-32">
        <h2 className="text-3xl font-extrabold">Update order : {name}</h2>
        <form onSubmit={handleUpdateOrder}>
          {/* {name and company name row} */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Order Name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="enter order name"
                className="input input-bordered w-full text-white text-xl"
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <div className="label">
                <span className="label-text">Company Name</span>
              </div>
              <select
                type="text"
                name="cname"
                defaultValue={cname}
                className="select select-bordered text-white text-xl"
              >
                <option disabled selected>
                  --select company--
                </option>
                <option>ABC company</option>
                <option>Four H</option>
                <option>RS textile</option>
                <option>Avenger Textile</option>
              </select>
            </div>
          </div>
          {/* {job id and order no row} */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Job Id</span>
              </div>
              <input
                type="text"
                name="jobid"
                defaultValue={jobid}
                placeholder="enter Job id"
                className="input input-bordered w-full text-white text-xl"
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <div className="label">
                <span className="label-text">Order No</span>
              </div>
              <input
                type="text"
                name="orderno"
                defaultValue={orderno}
                placeholder="enter order no here"
                className="input input-bordered w-full text-white text-xl"
              />
            </div>
          </div>
          {/* {amount and Available Quantity row} */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Amount</span>
              </div>
              <input
                type="text"
                name="amount"
                defaultValue={amount}
                placeholder="enter amount"
                className="input input-bordered w-full text-white text-xl"
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="enter quantity here"
                className="input input-bordered w-full text-white text-xl"
              />
            </div>
          </div>
  
          <fieldset className="md:flex mb-8">
            <div className="label">
              <span className="label-text text-xl text-black">
                --Select Location--
              </span>
            </div>
            <div className="md:flex ">
              <div className="form-control ml-4 ">
                <label
                  className="label cursor-pointer"
                  for="kalarphul"
                  onClick={handleLocationkalarphul}
                >
                   
                  <input
                    type="radio"
                    className="radio radio-md"
                    name="kala"
                    
                    id="kalarphul"
                  />
                  <span className="label-text text-xl text-black ml-4">
                    Kalarphul
                  </span>
                </label>
              </div>
              <div className="form-control ml-4">
                <label
                  className="label cursor-pointer"
                  for="baizid"
                  onClick={handleLocationbaizid}
                >
                  <input
                    type="radio"
                    className="radio radio-md"
                    name="kala"
                    id="baizid"
                    setLocation="Baizid"
                  />
                  <span className="label-text text-xl text-black ml-4">
                    Baizid
                  </span>
                </label>
              </div>
              <div className="form-control ml-4">
                <label
                  className="label cursor-pointer"
                  for="kalurghat"
                  onClick={handleLocationkalaurghat}
                >
                  <input
                    type="radio"
                    className="radio radio-md"
                    name="kala"
                   
                    id="kalurghat"
                  />
                  <span className="label-text text-xl text-black ml-4">
                    Kalurghat
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
          <input
            type="submit"
            value="Update Order"
            className="btn btn-block text-white"
          />
        </form>
      </div>
    );
};

export default UpdateOrder;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddOrder = () => {
  const router=useNavigate();
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
  const handleAddOrder = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const cname = form.cname.value;
    const quantity = form.quantity.value;
    const jobid = form.jobid.value;
    const orderno = form.orderno.value;
    const amount = form.amount.value;
    let place = location;
    const addOrder = { name, cname, quantity, jobid, orderno, amount, place };
    console.log(addOrder);

    fetch("https://crud-operation-server-jet.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "order added successfully",
            icon: "success",
            confirmButtonText: "Added",
          });
          router('/');
        }
        
      });
  };
  return (
    <div className="bg-slate-400 p-32">
      <h2 className="text-3xl font-extrabold text-white">Add a order</h2>
      <form onSubmit={handleAddOrder}>
        {/* {name and company name row} */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-white">Order Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="enter order name"
              className="input input-bordered w-full text-xl"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-white">Company Name</span>
            </div>
            <select
              type="text"
              name="cname"
              className="select select-bordered text-xl"
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
              <span className="label-text text-white">Job Id</span>
            </div>
            <input
              type="text"
              name="jobid"
              placeholder="enter Job id"
              className="input input-bordered w-full text-xl"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-white">Order No</span>
            </div>
            <input
              type="text"
              name="orderno"
              placeholder="enter order no here"
              className="input input-bordered w-full  text-xl"
            />
          </div>
        </div>
        {/* {amount and Available Quantity row} */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-white">Amount</span>
            </div>
            <input
              type="text"
              name="amount"
              placeholder="enter amount"
              className="input input-bordered w-full text-xl"
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-white">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="enter quantity here"
              className="input input-bordered w-full  text-xl"
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
          value="Add Order"
          className="btn btn-block btn-success text-white"
        />
      </form>
    </div>
  );
};

export default AddOrder;

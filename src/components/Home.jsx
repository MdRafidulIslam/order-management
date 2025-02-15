import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import OrderTable from "./OrderTable";

const Home = () => {
    const loadedOrders = useLoaderData();
  const [orders, setOrders] = useState(loadedOrders);
    return (
        <>
        <h1 className="text-5xl text-center text-purple-400 mt-8 mb-8">
          Total Order List : {orders.length} {orders.name}
        </h1>
        <div className="overflow-x-auto  p-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Quantity</th>
                <th>place</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
  
              {orders.map((order) => (
                <OrderTable
                  key={order._id}
                  order={order}
                  orders={orders}
                  setOrders={setOrders}
                ></OrderTable>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Home;
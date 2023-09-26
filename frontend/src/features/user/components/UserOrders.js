import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserOrders,
} from "../userSlice";
import { discountedPrice } from "../../../app/constants";

export default function UserOrders() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(userInfo.id));
  }, [dispatch, userInfo]);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <div>
            <div className="mx-auto sm:mt-5 bg-white max-w-7xl px-4 sm:px-6 lg:px-8 ">
              <h1 className="mx-auto text-4xl font-bold text-green-500 sm:px-6 mt-1">
                My Orders
              </h1>
              <div className="border-t border-gray-200 px-4  py-2 sm:py-3 sm:px-8 px-6">
                <h1 className=" text-xl sm:text-4xl my-5 font-bold tracking-tight text-gray-900">
                  Order # {order.id}
                </h1>
                <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                  Order Status : {order.status}
                </h3>
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.product.id}>
                                  {item.product.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${discountedPrice(item.product)}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty :{item.quantity}
                              </label>
                            </div>

                            <div className="flex"></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹ {order.totalAmount}</p>
                </div>
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>{order.totalItems} items</p>
                </div>
                <p className="mt-0.5 mb-3 text-sm text-gray-500">
                  Shipping Address :
                </p>
                <div className="flex flex-col gap-y-3 gap-x-6 px-3 sm:px-13 py-5 border-solid border-2 border-gray-200 sm:flex-row sm:items-center">
                  <div className="flex-auto">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      {order.selectedAddress.name}
                    </p>
                    <p className="mt-1 truncate text-xs sm:text-sm leading-5 text-gray-500">
                      {order.selectedAddress.street}
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                      {order.selectedAddress.pinCode}
                    </p>
                  </div>
                  <div className="flex flex-col  sm:gap-x-3">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

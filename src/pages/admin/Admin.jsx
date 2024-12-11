import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, saveUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);
  const deleteUsers = (id) => {
    dispatch(deleteUser(id));
  };

  const updateUsers = (data) => {
    dispatch(saveUser(data));
    navigate("/");
  };

  console.log(users);
  const userData = users.map((item) => (
    <div
      key={item.id || item.email}
      className="bg-[#1D2D43] text-white p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 h-auto w-auto"
    >
      <div className="h-[100px] w-[100px] bg-gradient-to-br from-[#00BFFF] to-[#008CBA] rounded-full mx-auto flex items-center justify-center mb-4">
        <span className="text-3xl font-bold text-white">
          {item?.username.charAt(0)}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-center mb-2">{item?.username}</h2>
      <p className="text-center text-[#00BFFF] mb-4 break-words text-md">
        {item?.email}
      </p>
      <p className="text-center text-gray-400">Password: {item?.password}</p>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => deleteUsers(item?.id)}
          className="py-1 px-6 border-none bg-red-600 rounded-xl hover:opacity-80"
        >
          Delete
        </button>
        <button
          onClick={() => updateUsers(item)}
          className="py-1 px-6 border-none bg-blue-600 rounded-xl hover:opacity-80"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-10 min-h-[75vh]">
      <h1 className="text-4xl font-bold text-center text-[#00BFFF] mb-10">
        User Cards
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-sm:grid-cols-1">
        {userData}
      </div>
    </div>
  );
};

export default Admin;

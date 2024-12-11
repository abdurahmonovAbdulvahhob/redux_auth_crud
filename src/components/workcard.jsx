import React from "react";

const WorkCard = ({ rm, edit, data }) => {
  return (
    <div className="p-4 border shadow-xl rounded-lg">
      <img
        src={
          data?.image ||
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        }
        className="w-full h-[180px] object-cover rounded-md"
        alt="card-image"
      />
      <h3 className="my-2 text-xl font-semibold uppercase">{data?.title}</h3>
      <p className="text-gray-500 mb-3">{data?.info}</p>
      <div className="flex gap-x-2">
        <button
          onClick={() => edit(data)}
          className="py-1 px-3 rounded-lg bg-blue-600 text-white outline-none border-none"
        >
          Edit
        </button>
        <button
          onClick={() => rm(data?.id)}
          className="py-1 px-3 rounded-lg bg-red-600 text-white outline-none border-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkCard;

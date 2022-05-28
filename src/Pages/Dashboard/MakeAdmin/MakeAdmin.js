import React from "react";
import { useQuery } from "react-query";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("/users", () =>
    fetch("https://rocky-waters-62906.herokuapp.com/alluser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }
  return (
    <div>
      <h2 className="my-5 text-center text-5xl  text-primary">Admin</h2>
      <div className="overflow-x-auto my-10 mx-5">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center text-blue-600">
              <th>No</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <AdminRow key={user._id} index={index} user={user} refetch={refetch}></AdminRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;

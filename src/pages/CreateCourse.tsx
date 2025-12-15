import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";  // axios instance
import useAuth from "../context/AuthContext";
import { Button } from "@/components/ui/button";

const CreateCourse: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState("");


  if (!user || !["admin", "instructor"].includes(user.role)) {
    alert("Access Denied: You do not have permission to create a course.:" + user?.role);
    return <h2 className="text-center text-red-600 mt-10">Access Denied</h2>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/courses/create", {
        title,
        description,
        price,
        duration,
      });

      setMessage("Course created successfully!");
      setTitle("");
      setDescription("");
      setPrice(0);
      setDuration("");
    } catch (err: any) {
      setMessage("Error creating course");
      console.error(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Create New Course</h2>

      {message && <p className="text-blue-600 mb-3">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 text-black border rounded"
          required
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 text-black border rounded"
          required
        />

        <input
          type="number"
          placeholder="Course Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 text-black border rounded"
          required
        />

         <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 text-black border rounded"
          required
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Course
        </button>
      </form>

      <Button variant="outline" onClick={handleLogout}>
            Logout
      </Button>
    </div>
  );
};

export default CreateCourse;

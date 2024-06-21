import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function WriteBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://crudcrud.com/api/ea3bb3d113a04cb0af45fdd57e432b54/posts", {
        author: data.Firstname,
        title: data.Email,
        content: data.Juhi,
      })
      .then((response) => console.log(response.data));
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("Firstname", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea {...register("Juhi", {})} />

      <input type="submit" />
    </form>
  );
}

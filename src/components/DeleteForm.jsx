"use client";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import { deleteTask } from "@/utils/actions";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        "DELETE"
      )}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" value={id} name="id" />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;

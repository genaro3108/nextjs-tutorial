"use client";
import React, { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please Wait..." : "Create Task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
    } else if (state.message === "success") {
      toast.success("Sucess");
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
          defaultValue={""}
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;

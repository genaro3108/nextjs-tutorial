import { updateTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form
      className="max-w-sm p-12 border border-base-300 rounded-lg mt-10"
      action={updateTask}
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        defaultValue={content}
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditForm;

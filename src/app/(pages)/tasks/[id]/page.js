import React from "react";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const TaskPage = async ({ params }) => {
  const { id } = params;
  const task = await getTask(id);

  return (
    <div className="mb-16">
      <Link href="/tasks" className="btn btn-accent">
        Back
      </Link>
      <EditForm task={task} />
    </div>
  );
};

export default TaskPage;

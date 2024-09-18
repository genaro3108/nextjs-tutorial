import React from "react";
import prisma from "@/utils/db";
export const dynamic = "force-dynamic";
const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "Wake up",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();

  if (!tasks?.length)
    return <h2 className="mt-8 font-medium text-lg">No found tasks</h2>;

  return (
    <div>
      <h1>Prisma Example</h1>
      {tasks.map((task) => (
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  );
};

export default PrismaExamplePage;

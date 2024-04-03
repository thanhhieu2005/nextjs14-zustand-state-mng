"use client";

import { useTaskStore } from "@/lib/store";
import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";

const NewTaskDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(!openDialog);
  };

  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);

    if (typeof title !== "string" || typeof description !== "string") return;

    addTask(title, description);

    setOpenDialog(false);
  };

  return (
    <div>
      <button
        className="block text-black bg-white hover:bg-gray-300 focus:ring-gray-600 focus:outline-none font-serif font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        onClick={handleOpen}
      >
        Add New Task
      </button>

      {openDialog && (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 z-40 backdrop-blur" />
          <div
            aria-hidden="true"
            className="fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-gray-700 rounded-lg shadow">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add New Todo Task
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={handleOpen}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 w-full">
                  <form
                    id="todo-form"
                    className="grid gap-4 py-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid items-center gap-4">
                      <Input
                        id="title"
                        name="title"
                        placeholder="Todo title..."
                        className="col-span-4 w-full"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Description..."
                        className="col-span-4"
                      />
                    </div>
                  </form>
                </div>
                {/* Modal footer */}
                <div className="p-4 md:p-5 w-full flex justify-end">
                  <button
                    className="text-black bg-white hover:bg-gray-300 focus:ring-gray-600 focus:outline-none font-serif font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                    form="todo-form"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewTaskDialog;

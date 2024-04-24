import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useApplication from "../../hooks/useApplication";
import usePublicAxios from "../../hooks/usePublicAxios";
import AddTaskModal from "../modal/AddTaskModal";
import EditTaskModal from "../modal/EditTaskModal";
import SearchForm from "./Search";
import THead from "./THead";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const publicAxios = usePublicAxios();
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddShowModal] = useState(false);
  const [findTask, setfindTask] = useState(false);
  const [application, refetch] = useApplication();
  // console.log(applicatios[0]);

  const handleEditTask = async (id) => {
    // console.log(id);
    const findTask = await application?.find((task) => task?._id == id);
    // console.log(findTask);
    setfindTask(findTask);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const res = await publicAxios.delete(`/application/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Task Deleted Successfully.",
          icon: "success",
        });
        refetch();
      }
    }
  };

  const handleStatusTask = async (id) => {
    // console.log(id);
    const res = await publicAxios.patch(`/application/status/${id}`);
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Task Completed Successfully.");
      setShowModal(false);
      refetch();
    }
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <EditTaskModal
          handleEditTask={handleEditTask}
          findTask={findTask}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
          refetch={refetch}
        />
      )}
      {addModal && (
        <AddTaskModal
          onClose={() => setAddShowModal(false)}
          refetch={refetch}
          setAddShowModal={setAddShowModal}
        />
      )}

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchForm />
              <button
                onClick={() => setAddShowModal(true)}
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <THead />
              <tbody>
                {application?.length > 0 &&
                  application?.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      handleDelete={handleDelete}
                      handleEditTask={handleEditTask}
                      handleStatusTask={handleStatusTask}
                    />
                  ))}
              </tbody>
            </table>
            {application?.length < 1 && (
              <div className="flex flex-col gap-10 justify-end items-center  ">
                <img
                  className="h-[500px] w-[500px]"
                  src="/assets/Empty.png"
                  alt=""
                />
                <p>Task List is empty!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;

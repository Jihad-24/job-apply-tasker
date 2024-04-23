/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import usePublicAxios from "../../hooks/usePublicAxios";

export default function AddTaskModal({ onClose, refetch, setAddShowModal }) {
  const axiosPublic = usePublicAxios();
  // setAddShowModal(true)
  const handleForm = async (e) => {
    e.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const tags = form.tags.value.split(",").map((tag) => tag.trim());
    const priority = form.priority.value;
    const status = 'ongoing';
    const newTask = {
      title,
      description,
      tags,
      priority,
      status
    };
    // console.log(newTask);
    const res = await axiosPublic.post(`/application`, newTask);
    // console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Task Added Successfully.");
      setAddShowModal(false);
      refetch();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4   ">
        <form
          onSubmit={handleForm}
          className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11  max-h-[90vh] overflow-y-auto"
        >
          <div className="space-y-2 lg:space-y-3 mt-10 ">
            <label htmlFor="title">Title</label>
            <input
              className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5`}
              type="text"
              name="title"
              id="title"
            />
          </div>

          <div className="space-y-2 lg:space-y-3 mt-10">
            <label htmlFor="description">Description</label>
            <textarea
              className={`block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5`}
              type="text"
              name="description"
              id="description"
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3 mt-10">
              <label htmlFor="tags">Tags</label>
              <input
                className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5`}
                type="text"
                name="tags"
                id="tags"
              />
            </div>

            <div className="space-y-2 lg:space-y-3 mt-10">
              <label htmlFor="priority">Priority</label>
              <select
                className={`block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5`}
                name="priority"
                id="priority"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="mt-16 flex gap-6 justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {" Create new Task"}
            </button>
            <button
              onClick={onClose}
              type="submit"
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

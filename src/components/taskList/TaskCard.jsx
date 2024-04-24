/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { StarFilledIcon } from "../../assets/icons/StarFilled";
import { StarIcon } from "../../assets/icons/Start";
import useApplication from "../../hooks/useApplication";
import usePublicAxios from "../../hooks/usePublicAxios";

const TaskCard = ({ task, handleDelete, handleEditTask, handleStatusTask }) => {
  const axiosPublic = usePublicAxios();
  const [application, refetch] = useApplication();
  const [showFull, setShowFull] = useState(false);

  const handleToggleFavorite = async (id) => {
    try {
      const taskToUpdate = application.find((task) => task._id === id);

      if (!taskToUpdate) {
        console.log("Task not found");
        return;
      }

      const updatedFavoriteStatus = !taskToUpdate.favorite;

      const res = await axiosPublic.patch(`/application/favorite/${id}`, {
        favorite: updatedFavoriteStatus,
      });

      if (res.data.modifiedCount > 0) {
        const updatedApplication = application.map((task) =>
          task._id === id ? { ...task, favorite: updatedFavoriteStatus } : task
        );

        refetch(updatedApplication);

        const message = updatedFavoriteStatus
          ? "Added to Favorites"
          : "Removed from Favorites";
        toast.success(`Task ${message} successfully.`);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // console.log(task);
  const bgColors = [
    "bg-[#00D991A1]",
    "bg-[#FE1A1AB5]",
    "bg-[#8407E6A8]",
    "bg-[#10FBEDB2]",
    "bg-[#2F43F8BF]",
    "bg-[#BD560BB2]",
  ];

  const getRandomColorClass = () => {
    // Randomly select an index from the bgColors array
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  const toggleDescription = () => {
    setShowFull(!showFull);
  };

  const truncatedDescription = task?.description
    .split(" ")
    .slice(0, 8)
    .join(" ");
  return (
    <>
      <tr
        key={task.id}
        className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
      >
        <td className="flex items-center justify-center text-center w-full">
          {task?.favorite == true ? (
            <StarFilledIcon
              className="cursor-pointer flex items-center justify-center text-center"
              onClick={() => handleToggleFavorite(task?._id)}
            />
          ) : (
            <StarIcon
              className="cursor-pointer flex items-center justify-center text-center"
              onClick={() => handleToggleFavorite(task?._id)}
            />
          )}
        </td>
        <td className="text-sm md:text-lg">{task?.title}</td>
        <td>
          <td className="text-sm md:text-lg">
            <div>
              {showFull ? task?.description : truncatedDescription}
              {task?.description.split(" ").length > 15 && (
                <span
                  onClick={toggleDescription}
                  className={`ml-1.5  cursor-pointer underline ${
                    showFull ? "text-blue-500" : "text-green-500"
                  } text-xs md:text-sm`}
                >
                  {showFull ? "Read Less..." : "Read More..."}
                </span>
              )}
            </div>
          </td>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {task?.tags?.map((tag, index) => (
              <li key={index}>
                <span
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] ${getRandomColorClass()}`}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          {/* {task?.tags} */}
        </td>
        <td className="text-center text-xs md:text-sm">{task?.priority}</td>
        <td className="text-center">
          {task?.status === "ongoing" ? (
            <div className="flex flex-col md:flex-row  items-center justify-center gap-3">
              <button
                onClick={() => handleEditTask(task?._id)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleStatusTask(task?._id)}
                className="text-green-500"
              >
                Complete
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleStatusTask(task?._id)}
              className="text-green-500"
            >
              Completed
            </button>
          )}
        </td>
        <td>
          {" "}
          <button
            className="text-red-500"
            onClick={() => handleDelete(task?._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TaskCard;

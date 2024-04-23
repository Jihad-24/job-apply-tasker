const THead = () => {
  return (
    <thead>
      <tr>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[300px]">
          {" "}
          Title{" "}
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[350px]">
          {" "}
          Description{" "}
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[350px]">
          {" "}
          Tags{" "}
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[100px]">
          {" "}
          Priority{" "}
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[200px]">
          {" "}
          Options{" "}
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full md:w-[100px]">
          {" "}
          Delete{" "}
        </th>
      </tr>
    </thead>
  );
};

export default THead;

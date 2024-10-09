export const resources = [
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
  { title: "Bible Plans" },
];

const Resources = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pt-4 pb-11 md:py-11">
      <h2 className="text-3xl mb-5">Resources</h2>
      <ul className="flex flex-col gap-4">
        {resources.map(resource => (
            <li className="rounded-md border p-3 hover:bg-gray-50 transition hover:cursor-pointer">
                {resource.title}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;

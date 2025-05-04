const IconButton = ({ icon, onClick, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      class={`text-blue-700 bg-white hover:bg-gray-100 focus:outline-none font-medium rounded-full text-sm p-2.5 outline-none border-none text-center inline-flex items-center me-2 dark:bg-gray-200 dark:hover:bg-gray-300 ${style}`}
    >{icon}<span class="sr-only">Back</span>
    </button>
  );
};

export default IconButton;

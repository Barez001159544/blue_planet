import "./IconButton.css";
const IconButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      class="text-blue-700 bg-white hover:bg-gray-100 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-200 dark:hover:bg-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="black"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>

      <span class="sr-only">Back</span>
    </button>
  );
};

export default IconButton;

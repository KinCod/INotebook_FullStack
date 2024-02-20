import React from "react";

function NoteItem(props) {
  const { notes } = props;

  console.log(notes);
  return (
    <>
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {notes.title}
          </h5>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {notes.description}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 active:shadow-none"
            type="button"
          >
            {notes.tag}
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteItem;

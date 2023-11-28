import { useState } from 'react';
import { IconButton,Chip,typography } from '@material-tailwind/react';
import index from '@/material_component/client_component';


const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    
     <>
     <div>
      <index.Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        // placeholder="Type and press Enter to add tags"
        label='Type and press Enter to add tags'
        className=""
      />
        
    <div className='border-solid border-2 border-[#b0bec5] p-[0.4rem] rounded-lg mt-11 h-64 overflow-auto'>

     <div className=" flex-wrap flex overflow-auto">
  
        {tags.map((tag, index) => (
        <div key={index} className="h-fit w-fit bg-[#ebf4ff] px-2 py-1 rounded-full flex items-center m-1">
          {/* <div className='w-fit'>{tag}</div> */}
          <typography>{tag}</typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => handleTagRemove(tag)}
            className="float-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
   
        </div>
      ))} 


    </div>
    </div>
    </div>
    </>

  );
};

export default TagInput;

























// import { useState } from 'react';

// const TagInput = () => {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputKeyPress = (e) => {
//     if (e.key === 'Enter' && inputValue.trim() !== '') {
//       setTags([...tags, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleTagRemove = (tagToRemove) => {
//     setTags(tags.filter((tag) => tag !== tagToRemove));
//   };

//   return (
//     <div className="flex flex-wrap gap-2">
//       {tags.map((tag) => (
//         <div key={tag} className="bg-blue-500 text-white px-2 py-1 rounded">
//           {tag}
//           <button
//             onClick={() => handleTagRemove(tag)}
//             className="ml-2 text-red-500"
//           >
//             x
//           </button>
//         </div>
//       ))}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyPress={handleInputKeyPress}
//         placeholder="Type and press Enter to add tags"
//         className="border p-2 rounded"
//       />
//     </div>
//   );
// };

// export default TagInput;

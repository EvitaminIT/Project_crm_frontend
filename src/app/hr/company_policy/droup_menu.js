import { useState } from 'react';
import { AddEditDialog } from './add_and_edit_dailoge';
import index from '@/material_component/client_component';

const Dropdown = ({
  policy_name,
  policy_detail,
  policy_file
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="relative inline-block text-left">
      <div>
      <index.IconButton  id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={toggleDropdown} className="bg-transparent shadow-none hover:shadow-none">
        <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </index.IconButton>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <AddEditDialog Policy_Name={policy_name} Policy_details={policy_detail} Policy_file={policy_file} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

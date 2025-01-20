 import { BsSearch } from "react-icons/bs";

const Search = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, value, placeholder, onChange, disabled } = props;
  return (
    <div className="rounded-[4px] lg:w-[300px] bg-[#FEFEFE] border border-[#D5D5D5] mr-1 px-3">
      <div className="flex items-center">
        <span className="mr-2 cursor-pointer">
          <BsSearch size={16} color="#667185" />
        </span>
        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="bg-[#FEFEFE] outline-none flex-1 text-black text-md rounded-[10px] focus:outline-none focus:ring-blue focus:border-blue placeholder-[#667185] disabled:cursor-not-allowed py-2 px- transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Search;

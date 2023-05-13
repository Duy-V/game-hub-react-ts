import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useInput from "../hooks/useInput";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 5000);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (debouncedInput) {
      onSearch(debouncedInput);
    }
  }, [debouncedInput]);
  console.log(debouncedInput);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // const ref = useRef<HTMLInputElement>(null);
  return (
    <form
    // onSubmit={(event) => {
    //   event.preventDefault();
    //   if (ref.current) onSearch(ref.current.value);
    // }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={handleInputChange}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

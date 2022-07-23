import Image from "next/image";
import React from "react";

import magnifyingGlass from "../assets/icon-search.svg";

function Searchbar({ placeholder }: { placeholder: string }) {
  return (
    <label className="flex items-center py-6.5 px-4 gap-4">
      <Image
        src={magnifyingGlass}
        width={18}
        height={18}
        alt="magnifying glass"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="font-light text-white outline-none bg-inherit placeholder:text-white placeholder:opacity-50"
      />
    </label>
  );
}

export default Searchbar;

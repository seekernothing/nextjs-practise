import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <div className=" border bg-red-600 p-10 m-10">
        The page you are trying to accesss does not exist
      </div>

      <div>
        <Link href={"/"}>
          <button className="bg-green-500 p-3 m-5">Go to homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;

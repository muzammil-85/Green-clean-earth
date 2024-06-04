"use client";
import Image from "next/image";
import ParticipantCard from "./card";
import Navigationbar from "@/components/navigationBar";
import Footer from "@/components/footer";

const participants = [
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":112345,
    "tree_name":"Areca Tree",
    "datetime":"12 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":454345,
    "tree_name":"Mango Tree",
    "datetime":"22 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":978667,
    "tree_name":"Jackfruit Tree",
    "datetime":"29 March 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":112345,
    "tree_name":"Areca Tree",
    "datetime":"12 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":454345,
    "tree_name":"Mango Tree",
    "datetime":"22 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":978667,
    "tree_name":"Jackfruit Tree",
    "datetime":"29 March 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":112345,
    "tree_name":"Areca Tree",
    "datetime":"12 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":454345,
    "tree_name":"Mango Tree",
    "datetime":"22 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":978667,
    "tree_name":"Jackfruit Tree",
    "datetime":"29 March 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":112345,
    "tree_name":"Areca Tree",
    "datetime":"12 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":454345,
    "tree_name":"Mango Tree",
    "datetime":"22 Dec 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":978667,
    "tree_name":"Jackfruit Tree",
    "datetime":"29 March 2024 07:10PM"
  },
  {
    "image":"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg",
    "tree_no":978667,
    "tree_name":"Jackfruit Tree",
    "datetime":"29 March 2024 07:10PM"
  },
]

export default function ParticipantList() {
  return (
    <div className="bg-green-50">
      <Navigationbar/>
      <div className="container mx-auto md:max-w-5xl mt-4">
        <h1 className="text-3xl my-4 font-bold mt-8">Participant List</h1>
        <div className="p-4 flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-3">
            {
              participants.map((participants,index)=>(
                <ParticipantCard participant={participants} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { baseUrl } from "@/app/api/status/route";


interface TreeDetails {
  name: string;
  image: string;
  description: string;
}

interface TreeDetailsCardProps {
  tree: TreeDetails;
}

const treeDetails = [
  { name: 'Mango Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },
  { name: 'Jackfruit Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },
  { name: 'Mango Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },
  { name: 'Jackfruit Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },
  { name: 'Mango Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },
  { name: 'Jackfruit Tree', image: 'https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg', description: 'Tree..' },

];


const TreeDetailsCard: React.FC<TreeDetailsCardProps> = ({ tree }) => {
  return (
    <div className="bg-white p-4 rounded-lg overflow-hidden border shadow transform transition-transform hover:border-green-600 hover:shadow-lg">
      <img className="w-full h-48 object-cover" src={tree.up_file} alt={tree.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{tree.up_tree_name}</h2>
        <p className="text-gray-600">{tree.up_date}</p>
      </div>
    </div>
  );
};





export default function MyUploadsTab() {
  const [upload, setUpload] = useState([]);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const header = { Authorization: `Bearer ${token}` }
        const response = await axios.get(`${baseUrl}/uploads/me`, 
        { headers: header }
      );
        const uploadData = response.data;
        console.log(uploadData.Uploads);
        setUpload(uploadData.Uploads);
        
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [token]);
    return (
        <div className="">
          <a
          href={`/upload-plant?id=${id}&token=${token}`}
          className="float-right place-items-center w-25 bg-green-100 text-green-600  py-2 px-4 my-2 border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white"
        >
          Upload Plant
        </a>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {upload ? (upload.map((tree, index) => (
              <TreeDetailsCard key={index} tree={tree} />
            ))) : "No Tree Details Found"}
    </div>
        </div>
    )
}
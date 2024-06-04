

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
      <img className="w-full h-48 object-cover" src={tree.image} alt={tree.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{tree.name}</h2>
        <p className="text-gray-600">{tree.description}</p>
      </div>
    </div>
  );
};





export default function MyUploadsTab() {
    return (
        <div className="">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {treeDetails.map((tree, index) => (
              <TreeDetailsCard key={index} tree={tree} />
            ))}
    </div>
        </div>
    )
}
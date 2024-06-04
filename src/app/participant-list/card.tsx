import Image from "next/image";

type Participant = {
  image: string,
  tree_no: number,
  tree_name: string,
  datetime: string
}

type ParticipantCardProps = {
  participant: Participant;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant })=>{
  return (
      <div className="bg-white flex flex-col items-start border shadow gap-3 p-4 m-4 text-sm">
        <div>
          <img src={participant.image} alt={"Image"} height={150}/>  
        </div>
        <div>
          <div className="text-sm text-gray-500">Tree number: </div>
          <div className="text-xl">{ participant.tree_no }</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Tree name: </div>
          <div className="text-xl">{ participant.tree_name }</div>
        </div>
        <div className="text-sm text-gray-500">{ participant.datetime }</div>
      </div>
  )
};

export default ParticipantCard;
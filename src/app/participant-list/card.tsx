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
          <img src={"https://greencleanearth.org/uploads/plants/aa9d00da9fce76226523aa0def7c1c1c.jpg"} alt={"Image"} height={150}/>
        </div>
        <div>
          <div className="text-sm text-gray-500">Tree number: </div>
          <div className="text-xl">{ participant.up_id }</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Tree name: </div>
          <div className="text-xl">{ participant.up_name }</div>
        </div>
        <div className="text-sm text-gray-500">{ participant.up_date }</div>
      </div>
  )
};

export default ParticipantCard;
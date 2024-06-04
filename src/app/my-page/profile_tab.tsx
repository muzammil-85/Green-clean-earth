
interface Profile {
  name: string;
  location: string;
  address: string;
  contact: string;
  email: string;
}
interface ProfileDetailsProps {
  profile: Profile;
}

const profile: Profile = {
  name: "Name",
  location: "Location",
  address:"Address",
  contact:"9876543210",
  email:"example@email.com"
};

export default function ProfileTab() {
    return (
        <div className="">
          <ProfileDetails profile={profile} />
        </div>
    )
}


const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  return (
    <div className="profile-details leading-normal">
      <h1 className="text-3xl font-semibold py-2" >{profile.name}</h1>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Phone:</strong> {profile.contact}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <style jsx>{`
        .profile-details {
          max-width: 400px;
          // margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

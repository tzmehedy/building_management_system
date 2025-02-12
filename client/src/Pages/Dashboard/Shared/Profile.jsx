import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
      <div>
        <div className="text-center">
          <h1 className="uppercase underline text-[#344B8F] text-2xl font-bold">
            Profile
          </h1>

          <div className="flex justify-center mt-32">
            <div className="shadow-2xl border-2 border-[#344B8F] border-t-0 rounded-t-4xl bg-[white]  w-[500px]">
              <div className="bg-[#344B8F] h-24 w-full rounded-t-4xl"></div>
              <div className="flex flex-col justify-center items-center p-10">
                <img
                  className="w-20 h-20 rounded-full -mt-24"
                  src={user?.photoURL}
                  alt=""
                />
                <h1 className="text-xl font-bold">Name: {user?.displayName}</h1>
                <p className="text-lg">Email: {user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;
import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import Cities from "./cities";

const Admin = () => {
  return (
    <div className="bg-gray-50 w-full h-screen">
      <Header />
      <div className="flex flex-row h-screen">
        <SideNav />
        <div className="flex flex-row justify-center w-full mt-8">

        </div>
      </div>
    </div>
  );
};

export default Admin;

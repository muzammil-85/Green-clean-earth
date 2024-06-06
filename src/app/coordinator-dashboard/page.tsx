"use client";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import { UserPlus } from "lucide-react";
import Link from 'next/link'
import { DialogAddUser } from "./dialog-add-user";
import { useSearchParams } from "next/navigation";
import { baseUrl } from "@/app/api/status/route";

export default function CoordinatorDashBoard() {

  const searchParams = useSearchParams();

  const co_id = searchParams.get("id");
  console.log(co_id);

  async function onSubmit(values) {
    console.log(values);
    try {
      const response = await fetch(
        `${baseUrl}/coordinator/${co_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include", // Include cookies in the request
        }
      );
  
      if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
    
        const result = await response.json();
        console.log(result.data.id);
        // if (id) {
        //   // Redirect to the dashboard
        //   router.push("/coordinator-dashboard?id=" + id);
        // }
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="bg-green-50 dark:bg-gray-900">
      <NavigationBar />
      
      <div className="container mx-auto md:max-w-5xl min-h-screen mt-4">
        <h1 className="text-3xl my-4 font-bold mt-8 pb-4 border-b-2">Coordinator Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div 
            className="flex justify-start items-start gap-3 text-xl border rounded-xl shadow p-6 bg-white hover:bg-green-100 hover:shadow-md hover:border-green-600"
            >
            <div>
              <UserPlus size={48} color="#16a34a" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Add members</p>
              <DialogAddUser/>
            </div>
          </div>

    {/* <Link 
            className="flex justify-start items-start gap-3 text-xl border rounded-xl shadow p-6 bg-white hover:bg-green-100 hover:shadow-md hover:border-green-600"
            href={""}>
            <div>
              <UserPlus size={48} color="#16a34a" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">My Uploads</p>
              <DialogAddUser/>
              <p className="font-normal text-base">നിങ്ങൾ അപ്‌ലോഡ് ചെയ്തവ കാണാൻ</p>
            </div>
          </Link> */}

          
        </div>
      </div>
      <Footer/>
    </div>
 )
}
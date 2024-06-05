import Image from "next/image";

import CoordinatorLogin from "./login/coordinator/page";
import CoordinatorDashBoard from "./coordinator-dashboard/page";
import { DialogAddUser } from "./coordinator-dashboard/dialog-add-user";
import Register from "./register/page";
import UserRegister from "./user-register/page";

export default function Home() {
  return (
    <main>
      <h2>Green Clean Earth</h2>
      <UserRegister/>
      {/* <CoordinatorLogin/> */}
      {/* <CoordinatorDashBoard/> */}
    </main>
  );
}

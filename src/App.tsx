import CreateNewUser from "./Users/components/CreateNewUser";
import ListOfUsers from "./Users/components/ListoOfUsers";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex-col gap-4 flex items-center">
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </div>
  );
}

export default App;

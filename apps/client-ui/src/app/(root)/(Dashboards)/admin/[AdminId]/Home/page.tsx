
import { AdminHomeScreen } from "@/screens/AdminHomeScreen";

export default function Page({ params }: { params: { AdminId: string } }) {
  return (
    <>
    <AdminHomeScreen params={params}/>
    </>
  );
}
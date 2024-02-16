import { cookies } from "next/headers"


export const ReceptionistHomeScreen = () => {
  const cookieStore = cookies()
  const Admin_id = cookieStore.get('user_id')
  return (
    <div>ReceptionistHomeScreen + {Admin_id?.value}</div>
  )
}

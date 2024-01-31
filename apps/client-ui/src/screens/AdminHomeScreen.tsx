import { AdminHomeScreenProps} from '@/types/admin'

export const AdminHomeScreen: React.FC<AdminHomeScreenProps> = ({ params }) => {
  return (
    <div>AdminHomeScreen + {params.AdminId}</div>
  )
}

import { NotificationTitle,NotificationLogo } from './Notification.styled'
import { BsFillSignStopFill } from "react-icons/bs";

export const Notification = ({message}) => {
return (
   <>
   <NotificationLogo><BsFillSignStopFill/></NotificationLogo>
   <NotificationTitle>{message}</NotificationTitle>
   </>
)
};
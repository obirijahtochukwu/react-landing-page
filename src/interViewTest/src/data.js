import { FaUserCircle, FaDatabase, FaRegEdit, FaUserGraduate, FaPaypal, FaBell, FaUserClock} from "react-icons/fa";

export const data = [
 {icon: <FaDatabase/>, text: 'dasboard', },
 {icon: <FaUserClock/>, text: 'free details'},
 {icon: <FaRegEdit/>, text: 'staff details', subtext: [
  {text: 'view details'},
  {text: 'pay history'},
  {text: 'add staff'}
 ]},
 {icon: <FaUserGraduate/>, text: 'student details'},
 {icon: <FaPaypal/>, text: 'pay history'},
 {icon: <FaBell/>, text: 'notice'},
 {icon: <FaUserCircle/>, text: 'school profile'},
]
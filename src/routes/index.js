import Todo from "../pages/Todo"
import Calendar from "../pages/Calendar"
import {Navigate} from 'react-router-dom'

// export default [
//     {
//       path:'/todo',
//       element:<Todo/>
//     },
//     {
//       path:'/calendar',
//       element:<Calendar/>
//     },
//     {
//       path:'/',
//       element:<Navigate to='/todo'/>
//     },
// ]

export default [
  {
    key: '1',
    label: 'Todo',
    path:'/todo'
  },
  {
    key: '2',
    label: 'Calendar',
    pageUrl:'/todo'
  },
]
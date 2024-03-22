
import * as usersAPI from '../../utilities/users-api'
import styles from './UsersList.module.scss'


// We're missing index and show routes for users. we can't acquire without this. For show route we could aim for name: searchInput somehow?
// must build userslistitem which contains just mini pro pic, username, clickable to get to their pro page. THIS IS WHY WE NEED A SHOW ROUTE.

//  searchInput ? usersIndex.map((user) => user.name.includes(searchInput) {
//     return <UsersListItem />
// :
// <UsersList /> //Must have logic to hide from view all but five random
// })

export default function UsersList(){
    <div className={styles.UsersList}>

    </div>
}

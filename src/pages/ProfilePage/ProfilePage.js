import React from 'react'
import './ProfilePage.module.scss'
import UserLogout from '../../components/UserLogout/UserLogout'

function ProfilePage({ user, setUser }) {
  return (
    <>
        <div>This is the ProfilePage</div>
        <UserLogout user={user} setUser={setUser} />
    </>
  )
}

export default ProfilePage
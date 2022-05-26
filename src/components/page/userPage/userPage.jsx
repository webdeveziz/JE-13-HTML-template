import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
// import Qualities from '../../ui/qualities'
// import { Link } from 'react-router-dom'
import UserCard from '../../ui/userCard'
import QualitiesCard from '../../ui/qualitiesCard'
import MeetingsCard from '../../ui/meetingsCard'
import Comments from '../../ui/comments'

const UserPage = ({ id }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data))
  }, [])

  const userInfo = () => {
    if (user) {
      return (
        <div className="container">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserCard user={user} />
              <QualitiesCard data={user.qualities} />
              <MeetingsCard value={user.completedMeetings} />

              {/* <h2>{user.name}</h2>
              <h3>Профессия {user.profession.name}</h3>
              <p>{<Qualities qualities={user.qualities} />}</p>
              <p>CompletedMeetings {user.completedMeetings}</p>
              <h3>Rate {user.rate}</h3> */}
              {/* <Link to={`/users/${user._id}/edit`} role="button">
                Изменить
              </Link> */}
            </div>
            <div className="col-md-8">
              <Comments />
            </div>
          </div>
        </div>
      )
    }
    return 'Загружаем...'
  }

  return <div>{userInfo()}</div>
}

UserPage.propTypes = {
  id: PropTypes.string.isRequired
}

export default UserPage

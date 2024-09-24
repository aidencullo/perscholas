import {useParams} from "react-router-dom"

export default function Profile (props) {
  // Grabbing the id from the URL Params.
  const params = useParams()
  const UID = params.id

  // Some logic to render a specific user's profile by ID...
  return (
    <div>
      <h1>Profile</h1>
      <p>UID: {UID}</p>
    </div>
  )
}

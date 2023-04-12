import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../config/session"
import db from '../../db'

// this handler runs for /api/book with any request method (GET, POST, etc)
export default withIronSessionApiRoute(
  async function handler(req, res) {
    // TODO: On a POST request, add a book using db.book.add with request body (must use JSON.parse)
    // TODO: On a DELETE request, remove a book using db.book.remove with request body (must use JSON.parse)
    // TODO: Respond with 404 for all other requests
    // User info can be accessed with req.session
    // No user info on the session means the user is not logged in
    if (req.method === 'POST') {
      const data = JSON.parse(req.body)
      await db.book.add(data)
      return res.status(200).end()
    } else if (req.method === 'DELETE') {
      const data = JSON.parse(req.body)
      await db.book.remove(data)
      return res.status(200).end()
    } else {
    return res.status(404).end()
    }
  },
  sessionOptions
)
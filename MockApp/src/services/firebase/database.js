import app from './app'
import { getDatabase } from 'firebase/database'

const database = getDatabase(app)

export default database

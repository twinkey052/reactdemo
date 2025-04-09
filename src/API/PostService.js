import axios from 'axios'

export default class PostService {
    static async createUser(username, password, email) {
        try {
            const response = await axios.post('http://localhost:5000/auth/registration', {
                username,
                password,
                email
            })
            return response.data 
        } catch (error) {
            console.error('Ошибка при регистрации:', error.response?.data || error.message)
        }
    }
}
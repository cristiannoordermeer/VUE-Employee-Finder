import axios from 'axios';


const api = axios.create({
    baseURL: 'https://68ffd755e02b16d1753f72c0.mockapi.io/api/vue',
    headers: {'Content-Type': 'application/json'}
})

export const EmployeeService = {
    async getEmployees() {
        const data = await api.get('/employees');
        return data;
    }
}
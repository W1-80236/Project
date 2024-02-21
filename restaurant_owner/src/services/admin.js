import axios from 'axios'
import { createError, createUrl } from './utils'

export async function registerAdmin(first_name,
    last_name,
    email,
    mobile_no,
    password,role) {
  try {
    const url = createUrl('admin_tb/register')
    const body = {
    first_name,
    last_name,
    email,
    mobile_no,
    password,
    role
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

export async function loginAdmin(email, password) {
  try {
    const url = createUrl('admin_tb/login')
    const body = {
      email,
      password
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

import axios from 'axios'
import { createError, createUrl } from './utils'

export async function signupUser(firstName, lastName, email, mobile,  password) {
  try {
    const url = createUrl('customer/signup')
    const body = {
      firstName,
      lastName,
      email,
      mobile,
      password
     
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

export async function signinUser(email, password) {
  try {
    const url = createUrl('customer/signin')
    const body = {
      email,
      password,
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}
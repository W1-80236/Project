import axios from 'axios'
import { createError, createUrl } from './utils'

export async function registerCustomer(cust_first_name, cust_last_name, email, mobile_no,  password) {
  try {
    const url = createUrl('customer_tb/register')
    const body = {
      cust_first_name,
      cust_last_name,
      email,
      mobile_no,
      password
     
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

export async function loginCustomer(email, password) {
  try {
    const url = createUrl('customer_tb/login')
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
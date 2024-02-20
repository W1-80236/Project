import axios from 'axios'
import { createError, createUrl } from './utils'

export async function getAllMenus() {
  try {
    const url = createUrl('food_tb/fooddetails')
    const headers = {
      headers: {
        token: sessionStorage['token'],
      },
    }
    const response = await axios.get(url, headers)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}
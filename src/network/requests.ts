import axios from 'axios'

export const putAncestorInfo = (data: any) =>
axios.put('https://watson-gaus-family-history-default-rtdb.firebaseio.com/', data)

import axios from "axios"

const baseUrl = "https://openlibrary.org/search?language=eng&author=OL"

export const getBook = async (id: string): Promise<any> => {
    return (await axios.get(baseUrl+ id)).data
  }
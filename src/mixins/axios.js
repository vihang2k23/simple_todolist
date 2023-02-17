import axios from "axios"

export default{
    
    methods: {
      async postdata(url,data)
        {
            return await axios.post(url,data)
        }
    },
}
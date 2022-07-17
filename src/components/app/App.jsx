import React, {useState} from 'react'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({
    nickname: '',
    name: '',
    password: ''
  })

  const handlChange = ({target: input}) => {

    setData({
      ...data,
      [input.name]: input.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = 'http://localhost:8080/register'
      const {data: res} = await axios.post(url, data)
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name='nickname' value={data.nickname} onChange={handlChange}/>
        </div>
        <div>
          <input type="text" name='name' value={data.name} onChange={handlChange}/>
        </div>
        <div>
          <input type="password" name='password' value={data.password} onChange={handlChange}/>
        </div>
        <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default App;

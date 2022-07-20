const [data, setData] = useState({
    nickname: "",
    name: "",
    email: "",
    password: "",
  });
  const handlChange = ({ target: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/signup";
      const { data: res } = await axios.post(url, data);
      // console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };
const Display=()=>{
    const [mydata , setmydata]= useState([]);
    const loaddata =async()=>{
        let api ="http://localhost:3000/data";
        const response= await axios.get(api);
        console.log(response.data);
        setmydata(response.data);
    }

    useEffect(()=>{
        loaddata();
    },[]);

    const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
            </tr>
            </>
        )
    })
}

export default Display;
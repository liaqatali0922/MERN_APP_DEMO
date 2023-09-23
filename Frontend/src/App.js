import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [form,setForm]=useState({})
  const [data, setData] = useState([]);
  

function handleChange(e){
  setForm({...form, [e.target.name]:e.target.value});
}
async function handleSubmit(e){
  e.preventDefault()
  
  try
  {
  await fetch("http://localhost:8080/demo",{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  });
  alert('you response has been submitted')
  }
  catch(err){
    console.log(err)
  }
}
async function getList(e) {
  e.preventDefault()
let res = await fetch("http://localhost:8080/demo", {
  method: "GET",
 });
const d = await res.json()
setData(d);
console.log(data)
}

// useEffect(()=>{
//   getList()
// },[])
//  useEffect(() => {console.log(data)
// }, [data]);

return (
 <div>
  <form>
   <div>
    <span>user name </span>
    <input type="text" name="username"  onChange={handleChange} />
   </div>
   <div>
    <span>password </span>
    <input type="text" name="password"  onChange={handleChange} />
   </div>
   <div>
    <input type="submit" onClick={handleSubmit} />
   </div>
   <div>
    <button onClick={(e)=>getList(e)}>Get List</button>
   </div> 
    <div>{
      data.map(user=>{
        return (
      <span>{user.username} </span>
        )
      }
      )}</div>
  </form>
 </div>
);
}

export default App;

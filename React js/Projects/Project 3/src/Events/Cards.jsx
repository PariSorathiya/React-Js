import React from 'react'

export default function Cards() {
    const [name, setName] = useState("")
    const [age, setage] =useState("")

    const [record,setRecord] = useState([])

    const addData = ()=>{
        let obj = {"name":name, "age":age}
        setRecord([...record,obj])
    }
  return (
    <div>
       <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter your age' onChange={(e)=>setage(e.target.value)} />

        <button onClick={addData}>Add Data</button>

        {
            record.map((e,i)=>{
                return(
                    <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.age}</li>
                        </ul>
                    
                )
            })
        }
    </div>
  )
}

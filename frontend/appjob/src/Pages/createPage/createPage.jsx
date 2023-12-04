/* eslint-disable eqeqeq */
import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios"
import "./createPage.css"


export const CreatePage =(props) =>{
    const [title, setTitle] = useState("");
    const [date, setDate]=useState("");
    const [description, setDescription]=useState("");
    const [hourly_rate, setHourly_rate]=useState("");
    const [name, setName]=useState("");
    const [location, setLocation]= useState("");
    const [employees_count, setEmployees_count]=useState("");
    const [experience, setExperience]=useState("");
    const [project_type, setProject_type]=useState("");
    const [skills, setSkills]=useState("");
    const navigate = useNavigate ();

    const cancelForm = () => {
        navigate("/");
    }
    const SubmitForm= async ()=> {
        
        // eslint-disable-next-line eqeqeq
        if(title !="" && date !="" && description !="" && hourly_rate !="" && name!="" &&
            // eslint-disable-next-line eqeqeq
            location !="" && employees_count !="" && experience !="" && project_type !="" && skills !=""){
                var dataJob ={
                    "title": title,
                    "date": date,
                    "description": description,
                    "hourly_rate": hourly_rate,
                    "name": name,
                    "location": location,
                    "employees_count": employees_count,
                    "experience": experience,
                    "project_type": project_type,
                    "skills": skills,
                    
                };
                try {
                    var result = await axios.post("http://localhost:8000/api/jobs/create", dataJob);
                if(result.status == 200){
                    navigate("/");
                }
                } catch (e) {
                    alert(e.response.data.message)
                }
            } else{
                alert ("Llene el formulario");
            }
            
    }


    return (
        <div>
            <h1 className='title'>Find Job</h1>
            <h2>Publica tu aviso</h2>
            <Link to ="/">Home</Link>
            <br />
            <br />
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <br />
                <br />
                <label>Date: </label>
                <input type="text" value={date} onChange={(e)=> setDate(e.target.value)}/>
                <br />
                <br />
                <label>Create a job description</label>
                <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <br />
                <br />
                <label>Hourly rate: </label>
                <input type="Number" value={hourly_rate} onChange={(e)=> setHourly_rate(e.target.value)}/>
                <br />
                <br />
                <label>experience: </label>
                <input type="text" value={experience} onChange={(e)=> setExperience(e.target.value)}/>
                <br />
                <br />
                <label>Project type: </label>
                <input type="text" value={project_type} onChange={(e)=> setProject_type(e.target.value)}/>
                <br />
                <br />
                <label>Skills: </label>
                <input type="text" value={skills} onChange={(e)=> setSkills(e.target.value)}/>
                <br />
                <br />
                <h2>Company</h2>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                <br />
                <br />
                <label>Location: </label>
                <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)}/> <br />
                <br />
                <label>Employees count</label>
                <input type="text" value={employees_count} onChange={(e)=> setEmployees_count(e.target.value)}/>
                <br />
                <br />
                <button onClick={cancelForm}>Cancel</button>
                <button onClick={SubmitForm}>Submit</button>

                
            </div>
        </div>
    );
};
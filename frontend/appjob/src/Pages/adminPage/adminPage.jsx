/* eslint-disable eqeqeq */
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./adminPage.css"

export const AdminPage = (props) => {
    const [listJobs, setListJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        var isLogged = localStorage.getItem("isLogged");
        if(isLogged == null){
            navigate("/credentials");
        }

        callListApi();
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const callListApi = async () => {
      
        var jwt = localStorage.getItem("jwt");
        var config = {
            headers: {
                "Authorization": jwt
            },
        };

        var result = await axios.get("http://localhost:8000/api/Jobs/get", config);
        setListJobs(result.data);
    }
    const deleteJob = async (idJob, index) => {
        var jwt = localStorage.getItem("jwt");
        var result = await axios.delete("http://localhost:8000/api/delete/" + idJob,{
            headers: {"Authorization": jwt
        }
    });
    if(result.status == 200){
        var listJobsTemp = listJobs.filter((job, i) => i != index);
        setListJobs(listJobsTemp);
        alert("Se ha eliminado correctamente");
    } else {
        alert("Hubo un error");
    }
}
  

    const goToViewJob = () => {
        navigate("/" );
       
    }

    const goToCreateJob = () => {
        navigate("/new" );
    }


    return (
        <div>
            <h1 className='title'>Find Job</h1>
        
            <table >
                <tr>
                    <th>Jobs</th>
                    <th>Jobs Available</th>
                </tr>

                {
                    listJobs.map((job, index) => {
                        return <tr className='container' key={index}>
                                    <td>{job.title}</td>
                                    <td>
                                        <button onClick={() => deleteJob(job._id, index)}>Delete</button>
                                        <button onClick={() => goToCreateJob(job._id)}>Create Job</button>
                                        <button onClick={() => goToViewJob(job._id)}>View Jobs</button>
                                    </td>
                                </tr>
                    })
                }
            </table>
        </div>
    );
};
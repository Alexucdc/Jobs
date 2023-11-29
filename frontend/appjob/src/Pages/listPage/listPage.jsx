import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const ListPage = (props) => {
    const [listJobs, setListJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        var isLogged = localStorage.getItem("isLogged");
        if(isLogged == null){
            navigate("/credentials");
        }

        callListApi();
    }, []);
    const callListApi = async () => {
        var jwt = localStorage.getItem("jwt");
        var config = {
            headers: {
                "Authorization": jwt
            },
        };

        var result = await axios.get("http://localhost:8000/api/Jobs/get/", config);
        setListJobs(result.data);
    }
    const deleteJob = async (idJob, index) => {
        var jwt = localStorage.getItem("jwt");
        var result = await axios.delete("http://localhost:8000/api/delete/:idJob/" + idJob, {
            headers: {
                "Authorization": jwt
            }
        });
        if(result.status == 200){
            var listJobsTemp = listJobs.filter((auth, i) => i != index);
            setListJobs(listJobsTemp);
            alert("Se ha eliminado correctamente");
        } else {
            alert("Hubo un error");
        }
    }

    const goToEdit = (idJob) => {
        navigate("/ed/update/:idit/" + idJob);
    }

    const goToViewJob = (idJob) => {
        navigate("/" + idJob);
    }

    const goToCreateJob = (idJob) => {
        navigate("/new/" + idJob);
    }

    const logout = () =>{
        localStorage.removeItem("isLogged");
        navigate("/credentials");
    }
    return (
        <div>
            <h1>Jobs</h1>
            <Link to="/new">Add an Job</Link>
            <button onClick={logout}>Logout</button>
        
            <table>
                <tr>
                    <th>Jobs</th>
                    <th>Jobs Available</th>
                </tr>

                {
                    listJobs.map((job, index) => {
                        return <tr key={index}>
                                    <td>{job.name}</td>
                                    <td>
                                        <button onClick={() => goToEdit(job._id)}>Edit</button>
                                        <button onClick={() => deleteJob(job._id, index)}>Delete</button>
                                        <button onClick={() => goToCreateJob(job._id)}>Create Book</button>
                                        <button onClick={() => goToViewJob(job._id)}>View Books</button>
                                    </td>
                                </tr>
                    })
                }
            </table>
        </div>
    );
};
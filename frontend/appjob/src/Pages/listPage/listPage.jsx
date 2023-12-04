import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./listPage.css"

export const ListPage = (props)  => {

    
    const [listJobs, setListJobs] = useState([]);
    

    useEffect(() =>{
        callListApi();
    }, []);
    const callListApi = async () => {
      try {
        var result = await axios.get("http://localhost:8000/api/Jobs/get");
        setListJobs(result.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    const mostrarDetalles = (description) => {
        alert(description);
      };
    
      const handleDetailsClick = (job) => {
        mostrarDetalles(job.description);
      };

      const register =()=>{
        alert("Successful application")
      };
     
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      };
    
      const filterJobs = () => {
        return listJobs.filter((job) => {
          return (
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.project_type.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      };



return (
    <div>
      
      <h1 className='title'>Find Job</h1>
      <Link to="/credentials"className='Link' >Login</Link>
      <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearchChange}
      />
      
      
      <div className="job-container">
  {filterJobs().length > 0 ? (
    filterJobs().map((job, index) => (
      <div className='job-main' key={index}>
        <div className="job">
          <h2>{job.title}</h2>
          <p><strong>Published:</strong> {job.date}</p>
          <p><strong>Hourly rate:</strong> {job.hourly_rate}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Project type:</strong> {job.project_type}</p>
          <p><strong>Skills:</strong> {job.skills}</p>
        </div>
          <p><strong>Company:</strong> {job.name}</p>
          <p>Location: {job.location}</p>
           <p>Employees count: {job.employees_count}</p>
          <br />
          <button onClick={() => handleDetailsClick(job)}>Details</button>
          
          <button onClick={() => register()}>Apply</button>
          </div>
       ))
       ) : (
         <p>No se encontraron trabajos.</p>
       )}
      </div>
    </div>
  );
};
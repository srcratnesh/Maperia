import React from 'react';
import ratneshImage from '../assets/ratnesh-image.jpg';
import asthaImage from '../assets/astha-image.jpg';
import { FaUser, FaPhone, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Backbutton from '../components/Backbutton';


const ContactUs = () => {
  return (
    
    <div className='p-5 bg-black text-white'>
      <Backbutton />
    <div className='justify-between items-center mb-5 '>
    <h1 className="text-3xl font-bold "style={{ marginTop: '20px' }}></h1>
      
    </div >
    <div className='flex'>
       {/* Ratnesh's Block */}      
       <div className="contact-block ratnesh-block border-2 border-white glow p-4 text-center ml-8 mr-8 mb-5 rounded-3xl glowing-heartbeat-animation">
       <div className=" items-center justify-between mb-4 ">
       
       <div className="profile-image-container w-40 h-40 mx-auto border-2 border-white glow rounded-full overflow-hidden mb-4 glowing-heartbeat-animation">
        <img
    alt="Ratnesh Sanklecha"
    src={ratneshImage}
    className="w-60 h-40 object-cover "
  />
 
  </div>
  <h2 className="text-4xl font-bold rounded-full p-4 text-pink-300 glow text-blue-300 mr-4 ml-4 pop-up">
  RATNESH SANKLECHA
</h2>


</div>

  
  
  <p className="text-justify mr-5 ml-5 mb-5">
    Hello! I'm Ratnesh, an IT engineering student at PES Modern College of Engineering. Specializing in backend development, I excel in crafting the server-side logic and database architecture for web applications. Proficient in languages like Java, Python, and Node.js, I bring ideas to life by building scalable and efficient server-side applications. My skills extend to database management using tools like MySQL and MongoDB, and I've completed an AWS internship, gaining familiarity with cloud-based services and deployment. Beyond technical expertise, I'm known for my collaborative spirit, ensuring seamless integration between frontend and backend components. Committed to continuous learning, I stay updated on the latest technologies and industry trends.
  </p>
  <div className="profile-icons mr-4">
      
      
      
    </div>
  <div className="text-left mb-4">
  <div className="text-left mb-4 flex items-center">
  <FaUser className="text-1xl ml-4 mr-1" />
  <p className="font-bold mr-5 ml-5">Mail ID: ratnesh1227@gmail.com</p>
</div>
    <div className="text-left mb-4 flex items-center">
  <FaPhone className="text-1xl ml-4 mr-1" />
  <p className="font-bold mr-5 ml-5">Contact: 8767159744</p>
</div>
    
    <div className="text-left flex items-center">
    <FaLinkedin className="text-1xl ml-4 mr-1" />
    <p className="font-bold mr-5 ml-5">
      LinkedIn:
      <a
        href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEBpLXYBkKin5lbcB9q706LijY6ukN9_hIg&keywords=ratnesh%20sanklecha&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b386c6fb-a317-47fc-987c-bb9d42708499&sid=Yrg&spellCorrectionEnabled=false"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Ratnesh Sanklecha (Frontend to Backend developer)
      </a>
    </p>
    </div>
  </div>
</div>

{/* astha block*/}
<div className="contact-block astha-block border-2 border-white glow p-4 text-center mr-6 rounded-3xl glowing-heartbeat-animation">
    <div className="items-center justify-between mb-4">
      <div className="profile-image-container w-40 h-40 mx-auto border-2 border-white glow rounded-full overflow-hidden mb-4 glowing-heartbeat-animation">
        <img
          alt="Astha Prabhu"
          src={asthaImage}
          className="w-60 h-40 object-cover"
        />
      </div>
      <h2 className="text-4xl font-bold rounded-full p-4 text-blue-300 glow mr-4 ml-4 pop-up">ASTHA PRABHU</h2>
    </div>

    <p className="text-justify mr-5 ml-5 mb-5">
      Hello! I'm Astha, an IT engineering student at PES Modern College of Engineering, specializing in frontend development. I thrive on creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. Proficient in frontend frameworks like React.js, I ensure the efficiency and modularity of web development projects. My expertise also includes a focus on user experience (UX) design and ensuring cross-browser compatibility. With additional skills in UI/UX design and strong communication abilities, I contribute to the overall look and feel of applications and collaborate effectively with backend developers and the broader team. Adaptable and always ready to embrace new tools and technologies, I bring a fresh perspective to web development projects.
    </p>

    <div className="text-left mb-4">
    <div className="text-left mb-4 flex items-center">
  <FaUser className="text-1xl ml-4 mr-1" />
  <p className="font-bold mr-5 ml-5">Mail ID:prabhuastha12@gmail.com</p>
</div>
<div className="text-left mb-4 flex items-center">
  <FaPhone className="text-1xl ml-4 mr-1" />
  <p className="font-bold mr-5 ml-5">Contact: 8830402172</p>
</div>
<div className="text-left flex items-center">
<FaLinkedin className="text-1xl ml-4 mr-1" />
      <p className="font-bold mr-5 ml-5">
        LinkedIn:
        <a
          href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD3wDtEBI-kt0odJWwLWdlo4OkzvNVuZprs&keywords=aastha%20prabhu&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ba6c2b48-718e-4211-8038-3dedaf9cbb00&sid=syT&spellCorrectionEnabled=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Astha Prabhu (Front-end Developer)
        </a>
      </p>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
};

export default ContactUs;

import React from "react";
import DofImage from "../assets/img/projects/dof.PNG";
import WeatherImage from "../assets/img/projects/weather.jpg";
import GitUserImage from "../assets/img/projects/gituser.png";
import BtiImage from "../assets/img/projects/bti.jpg";
import MmlImage from "../assets/img/projects/mml.jpg";

function Project() {
  return (
    <div className="max-w-[1240px] mx-auto py-[20px]">
      <div>
        <h1 className="font-bold text-2xl text-gray-400 md:text-3xl text-center">Projects</h1>
      </div>

      <div className="md:grid grid-cols-4 p-3 mb-3">
        {/* 1 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-5">
          <img src={DofImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Department Of Fisheries
          </h1>
          <p className="p-2 text-justify">
            The FIQC online certification system is an online portal that
            manages the issuance of different types of Licenses, Health
            Certificates, country requirement-specific Additional Health
            Certificates, Import NOCs, Import Registration Certificates, and
            Import Release Letters <a href="https://www.ecertificate.fisheries.gov.bd/"  className="pr-2 text-[blue]">View</a>
          </p> 
        </div>
        {/* 2 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={WeatherImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Weather App
          </h1>
          <p className="p-2 text-justify">
            This a project with a weather API intregation, where current weather condition of any specific city can be search. Basically it is an portfolia type project and weather search one of the mejor module in it.<a href="https://react-port-two.vercel.app/"   className="pr-2 text-[blue]">View</a>
          </p>
        </div>
        {/* 3 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={GitUserImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Github User Search
          </h1>
          <p className="p-2 text-justify">
            This is a simple project where anyone can search git hub account and see some basic informatio. Used Public api which can allow limited search at specific time. <a href="https://git-user-jfc7xqt4n-nurul-islams-projects.vercel.app/"  className="pr-2 text-[blue]">View</a>
          </p>
        </div>
        {/* 4 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={BtiImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            BTI CRM (Backend)
          </h1>
          <p className="p-2 text-justify">
           This is the project where Worked in some of module. It i a CRM project. FLat sale , Followup and monitoring related process avaiable. Worked with well know software company Nextgen Innovation Ltd for this project.<a href="/" className="pr-2 text-[blue]">View</a>
          </p>
        </div>


        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={MmlImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Meal Management
          </h1>
          <p className="p-2 text-justify">
          The Meal Management System allows users to add meals, track their records, and enables managers to oversee transactions, manage meal counts, and automatically generate comprehensive final reports for efficient oversight.
           <a href="https://github.com/NurulIslam17/MML"  className="pr-2 text-[blue]">View</a>
          </p>
        </div>


      </div>
    </div>
  );
}

export default Project;

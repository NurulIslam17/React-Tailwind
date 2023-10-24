import React from "react";
import DofImage from "../assets/img/projects/dof.PNG";

function Project() {
  return (
    <div className="max-w-[1240px] mx-auto py-[20px]">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl text-center">Projects</h1>
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
            Import Release Letters <a href="https://www.ecertificate.fisheries.gov.bd/" className="pr-2 text-[blue]">View</a>
          </p> 
        </div>
        {/* 2 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={DofImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Department Of Fisheries
          </h1>
          <p className="p-2 text-justify">
            The FIQC online certification system is an online portal that
            manages the issuance of different types of Licenses, Health
            Certificates, country requirement-specific Additional Health
            Certificates, Import NOCs, Import Registration Certificates, and
            Import Release Letters <a href="https://www.ecertificate.fisheries.gov.bd/" className="pr-2 text-[blue]">View</a>
          </p>
        </div>
        {/* 2 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={DofImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Department Of Fisheries
          </h1>
          <p className="p-2 text-justify">
            The FIQC online certification system is an online portal that
            manages the issuance of different types of Licenses, Health
            Certificates, country requirement-specific Additional Health
            Certificates, Import NOCs, Import Registration Certificates, and
            Import Release Letters <a href="https://www.ecertificate.fisheries.gov.bd/" className="pr-2 text-[blue]">View</a>
          </p>
        </div>
        {/* 2 */}
        <div className="h-[500px] bg-[#f1f2f6] m-2 shadow-inner mb-3">
          <img src={DofImage} alt="img" className="w-full h-[50%]" />

          <h1 className="text-center font-bold text-2xl py-2">
            Department Of Fisheries
          </h1>
          <p className="p-2 text-justify">
            The FIQC online certification system is an online portal that
            manages the issuance of different types of Licenses, Health
            Certificates, country requirement-specific Additional Health
            Certificates, Import NOCs, Import Registration Certificates, and
            Import Release Letters <a href="https://www.ecertificate.fisheries.gov.bd/" className="pr-2 text-[blue]">View</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

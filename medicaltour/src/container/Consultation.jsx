import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { departments } from "@/constants/departments";
import { treatments } from "@/constants/departments";

const BookConsultation = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedTreatment, setselectedTreatment] = useState(null);
  const [medicalReports, setMedicalReports] = useState(null);
  const [medicalCondition, setMedicalCondition] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleSubcategoryClick = (subcategory) => {
    setselectedTreatment(subcategory);
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleFileChange = (e) => {
    setMedicalReports(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Department:", selectedDepartment);
    console.log("Reports:", medicalReports);
    console.log("Condition:", medicalCondition);
    setShowConfirmation(true);
  };

  // const togglePatientLogin = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="mb-4">Please log in to book a consultation.</p>
            <Button onClick={() => navigate('/login')}>Login</Button>
            {/* <Button onClick={() => togglePatientLogin()}>ToggleLogin</Button> */}
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-25">
          <h1 className="text-3xl font-semibold mb-8 text-center">Book a Consultation</h1>

          <div className="h-[50vh] py-15 flex flex-col items-center bg-[#071e3f] text-white">
            <h2 className="text-2xl font-semibold mb-6 uppercase">
              Departments
            </h2>
            <div className="static overflow-hidden mx-auto">
              <div className="flex space-x-4 overflow-x-auto scroll-smooth">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-[150px] h-[150px] p-4 border rounded-full shadow cursor-pointer"
                    onClick={() => handleDepartmentClick(dept.name)}
                  >
                    <img src={dept.icon} alt={dept.name} className="h-16 w-16 mb-2" />
                    <span className="text-md font-medium">{dept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedDepartment && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Treatments under {selectedDepartment}
              </h2>
              <div className="flex space-x-4 overflow-x-auto scroll-smooth justify-center">
                {treatments[selectedDepartment].map((subcategory, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-[150px] h-[150px] p-4 border rounded-full shadow-md shadow-blue-500/50 cursor-pointer text-center bg-amber-50"
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    <span className="text-md font-medium">{subcategory}</span>
                  </div>
                ))}
              </div>

              {selectedTreatment && (
                <div className="my-8 mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">
                    {selectedTreatment}
                  </h2>

                  <div className="flex items-center space-x-5 text-md">
                    <Label htmlFor="reports">Upload Medical Reports</Label>
                    <Input type="file" className="mt-2 w-[50vh]" id="reports" onChange={handleFileChange} />
                  </div>

                  <div className="flex items-center space-x-5 text-md">
                    <Label htmlFor="condition">Brief Medical Condition</Label>
                    <textarea
                      id="condition"
                      className="w-[50vh] p-2 mt-2 border rounded-md"
                      value={medicalCondition}
                      onChange={(e) => setMedicalCondition(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleSubmit} className="mx-40 my-5">Submit</Button>

                  <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirmation</DialogTitle>
                        <DialogDescription>
                          Thanks for updating!!
                          We'll get back to you soon regarding your consultation.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookConsultation;
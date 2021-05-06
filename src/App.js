import React from 'react'
import DoctorRegistrationByAdmin from './Admin/DoctorRegistrationByAdmin/DoctorRegistrationByAdmin';
import DashbordLogin from './Admin/DashbordLogin/DashbordLogin';
import ForgotPassword from './Admin/ForgotPassword/ForgotPassword';
import UploadSuccessfull from './Admin/component/StepperComponent/UploadSuccessfull';
import PleaseWait from './Admin/component/StepperComponent/PleaseWait';
import RegistrationSuccess from './Admin/component/StepperComponent/RegistrationSuccess';



function App() {
  return (
    <div className="App">
      <DoctorRegistrationByAdmin />
      {/* <DashbordLogin /> */}
      {/* <ForgotPassword /> */}
      {/* <UploadSuccessfull />
      <PleaseWait/> */}
      {/* <RegistrationSuccess /> */}
    </div>
  );
}

export default App;

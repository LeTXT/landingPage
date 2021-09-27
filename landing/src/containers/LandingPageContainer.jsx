import React from 'react'
import Layout from '../components/templates/Layout'

function LandingPageContainer() {
    const onSubmit = (nome, email, cep) => {
        {/*TODO:
        export default (config: ConfigType): BookingSystemApiType => {
  const axiosInstance = axios.create({ baseURL: config.apiUrl });
  return {
    start: (mobile, dob) => axiosInstance.get('/patient/start', { params: { mobile, dob } }).then((res) => res.data), //TODO: Provavelmente usar START
    verify: (mobileNumber: string, securityCode: string) => axiosInstance.post(
      '/patient/verify',
      {
        mobileNumber,
        securityCode,
      },
    ).then((res) => res.data),
    findSlots: (patientId, token) => axiosInstance.get('/appointments', {
      params: { patientId },
      headers: {
        'x-session-token': `${token}`,
      },
    }).then((res) => res.data),
    bookAppointment: (date, time, clinicId, patientId, referralId) => axiosInstance.post(
      '/appointments',
      {
        date, time, clinicId, patientId, referralId,
      },
    ).then((res) => res.data),
  };
};

const config = {
  apiUrl: 'http://localhost:8080',
  // apiUrl: 'https://u9qopxyosf.execute-api.eu-west-2.amazonaws.com/dev',
};

export default config;
        */}
        console.log(JSON.stringify(`Test ${nome} ${email} ${cep}`))
    }
    return (
        <Layout onSubmit={onSubmit}/>
    )
}

export default LandingPageContainer

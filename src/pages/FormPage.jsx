import React from 'react';
import useFormController from '../controller/FormController';
import FormView from '../views/FormView';

function FormPage() {
  const {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    summary,
    setSummary,
    handleSubmit,
  } = useFormController();

  return (
    <FormView
      name={name}
      setName={setName}
      address={address}
      setAddress={setAddress}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
      summary={summary}
      setSummary={setSummary}
      handleSubmit={handleSubmit}
    />
  );
}

export default FormPage;

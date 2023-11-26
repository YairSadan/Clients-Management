import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-12 p-24 py-48">
      <input
        type="text"
        placeholder="טלפון:"
        className="border-2 border-accent bg-secondary placeholder-tertiary-700 rounded-lg p-2"
      />
      <button type='submit' className="border-2 border-accent bg-secondary rounded-lg p-2">
        <div>שלח קוד אימות</div>
      </button>
    </div>
  );
};

export default LoginForm;

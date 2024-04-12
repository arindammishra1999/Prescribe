export default function IdInput({ idtype, onInputChange }) {
  const handleInputChange = (event) => {
    onInputChange(event.target.value); // Pass the input value to the parent component
  };

  return (
    <div className="mb-4">
      <h6 className="ml-2">{idtype}</h6>
      <input
        type="email"
        placeholder={
          idtype === "Health Card Number" ? "12345-6789" : "12345678"
        }
        className="w-full border border-gray-300 p-4 rounded-full focus:border-teal-900 focus:outline-none"
        onChange={handleInputChange}
      />
    </div>
  );
}

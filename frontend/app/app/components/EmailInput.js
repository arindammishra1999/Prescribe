export default function EmailInput() {
  return (
    <div className="mb-4">
      <h6 className="ml-2">Email</h6>
      <input
        type="email"
        placeholder="john@example.com"
        className="w-full border border-gray-300 p-4 rounded-full focus:border-teal-900 focus:outline-none"
      />
    </div>
  );
}

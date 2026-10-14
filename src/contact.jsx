import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(s) {
    s.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("لطفا فرم را دقیق پر کنید!");
      return;
    }
    setName("");
    setEmail("");
    setError("");
    setSuccess(true);
    setMessage("");
  }
  return (
    <section id="info" className="bg-white rounded-lg shadow-md p-4 m-2">
      <h2 className="text-3xl font-bold text-center mb-4 font-[Titr]">تماس</h2>
      <div
        id="contact"
        className="p-3 bg-gray-800 rounded-lg shadow-md font-[vazirmatn] "
      >
        <fieldset className="border border-white text-white p-4 rounded-lg ">
          <legend>اطلاعات تماس</legend>
          <form  onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex sm:flex-row">
            <label htmlFor="name">نام:</label>
            <input
            value={name}
              onChange={(n) => setName(n.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full h-full p-2 mb-4 bg-white rounded-lg text-black"
            />
            <label htmlFor="email">ایمیل:</label>
            <input
            value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full h-full p-2 mb-4 bg-white rounded-lg text-black"
            />
            <label htmlFor="message">پیام:</label>
            <textarea
            value={message}
              onChange={(m) => setMessage(m.target.value)}
              id="message"
              name="message"
              rows="4"
              className="w-full h-full p-2 mb-4 bg-white rounded-lg text-black sm:h-10"
            ></textarea>
            <button
              type="submit"
              className="w-full h-full bg-white cursor-pointer text-black p-2 rounded-lg hover:bg-green-500 hover:text-black"
            >
              ارسال
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">پیام شما ارسال شد ✅</p>}
        </fieldset>
      </div>
    </section>
  );
}

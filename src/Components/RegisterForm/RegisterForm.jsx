"use client";

import { postUser } from "@/lib/auth";
import Container from "../Container/Container";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      contactNo: form.contactNo.value,
      password: form.password.value,
      image: form.image.value,
    };

    const data = await postUser(formData);
    console.log(data);

    if (data.acknowledged === true) {
      alert("user created");
      form.reset();
    } else {
      alert(data.message);
    }
  };

  const inputClass =
    "p-2 rounded border-2 bg-white text-black focus:outline-green-300";

  return (
    <Container>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your official name"
            required
            className={inputClass}
          />
        </div>

        {/* Email + Blood Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Contact No + Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNo"
              placeholder="01XXXXXXXXX"
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="flex flex-col space-y-1">
          <label>Profile Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </Container>
  );
};

export default RegisterForm;

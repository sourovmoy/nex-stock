"use client";
import { postUser } from "@/lib/auth";
import Container from "../Container/Container";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const formData = {
        name: form.name.value,
        phone: form.contactNo.value,
        email: form.email.value,
        password: form.password.value,
        image: form.image.value || null,
      };

      const data = await postUser(formData);
      if (data.acknowledged === true) {
        Swal.fire({
          icon: "success",
          draggable: true,
        });
        // form.reset();
      }
    } catch (error) {
      console.log("error form", error);
      Swal.fire({
        icon: "warning",
        draggable: true,
      });
    }
  };

  const inputClass =
    "p-2 rounded border-2 bg-white text-black focus:outline-green-300";

  return (
    <Container>
      <div className="flex justify-center items-center">
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
      </div>
    </Container>
  );
};

export default RegisterForm;

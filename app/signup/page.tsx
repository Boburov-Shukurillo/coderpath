"use client";

import { useEffect, useState } from "react";
import { Form } from "../components/Form";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; // Routerni import qilamiz

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.push("/"); // Redirect to the home page after form submission
  }, []); // Empty dependency array to run only once on mount
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add API call or form handling logic
    console.log("Form submitted", { username, email, password });
  };

  return (
    <div className="p-40">
      <Form />

    </div>
  );
};

export default SignUp;

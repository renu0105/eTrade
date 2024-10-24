"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Register = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();

  let callbackUrl = params.get("callbackUrl") || "/";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, session, router]);

  const formSubmit = async (form) => {
    const { name, email, password } = form;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        return router.push(
          `signin?${callbackUrl}&success=Account created successfully`
        );
      } else {
        const data = await res.json();
        return alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return <div></div>;
};
export default Register;

"use client";
import "./style.Contact.scss";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import dropdownIcon from "@/app/icon/dropdown.svg";
import Image from "next/image";
import Header from "@/components/header/Header";

interface FormInputProp {
  email: string;
  category: string;
  description: string;
}

export default function Contact() {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCateogry] =
    useState<string>("Choose Subject");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    setValue,
  } = useForm<FormInputProp>();

  const categoryOptions = [
    { name: "Choose Subject" },
    { name: "Suggestion" },
    { name: "Question" },
    { name: "Alert" },
  ];

  const formSubmit = async (data: FormInputProp) => {
    const inputValues = getValues();

    try {
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <main>
      <Header />
      <section id="contact">
        <h1 className="title">Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit(formSubmit)}>
          <div className="user-info">
            <div id="email-input">
              <input
                type="email"
                className={errors.email ? "error" : ""}
                placeholder={
                  errors.email ? errors.email?.message : "Your Email"
                }
                {...register("email", {
                  required: "Please provide your email address",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            <div id="category-input">
              <div
                id="dropdown-header"
                onClick={() => setCategoryMenuOpen((prev) => !prev)}
              >
                <input
                  value={
                    errors.category ? errors.category.message : selectedCategory
                  }
                  style={{ cursor: "pointer", caretColor: "transparent" }}
                  className={errors.category ? "error" : ""}
                  {...register("category", {
                    validate: (v: string) =>
                      v !== "Choose Subject" || "You must choose category",
                  })}
                />
                <Image
                  className="dropdown-button"
                  src={dropdownIcon}
                  alt="dropdown menu button"
                  width={20}
                  height={20}
                  style={{
                    zIndex: "1",
                    transform: `${
                      categoryMenuOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                    transition: "transform .3s ease-in-out",
                  }}
                />
              </div>
              {categoryMenuOpen && (
                <ul className="dropdown-menu">
                  {categoryOptions.map((i) => (
                    <li
                      key={i.name}
                      value={i.name}
                      onClick={() => {
                        setSelectedCateogry(i.name);
                        clearErrors();
                        setCategoryMenuOpen(false);
                      }}
                      className="input"
                    >
                      {i.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <textarea
            id="user-description"
            className={errors.description ? "error" : ""}
            placeholder={
              errors.description
                ? "Please provide your thoughts!"
                : "Describe here your thoughts......"
            }
            {...register("description", {
              required: true,
            })}
          />
          <input
            type="submit"
            className="submit-button"
            onClick={() => setValue("category", selectedCategory)}
          />
        </form>
        <div className="location"></div>
      </section>
    </main>
  );
}

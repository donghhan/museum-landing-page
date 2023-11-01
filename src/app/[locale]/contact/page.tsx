"use client";
import "./style.Contact.scss";
import { useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Contact");
  const chooseCategory = t("choose_category");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCateogry] =
    useState<string>(chooseCategory);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    setValue,
  } = useForm<FormInputProp>();

  const categoryOptions = [
    { name: t("choose_category") },
    { name: t("suggestion") },
    { name: t("question") },
    { name: t("alert") },
  ];

  const formSubmit = async (data: FormInputProp) => {
    const inputValues = getValues();

    try {
      console.log(inputValues);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <main>
      <Header />
      <section id="contact">
        <h1 className="title">{t("title")}</h1>
        <form id="contact-form" onSubmit={handleSubmit(formSubmit)}>
          <div className="user-info">
            <div id="email-input">
              <input
                type="email"
                className={errors.email ? "error" : ""}
                placeholder={
                  errors.email ? errors.email?.message : t("email_input")
                }
                {...register("email", {
                  required: t("email_required_error"),
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: t("invalid_email_error"),
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
                      v !== t("choose_category") || t("category_error"),
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
              errors.description ? t("feedback_error") : t("give_us_feedback")
            }
            {...register("description", {
              required: true,
            })}
          />
          <input
            type="submit"
            value={t("submit")}
            readOnly
            className="submit-button"
            onClick={() => setValue("category", selectedCategory)}
          />
        </form>
      </section>
    </main>
  );
}

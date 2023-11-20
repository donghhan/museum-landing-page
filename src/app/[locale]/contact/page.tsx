"use client";
import "./style.Contact.scss";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import dropdownIcon from "@/app/icon/dropdown.svg";
import Image from "next/image";
import Header from "@/components/header/Header";

export default function Contact() {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCateogry] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
  } = useForm<ContactInputData>();

  const t = useTranslations("Contact");

  const categoryOptions = [
    { name: undefined },
    { name: t("suggestion") },
    { name: t("question") },
    { name: t("alert") },
  ];

  const formSubmit = async (data: ContactInputData) => {
    setIsSubmitting(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
      });
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
                style={{ paddingLeft: "20px" }}
                {...register("category", {
                  validate: (v: string) =>
                    v !== undefined || t("category_error"),
                })}
              >
                {errors.category ? (
                  <span style={{ color: "crimson" }}>
                    {t("category_error")}
                  </span>
                ) : (
                  selectedCategory || t("choose_category")
                )}
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
                  {categoryOptions.map((i, index) => (
                    <li
                      key={index}
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
          {isSubmitting ? (
            <input
              type="submit"
              value={t("submitting")}
              readOnly
              className="submit-button"
              onClick={() => setValue("category", selectedCategory!)}
              style={{ opacity: ".5" }}
            />
          ) : (
            <input
              type="submit"
              value={t("submit")}
              readOnly
              className="submit-button"
              onClick={() => setValue("category", selectedCategory!)}
            />
          )}
        </form>
      </section>
    </main>
  );
}

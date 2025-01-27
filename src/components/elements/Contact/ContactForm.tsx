'use client'

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup"
import { Typography } from "@/components/ui/Typography"

const ContactForm = () => {

  const [submitted, setSubmitted] = useState<boolean>()

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, "Name is too short").required("Name is required"),
      email: Yup.string().email('Invalid email').required("Email is required"),
      phone: Yup.string().required('Phone number is required')
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <div>
      <Typography variant='heading' size='sm' className='mb-6 2xl:max-w-md'>What Services Can We Support You With?</Typography>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-3 mb-6">
            <Label className="">I'am Interested In</Label>
            <ToggleGroup type="multiple" className="flex-wrap justify-start gap-2">
              {fields.map((field, i) => (
                <ToggleGroupItem key={i} value={`item-${i}`} aria-label={`Toggle ${field}`} className="w-fit">
                  <Typography> {field} </Typography>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <div className="mb-2">
            <label htmlFor="name" className="sr-only">Name</label>
            <Input name="name" type="text" aria-label="Name" placeholder="Name" value={formik.values.name} onChange={formik.handleChange} />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="company" className="sr-only">Company Name</label>
            <Input name="company" type="text" aria-label="Company Name" placeholder="Company Name" value={formik.values.company} onChange={formik.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <Input name="email" type="email" aria-label="Email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="">
            <PhoneInput
              name="whatsapp"
              className="flex h-12 w-full rounded-none border-b border-foreground/60 !bg-transparent py-3 text-base shadow-sm"
              defaultCountry="in"
              value={formik.values.phone}
              onChange={(value) => formik.setFieldValue("phoneNumber", value)}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <Button type="submit" onClick={() => setSubmitted(true)} variant='secondary' className="w-full mt-10">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

const fields = ["PR", "Social Media", "Digital & CRM", "Brand Design", "Influencer Marketing", "Events & Activations"]
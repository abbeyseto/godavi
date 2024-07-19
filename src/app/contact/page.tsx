"use client";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.748817,
  lng: -73.985428,
};

const getCoordinates = async (address: string | number | boolean) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  if (data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  }
  return null;
};
const Map = ({ apiKey, address }: any) => {
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    if (address) {
      getCoordinates(address).then((coords) => {
        if (coords) {
          setCenter(coords);
        }
      });
    }
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setSubmitting(true);
    const to = "daniel.ameh@Godavi LLCstore.com";
    const subject = "Message from Godavi LLC Store";
    const text = formData.message;
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Introduction Email</title>
    </head>
    <body>
        
        <p>Hi Godavi LLC Store,</p>
        
        <p>You just recieved a message from <strong>${formData.name}</strong>. They've sent you a message from your website:</p>
        
        <h2>Message:</h2>
        <p><strong>From:</strong> ${formData.name} &lt;${formData.email}&gt;</p>
        <p><strong>Phone Number:</strong> ${formData.phone} </p>
        <p><strong>Company Name:</strong> ${formData.company} </p>
        <p><strong>Message:</strong> ${formData.message}</p>
        
        <p>Best regards,<br>
        Your Name</p>
        Godavi LLC Team.
    </body>
    </html>`;

    const emailStatus = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendemail`,
      { method: "POST", body: JSON.stringify({ to, subject, text, html }) }
    );
    const data = await emailStatus.json();
    console.log(data);
    if (data.message.includes("success")) {
      setSuccessMessage(data.message);
      reset(); // Clear form fields
    } else {
      setFailureMessage(data.message);
    }
    setSubmitting(false);
  };
  return (
    <div>
      {" "}
      <section id="contact" className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-gray-600">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">+19374890684</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-red-500" />
                <span className="text-gray-600">info@Godavistore.com</span>
              </div>
            </div>
            <div className="flex items-center justify-evenly gap-4">
              <Link className="hover:underline" href="#?">
                <FacebookIcon className="h-8 w-8 text-blue-700" />
              </Link>
              <Link className="hover:underline" href="#?">
                <TwitterIcon className="h-8 w-8 text-blue-400" />
              </Link>
              <Link className="hover:underline" href="#?">
                <InstagramIcon className="h-8 w-8 text-brown-700" />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2">
                <LocateIcon className="h-5 w-5 text-yellow-700" />
                <span className="text-gray-600">
                  7801 Congress St, New Port Richey, Florida, 34653
                </span>
              </div>
            </div>
            <div className="pt-4">
              <Map
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                address="7801 Congress St, New Port Richey, Florida, 34653"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <Input
                  {...register("name")}
                  required
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <Input
                  {...register("company")}
                  id="company"
                  placeholder="Enter your company"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  {...register("email")}
                  required
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <Input
                  {...register("phone")}
                  id="phone"
                  placeholder="Enter your phone number"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  {...register("message")}
                  id="message"
                  required
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                variant="default"
                size="default"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {successMessage && (
              <p className="text-green-900 text-md border-4 text-center py-3 md:py-5 px-10 rounded-lg border-lime-200 bg-green-100 font-semibold animate-pulse">
                {successMessage}
              </p>
            )}
            {failureMessage && (
              <p className="text-red-900 text-md border-4 text-center py-3 md:py-5 px-10 rounded-lg border-orange-200 bg-red-100 p-4 font-semibold animate-pulse">
                {failureMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

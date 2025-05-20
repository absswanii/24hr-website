"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "./actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
    errors?: Record<string, string[]>
  } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      if (result.success && formRef.current) {
        // Reset form on success using the ref
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitResult({
        success: false,
        message: "There was an error submitting your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
              required
            />
            {submitResult?.errors?.firstName && (
              <p className="mt-1 text-sm text-red-600">{submitResult.errors.firstName[0]}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
              required
            />
            {submitResult?.errors?.lastName && (
              <p className="mt-1 text-sm text-red-600">{submitResult.errors.lastName[0]}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
              required
            />
            {submitResult?.errors?.email && <p className="mt-1 text-sm text-red-600">{submitResult.errors.email[0]}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
              required
            />
            {submitResult?.errors?.phone && <p className="mt-1 text-sm text-red-600">{submitResult.errors.phone[0]}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              State/Region
            </label>
            <input
              type="text"
              id="region"
              name="region"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:ring-primary focus:border-primary"
            required
          ></textarea>
          {submitResult?.errors?.message && (
            <p className="mt-1 text-sm text-red-600">{submitResult.errors.message[0]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              MAKE AN APPOINTMENT / SET A MEETING
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="contactType" value="message" className="mr-2" defaultChecked />
                <span>Message</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="contactType" value="call" className="mr-2" />
                <span>Call</span>
              </label>
            </div>
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">PREFERRED CONTACT</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="preferredContact" value="email" className="mr-2" defaultChecked />
                <span>Email</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="preferredContact" value="phone" className="mr-2" />
                <span>Phone</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-start">
            <input type="checkbox" name="consent" className="mt-1 mr-2" required />
            <span className="text-sm">
              By checking this box, you consent to receiving text messages from 24HrTruckServices. You can reply STOP to
              opt-out at any time. For more details check our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {submitResult?.errors?.consent && (
            <p className="mt-1 text-sm text-red-600">{submitResult.errors.consent[0]}</p>
          )}
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {submitResult?.message && (
          <div
            className={`mt-4 p-3 rounded ${
              submitResult.success
                ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300"
            }`}
          >
            {submitResult.message}
          </div>
        )}
      </div>
    </form>
  )
}

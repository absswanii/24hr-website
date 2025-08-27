"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/custom-button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Truck,
  Users,
  Zap,
  Calendar,
  Target,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

export default function ServiceProviderLanding() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Navigate to the registration page with email parameter
    const registrationUrl = `https://sp.24hrtruckfix.com/register?email=${encodeURIComponent(
      email
    )}`;
    window.open(registrationUrl, "_blank");

    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "More Jobs Guaranteed",
      description:
        "Join our network and get connected to more work opportunities than ever before",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Exclusive Fleet Network",
      description:
        "Access our premium network of fleets and insurance companies actively seeking services",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Booking",
      description:
        "Use our AI assistant to book appointments faster and more efficiently",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Job Management",
      description:
        "AI helps you solidify jobs and optimize your schedule for maximum earnings",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted Platform",
      description:
        "Join thousands of service providers already growing their business with us",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "24/7 Support",
      description:
        "Get round-the-clock support to help you succeed and grow your business",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  Join Our Platform &
                  <br />
                  <span className="text-6xl md:text-8xl">Get More Jobs</span>
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect with our exclusive network of fleets and insurance
                companies. Plus, get access to AI tools that help you book more
                appointments, solidify jobs, and grow your business faster than
                ever.
              </motion.p>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gradient-to-r from-primary/20 to-secondary/20 shadow-2xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Enter your email to get started
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                          }}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-lg border-2 ${
                            emailError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20"
                          } bg-white dark:bg-gray-800 text-foreground placeholder-muted-foreground focus:ring-2 transition-all duration-200`}
                          required
                        />
                        {emailError && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                      >
                        {isSubmitting
                          ? "Getting Started..."
                          : "Join Now & Get More Jobs"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Service Providers Choose Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of successful service providers who are already
                growing their business with our platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get More Jobs?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait. Join our platform today and start connecting with
                more opportunities than ever before.
              </p>
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-white mr-3" />
                <span className="text-white text-lg font-semibold">
                  Free to join • Instant access • More jobs guaranteed
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Widget */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<the24hr widget_id="68a325b343bbe2e6630e38b1" isOrg="true"></the24hr>`,
        }}
      />
      <Script
        src="https://portal.24hrtruckfix.com/widget/the24hr-widget.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

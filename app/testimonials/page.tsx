"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonialsData from "../data/testimonials.json";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = testimonialsData;

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          推薦文
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          これまで一緒に働いた方々からいただいた評価です。
        </p>

        <div className="max-w-5xl mx-auto grid gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-8 relative">
                  <div className="absolute top-8 left-8 w-10 h-10 flex items-center justify-center bg-indigo-600/20 rounded-full">
                    <Quote className="w-5 h-5 text-indigo-400" />
                  </div>

                  <div className="pl-16">
                    <blockquote className="text-zinc-300 text-lg italic mb-6 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-400 text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>

                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-zinc-400 text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

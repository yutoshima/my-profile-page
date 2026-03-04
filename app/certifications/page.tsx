"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import certificationsData from "../data/certifications.json";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string | null;
  credentialUrl: string;
  description: string;
}

const certifications: Certification[] = certificationsData;

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const [year, month] = dateString.split("-");
  return `${year}年${month}月`;
};

export default function CertificationsPage() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          資格・認定
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          継続的な学習を通じて取得した技術関連の資格や認定の一覧です。
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl font-bold text-white">
                        {cert.name}
                      </h2>
                      <div className="inline-flex items-center justify-center p-2 bg-indigo-600/20 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-indigo-400"
                          aria-hidden="true"
                        >
                          <title>認定マーク</title>
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-2 text-zinc-400 text-sm">
                      発行元: {cert.issuer}
                    </div>
                    <div className="mb-3 flex gap-x-4 text-zinc-500 text-sm">
                      <span>取得: {formatDate(cert.issueDate)}</span>
                      {cert.expirationDate && (
                        <span>
                          有効期限: {formatDate(cert.expirationDate)}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-300 mb-4">{cert.description}</p>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>資格情報を表示</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

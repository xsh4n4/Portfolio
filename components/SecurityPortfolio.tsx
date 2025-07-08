
// app/components/SecurityPortfolio.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const securityData = [
  {
    title: "Immunefi - Chainlink",
    severity: "High Severity Bug Report",
    description: "Reported a price oracle manipulation bug affecting Chainlink price feeds.",
    link: "https://medium.com/@suhana-chainlink-bug",
    status: "Accepted + Rewarded",
  },
  {
    title: "Code4rena - Synthetix Audit",
    severity: "Medium Severity Finding",
    description: "Identified incorrect access control in collateral management logic.",
    link: "https://medium.com/@suhana-synthetix-c4",
    status: "Validated in Audit Contest",
  },
  {
    title: "Immunefi - OlympusDAO",
    severity: "Critical Vulnerability (Rejected)",
    description: "Submitted a flash loan exploit vector. Not accepted, but detailed analysis provided.",
    link: "https://medium.com/@suhana-olympus-writeup",
    status: "Not Rewarded - Proof of Skill",
  },
];

export default function SecurityPortfolio() {
  return (
    <section className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-cyan-400">
          Bug Bounty & Security Research
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {securityData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-slate-900 border border-cyan-600 rounded-2xl p-6 hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h3>
              <p className="text-sm text-cyan-500 mb-1">{item.severity}</p>
              <p className="text-base mb-4">{item.description}</p>
              <p className="text-sm italic text-green-400 mb-2">{item.status}</p>
              <Link
                href={item.link}
                target="_blank"
                className="text-blue-400 hover:underline text-sm"
              >
                Read full writeup ↗
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

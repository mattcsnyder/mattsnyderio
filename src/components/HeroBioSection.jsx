import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import JiggleSpinComponent from './JiggleSpinComponent';
import { mattsnyderio } from '../assets';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const BioModal = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: 'rgba(2, 6, 23, 0.82)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[calc(100vh-3rem)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">It's nice to meet you</h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white text-2xl leading-none transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-8 py-6 flex flex-col gap-4 text-white/90 leading-relaxed text-sm sm:text-base">
          <p>I'm Matt, a full stack engineer focused on creating software that helps.</p>
          <p>I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?</p>
          <p>Today, I run <strong>Snydex Platforms</strong>, where I design and build custom SaaS products and internal systems for businesses that have outgrown spreadsheets, disconnected tools, or fragile workflows. The focus is always the same: practical architecture, clean user experience, and systems that teams can adopt quickly without creating long-term maintenance risk.</p>
          <p>Most engagements fall into a few categories. Greenfield platform builds, where we take an idea from 0 to production. Modernization work, where we replace legacy systems with something scalable. And embedded delivery, where I work directly inside a team to ship production systems in tight timelines. The goal is not just to build software, but to create systems that hold up under real operations.</p>
          <p>A lot of this work has turned into full platforms.</p>
          <ul className="flex flex-col gap-2 pl-4 list-disc text-white/80">
            <li><strong>MuseumIQ</strong> is a collections and operations system for museums, centralizing artifacts, exhibits, and institutional workflows into a single platform.</li>
            <li><strong>RestaurantIQ</strong> focuses on operational intelligence for hospitality teams, streamlining documentation, compliance, and day-to-day workflows.</li>
            <li><strong>WeedBuddy</strong> is a compliance-ready retail platform for dispensaries, unifying product tracking, reporting, and operational processes.</li>
            <li><strong>Snydex Invoice</strong> is a modern billing and document workflow system designed to automate invoicing and financial operations at scale.</li>
          </ul>
          <p>Each of these started the same way. A real operational problem, usually messy, repetitive, and high-friction. Instead of patching around it, I built systems designed to fully replace the workflow with something structured, reliable, and scalable.</p>
          <p>Under the hood, I spend most of my time working across Go, Python, React, and PostgreSQL, building multi-tenant systems, high-volume data pipelines, and real-time platforms. Infrastructure typically lives across AWS and Cloudflare, optimized for performance, cost, and reliability.</p>
          <p>Before starting Snydex, I worked at <strong>Flatiron Health</strong> on ML platform systems, where I focused on improving data pipelines, observability, and production reliability for machine learning workflows. That experience heavily shapes how I build today. I think in terms of systems that need to run continuously, handle real data, and be debuggable when things go wrong.</p>
          <p>More recently, I've been leaning into AI-enabled workflows across products. Not as a layer on top, but as part of the system itself — using models to automate decisions, structure unorganized data, and unlock new ways to interact with information.</p>
          <p>At the core, I'm most interested in building products from the ground up. Especially ones that take messy, real-world operations and turn them into clean, scalable systems that people rely on every day.</p>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-white/10 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/mattsnyder1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors text-sm font-medium"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/mattsnyder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="mailto:matt@snydex.io"
            className="flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors text-sm font-medium"
          >
            <FaEnvelope size={20} />
            Email
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const HeroBioSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Profile Picture (1/3) */}
        <div className="flex justify-center items-center md:col-span-1">
          <JiggleSpinComponent>
            <img
              src={mattsnyderio}
              alt="Matt Snyder"
              className="w-[22rem] h-auto max-w-full rounded-2xl shadow-lg"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
            />
          </JiggleSpinComponent>
        </div>

        {/* Right: Short Bio (2/3) */}
        <div className="md:col-span-2 w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-6xl p-6 md:p-10 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-20 mx-auto md:mx-8">
            <h2 className="font-bold text-[clamp(1.25rem,3vw,2rem)] text-white mb-2">About Me</h2>
            <div className="flex flex-col gap-4 text-[clamp(0.9rem,1.6vw,1.1rem)] text-white/90 leading-relaxed">
              <p>I'm Matt, a full stack engineer focused on creating software that helps.</p>
              <p>I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?</p>
              <p>Today, I run Snydex Platforms, where I design and build custom SaaS products and internal systems for businesses that have outgrown spreadsheets, disconnected tools, or fragile workflows. The focus is always the same: practical architecture, clean user experience, and systems that teams can adopt quickly without creating long-term maintenance risk.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="self-start text-yellow-400 hover:text-yellow-300 text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <BioModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default HeroBioSection;

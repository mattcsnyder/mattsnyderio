import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutMeModal = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

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
        className="relative flex max-h-[calc(100vh-3rem)] w-full max-w-2xl flex-col rounded-2xl border border-white/20 bg-gray-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-8 pb-4 pt-7">
          <h2 className="text-2xl font-bold text-white">It&apos;s nice to meet you</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-white/50 transition-colors hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto px-8 py-6 text-sm leading-relaxed text-white/90 sm:text-base">
          <p>I&apos;m Matt, a full stack engineer focused on creating software that helps people and businesses.</p>
          <p>I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?</p>
          <p>Today, I run <strong>Snydex Platforms</strong>, where I design and build custom SaaS products and internal systems for businesses that have outgrown spreadsheets, disconnected tools, or fragile workflows.</p>
          <p>Most engagements fall into a few categories. Greenfield platform builds, where we take an idea from 0 to production. Modernization work, where we replace legacy systems with something scalable. And embedded delivery, where I work directly inside a team to ship production systems in tight timelines. The goal is not just to build software, but to create systems that hold up under real operations.</p>
          <p>A lot of this work has turned into full platforms.</p>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                { name: 'MuseumIQ', desc: 'Collections and operations system for museums, centralizing artifacts, exhibits, and institutional workflows into a single platform.' },
                { name: 'RestaurantIQ', desc: 'Operational intelligence for hospitality teams, streamlining documentation, compliance, and day-to-day workflows.' },
                { name: 'WeedBuddy', desc: 'Compliance-ready retail platform for dispensaries, unifying product tracking, reporting, and operational processes.' },
                { name: 'Snydex Invoice', desc: 'Modern billing and document workflow system designed to automate invoicing and financial operations at scale.' },
              ].map(({ name, desc }) => (
                <tr key={name} className="border-b border-white/10 last:border-0">
                  <td className="w-[140px] whitespace-nowrap py-2 pr-4 align-top font-bold text-white">{name}</td>
                  <td className="py-2 align-top text-white/75">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Each of these started the same way. A real operational problem, usually messy, repetitive, and high-friction. Instead of patching around it, I built systems designed to fully replace the workflow with something structured, reliable, and scalable.</p>
          <p>Under the hood, I spend most of my time working across Go, Python, React, and PostgreSQL, building multi-tenant systems, high-volume data pipelines, and real-time platforms. Infrastructure typically lives across AWS and Cloudflare, optimized for performance, cost, and reliability.</p>
          <p>Before starting Snydex, I worked at <strong>Flatiron Health</strong> on ML Prediction platforms for the pursuit of extending and improving the lives of every person with cancer. I focused on improving data pipelines, observability, and production reliability for machine learning workflows. That experience heavily shapes how I build today. I think in terms of systems that need to run continuously, handle real data, and be debuggable when things go wrong.</p>
          <p>At the core, I&apos;m most interested in building products from the ground up. Especially ones that take messy, real-world operations and turn them into clean, scalable systems that people rely on every day.</p>
        </div>

        <div className="flex items-center justify-center gap-6 border-t border-white/10 px-8 py-5">
          <a
            href="https://www.linkedin.com/in/mattsnyder1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-blue-400"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/mattsnyder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="mailto:matt@snydex.io"
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-yellow-400"
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

export default AboutMeModal;

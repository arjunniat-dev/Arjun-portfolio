import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = {
    name: 'M. Tirumalai Arjun',
    email: 'tirumalaiarjun09@gmail.com',
    phone: '+91 9363855535',
    github: 'https://github.com/arjunniat-dev',
    linkedin: 'https://www.linkedin.com/in/arjun-undefined-b357a5447/',
    instagram: 'https://instagram.com/txru_a.rxjn',
    instagramHandle: '@txru_a.rxjn',
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Please provide a message with at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>GET IN TOUCH</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">CONNECT WITH ARJUN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Build the Future of AI Together
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Whether you have an internship opportunity, collaborative research idea, technical feedback, or simply want to connect with an aspiring engineer, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am actively seeking internship collaborations, technical mentorship, and developer networking. Reach me directly through any of these verified channels.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 font-mono block">Email Address</span>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-indigo-950/80 text-indigo-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 font-mono block">Phone / WhatsApp</span>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors truncate block"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group block"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-purple-950/80 text-purple-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 font-mono block">GitHub Profile</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-purple-300 transition-colors truncate block">
                        github.com/arjunniat-dev
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>

                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group block"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 font-mono block">LinkedIn Profile</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors truncate block">
                        in/arjun-undefined-b357a5447
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>

                {/* Instagram */}
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group block"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-pink-950/80 text-pink-400 shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 font-mono block">Instagram</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-pink-300 transition-colors truncate block">
                        {contactInfo.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>

              {/* Privacy and Direct Action Bar */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Your contact details are respected and handled with absolute privacy.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill in the form below and Arjun will reply promptly to your email.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-xl bg-[#091124] border border-cyan-800/60 space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your message has been prepared for transmission. You can also send directly via email client anytime.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject / Topic <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Inquiry / AI Project Collaboration"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                        formErrors.subject ? 'border-rose-500' : 'border-slate-800'
                      } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Arjun, I noticed your portfolio and interest in AI/ML engineering..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-800'
                      } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Processing message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Arjun</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

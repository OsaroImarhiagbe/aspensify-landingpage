"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  // Handle modal close
  const handleClose = () => {
    setIsOpen(false);
    setSuccess(false);
    setForm({ name: "", email: "" });
  };

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.name.trim() || !form.email.trim()) return;

      setLoading(true);
      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email }),
        });

        if (!response.ok) throw new Error("Failed to submit waitlist");

        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <section id='cta' className="relative py-20 px-6 text-center text-gray-900">
      {/* Background Shape */}
      <div className="absolute inset-x-0 top-10 -z-10 flex justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-emerald-500 to-emerald-900 opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* CTA Text */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-spacegrotesk text-3xl sm:text-4xl font-bold mb-6"
      >
        Take Control of Your Finances Today 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="font-inter text-lg sm:text-xl max-w-2xl mx-auto mb-8"
      >
        Join Aspensify and start building smarter budgets. Sign up now and be
        the first to experience financial clarity.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer font-spacegrotesk px-8 py-4 bg-white text-emerald-700 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
        >
          Join the Waitlist
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-left"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Join the Aspensify Waitlist ✨
              </h3>

              {success ? (
                <div className="space-y-4">
                  <p className="text-green-600 font-medium">
                    🎉 Thanks for joining! We’ll keep you updated.
                  </p>
                  <button
                    onClick={handleClose}
                    className="w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="cursor-pointer flex-1 px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Join Waitlist"}
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="cursor-pointer px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

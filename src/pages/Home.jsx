import { motion } from "framer-motion";
import { StatCard } from "../components/StatCard";
import { PricingCard } from "../components/PricingCard";
import { FAQItem } from "../components/FAQItem";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { DomainSearch } from "../components/DomainSearch";
import { FloatingImage } from "../components/FloatingImage";

// Updated stable video link
const heroVideo =
  "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4";
const heroImg =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

const Home = () => {
  const testimonials = [
    {
      name: "Afolabi Williams",
      role: "CEO, TechNode",
      quote:
        "WefitHost solved our latency issues for our Lagos-based users instantly.",
    },
    {
      name: "Sarah K.",
      role: "Freelance Dev",
      quote:
        "Finally, a host that accepts local cards without the international transaction headache.",
    },
    {
      name: "Musa Cheni",
      role: "E-commerce Owner",
      quote:
        "The WordPress optimization is world-class. My store loads in under 1.5 seconds.",
    },
  ];

  const sharedFeatures = [
    "Free SSL Certificate",
    "99.9% Uptime",
    "Local IP Addresses",
    "24/7 Priority Support",
  ];

  const faqData = [
    {
      id: 1,
      question: "Can I pay in Nigerian Naira or other local currencies?",
      answer:
        "Absolutely. We integrate with major local payment gateways like Flutterwave and Paystack to ensure you can pay in Naira...",
    },
    {
      id: 2,
      question: "Where exactly are your servers located?",
      answer:
        "We utilize a strategic network of dedicated edge nodes located in Lagos, Johannesburg, and Nairobi...",
    },
    {
      id: 3,
      question: "Do you offer free migrations from my current host?",
      answer:
        "Yes, our technical team provides a white-glove migration service at no additional cost...",
    },
    {
      id: 4,
      question: "What kind of support can I expect if I run into issues?",
      answer:
        "We provide 24/7 priority support through multiple channels, including live chat, email, and local ticketing...",
    },
  ];

  return (
    <div className="font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden min-h-[85vh] flex items-center bg-[#0b1120]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b1120]/70 via-[#0b1120]/90 to-[#0b1120] z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Global Speed. <br />{" "}
              <span className="text-indigo-500 italic">African Heart.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
              Experience hosting built for the continent. Deploy in seconds on
              infrastructure optimized for Lagos, Nairobi, and Johannesburg.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-500/40 transition-all active:scale-95">
                Get Started Now
              </button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
                View All Plans
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <FloatingImage src={heroImg} alt="WefitHost Interface" />
          </motion.div>
        </div>
      </section>

      {/* 2. Domain Search */}
      <section className="bg-[#0b1120] relative pb-20 px-6">
        <div className="relative z-10">
          <DomainSearch />
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <StatCard
            label="Network Uptime"
            value="99.99%"
            subtext="Enterprise-grade reliability"
          />
          <StatCard
            label="Local Nodes"
            value="12+"
            subtext="Across key African hubs"
          />
          <StatCard
            label="Active Sites"
            value="25k+"
            subtext="Powering the next generation"
          />
        </div>
      </section>

      {/* 4. Pricing Section (EQUAL HEIGHT FIXED) */}
      <section className="bg-[#0b1120] py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Simple Pricing. No Hidden Fees.
          </h2>
          <p className="text-slate-400 font-medium">
            Transparent billing in your local currency.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            plan="Starter"
            price="2,500"
            features={sharedFeatures.slice(0, 3)}
            isFeatured={false}
          />
          <PricingCard
            plan="Professional"
            price="5,800"
            features={sharedFeatures}
            isFeatured={true}
          />
          <PricingCard
            plan="Business"
            price="12,000"
            features={[...sharedFeatures, "Dedicated Resources"]}
            isFeatured={false}
          />
        </div>
      </section>

      {/* 5. Testimonials Section (EQUAL HEIGHT) */}
      <section className="bg-[#0b1120] pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
      {/* 6. FAQ Section */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase tracking-[0.2em] mb-4">
              Common Questions
            </h2>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-4">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                dark={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="bg-white py-24 px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="max-w-6xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            Ready to grow your <br />
            online presence?
          </h2>
          <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
            Start Your 14-Day Free Trial
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

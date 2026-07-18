import { IconPhone, IconEmail, IconLocation } from "./icons";
import ScrollReveal from "./ScrollReveal";

const leaders = [
  {
    name: "Ali Mohsin Lodhi",
    role: "Director",
    accent: "#1d94d5",
    phone: "+92 3433027779",
    tel: "tel:+923433027779",
    contact: { type: "email" as const, value: "powerfusion.nc@gmail.com" },
  },
  {
    name: "Umair Ashfaque",
    role: "Manager",
    accent: "#fb9522",
    phone: "+92 300 0000000",
    tel: "tel:+923000000000",
    contact: { type: "location" as const, value: "Karachi, Sindh, Pakistan" },
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up">
          <div className="mb-16 max-w-2xl">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
              style={{ color: "#1d94d5" }}
            >
              Direct Line
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "#0b0c0e" }}>
              Get In Touch
            </h2>
            <p className="text-lg" style={{ color: "#4b5058" }}>
              Ready to start your next electrical project? Reach our leadership
              team directly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} direction="left" delay={100 + i * 150}>
                <div
                  className="bg-white p-8 rounded-sm border border-l-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  style={{ borderColor: "#e2e5e9", borderLeftColor: leader.accent }}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-6">
                    <h3 className="text-2xl font-bold" style={{ color: "#0b0c0e" }}>
                      {leader.name}
                    </h3>
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-wider"
                      style={{ color: leader.accent }}
                    >
                      {leader.role}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center mr-4 shrink-0"
                        style={{ backgroundColor: "#f0f1f3", color: "#0b0c0e" }}
                      >
                        <IconPhone size={18} />
                      </div>
                      <a
                        href={leader.tel}
                        className="font-medium text-lg hover:opacity-70"
                        style={{ color: "#131519" }}
                      >
                        {leader.phone}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center mr-4 shrink-0"
                        style={{ backgroundColor: "#f0f1f3", color: "#0b0c0e" }}
                      >
                        {leader.contact.type === "email" ? (
                          <IconEmail size={18} />
                        ) : (
                          <IconLocation size={18} />
                        )}
                      </div>
                      {leader.contact.type === "email" ? (
                        <a
                          href={`mailto:${leader.contact.value}`}
                          className="font-medium text-lg hover:opacity-70 break-all"
                          style={{ color: "#131519" }}
                        >
                          {leader.contact.value}
                        </a>
                      ) : (
                        <span className="font-medium text-lg" style={{ color: "#131519" }}>
                          {leader.contact.value}
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Availability / response-SLA panel — quiet off-white tone, not a copy of the cards beside it */}
          <ScrollReveal direction="right" delay={200} className="h-full">
            <div
              className="h-full min-h-[420px] flex flex-col p-10 rounded-sm border shadow-sm transition-shadow duration-300 hover:shadow-md"
              style={{ backgroundColor: "#f5f6f7", borderColor: "#e2e5e9" }}
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full led-pulse" style={{ backgroundColor: "#99c747" }} />
                <span
                  className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
                  style={{ color: "#131519" }}
                >
                  Accepting New Enquiries
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-6" style={{ color: "#0b0c0e" }}>
                Response SLA
              </h3>

              <dl className="space-y-5 mb-10">
                <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: "#e2e5e9" }}>
                  <dt className="text-sm" style={{ color: "#6b7280" }}>Standard enquiries</dt>
                  <dd className="font-mono text-sm font-semibold" style={{ color: "#0b0c0e" }}>&lt; 24 hrs</dd>
                </div>
                <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: "#e2e5e9" }}>
                  <dt className="text-sm" style={{ color: "#6b7280" }}>Emergency call-out</dt>
                  <dd className="font-mono text-sm font-semibold" style={{ color: "#0b0c0e" }}>&lt; 60 min</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-sm" style={{ color: "#6b7280" }}>Coverage area</dt>
                  <dd className="font-mono text-sm font-semibold" style={{ color: "#0b0c0e" }}>Sindh, PK</dd>
                </div>
              </dl>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5058" }}>
                Send project details, site location, and scale — we&rsquo;ll come
                back with next steps.
              </p>

              <a
                href="mailto:powerfusion.nc@gmail.com"
                className="mt-auto inline-flex items-center justify-center px-8 py-4 font-bold rounded-sm transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "#fb9522", color: "#0b0c0e" }}
              >
                Send us an Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
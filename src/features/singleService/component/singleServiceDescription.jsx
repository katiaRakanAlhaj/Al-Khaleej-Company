import i18next from "i18next";

const SingleServiceDescription = ({ serviceByIdData }) => {
  const service = serviceByIdData?.data;

  if (!service) return null;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Text content */}
          <div className="order-2 lg:order-1">
            {/* Accent line + label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-secondary" />
              <span className="md:text-xl text-[1rem] font-semibold uppercase tracking-[0.25em] text-[#00348A]">
                {i18next.t("Services.Service_Details")}
              </span>
            </div>

            {/* Title */}
            <h2 className="relative md:text-3xl text-[1.5rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {service.title}
              <span className="mt-4 block h-1 w-20 rounded-full bg-secondary" />
            </h2>

            {/* Description (renders HTML from API) */}
            <div
              className="prose prose-slate mt-8 max-w-none text-base leading-relaxed text-slate-600 sm:text-lg prose-p:my-3 prose-br:block"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </div>

          {/* RIGHT — Image with decorative frame */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset accent frame */}
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border-2 border-secondary" />
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-gradient-to-br from-amber-100/60 to-sky-100/60" />

              {/* Main image card */}
              <div className="group relative md:h-[30rem] h-[25rem] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-300/40 ring-1 ring-slate-900/5">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                    <span className="text-sm font-medium">
                      No image available
                    </span>
                  </div>
                )}

                {/* Soft gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating icon badge */}
              {service.icon && (
                <div className="absolute -bottom-6 left-6 flex h-20 w-20 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-300/50 ring-1 ring-slate-900/5">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes for the float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default SingleServiceDescription;

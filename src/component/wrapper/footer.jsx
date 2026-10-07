import { useLocation, Link } from "react-router-dom";
import locationFooter from "../../assets/images/locationFooter.svg";
import emailFooter from "../../assets/images/emailFooter.svg";
import callFooter from "../../assets/images/callFooter.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// ============ EXTRACTED CLASSES ============
const classes = {
  // ===== Wrapper =====
  wrapper: "lg:mt-[6rem] mt-[3rem] overflow-hidden",
  footer:
    "relative bg-gradient-to-br from-[#2c3644] via-[#384454] to-[#2a3340] text-white pt-20 pb-8 font-sans",
  // Decorative glow overlays
  glowTop:
    "pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#099EC8]/20 blur-[120px]",
  glowBottom:
    "pointer-events-none absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#099EC8]/10 blur-[120px]",
  container: "container1 mx-auto relative z-10",

  // ===== Grids =====
  mainGrid: "grid lg:grid-cols-12 grid-cols-1 gap-10 lg:gap-8",

  // ===== Column 1: Logo + Description + Quick Links =====
  firstCol: "lg:col-span-4 col-span-1",
  logoImg: "h-14 w-auto object-contain drop-shadow-lg",
  description:
    "text-white/85 font-[400] whitespace-break-spaces mt-5 leading-relaxed text-lg lg:w-[92%] w-[95%]",

  // Quick Links
  quickLinksWrapper: "mt-8",
  quickLinksHeader: "flex items-center gap-3 mb-5",
  quickLinksIconWrapper:
    "w-9 h-9 rounded-xl bg-gradient-to-br from-[#099EC8]/30 to-[#099EC8]/10 border border-[#099EC8]/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_-4px_rgba(9,158,200,0.5)]",
  quickLinksIcon: "w-4 h-4 text-[#4FC3E8]",
  quickLinksTitle:
    "text-white font-bold text-lg uppercase tracking-[0.15em] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-gradient-to-r after:from-[#099EC8] after:to-transparent",
  quickLinksGrid: "grid grid-cols-2 gap-x-5 gap-y-3",
  quickLinkItem:
    "group transition-all duration-300 text-[1.2rem] text-white/80 hover:text-[#4FC3E8] flex items-center gap-2.5 hover:translate-x-1",
  quickLinkDot:
    "w-1.5 h-1.5 rounded-full bg-[#099EC8]/50 group-hover:bg-[#4FC3E8] group-hover:shadow-[0_0_8px_rgba(9,158,200,0.9)] transition-all duration-300 flex-shrink-0",
  quickLinkActive:
    "text-[#4FC3E8] font-semibold [&>span]:bg-[#4FC3E8] [&>span]:shadow-[0_0_8px_rgba(9,158,200,0.9)]",

  // ===== Column 2: Notice =====
  noticeCol: "lg:col-span-4 col-span-1 flex items-start",
  noteWrapper:
    "relative w-full rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/20 p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]",
  noteAccent:
    "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#099EC8] via-[#4FC3E8] to-[#099EC8]/20",
  noteGlow:
    "pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#099EC8]/25 blur-3xl",
  noteHeader: "relative flex items-center gap-3 mb-3",
  noteIconWrapper:
    "w-9 h-9 rounded-xl bg-gradient-to-br from-[#099EC8]/40 to-[#099EC8]/10 border border-[#099EC8]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_-4px_rgba(9,158,200,0.6)]",
  noteIcon: "w-4 h-4 text-[#4FC3E8]",
  noteTitle: "text-[#4FC3E8] font-bold text-lg uppercase tracking-[0.18em]",
  noteText:
    "relative text-white/90 text-[1.02rem] leading-relaxed whitespace-pre-line font-[400]",

  // ===== Column 3: Contact =====
  contactCol: "lg:col-span-4 col-span-1",
  contactTitle:
    "font-bold text-lg uppercase tracking-[0.15em] text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-gradient-to-r after:from-[#099EC8] after:to-transparent",
  contactWrapper: "space-y-6",
  branchWrapper:
    "relative pl-4 border-l border-white/10 hover:border-[#099EC8]/50 transition-colors duration-300 space-y-3",
  branchTitle: "text-[#4FC3E8] font-bold text-lg tracking-wide",

  // Contact rows & Icon Wrapper (Matched with Notice Icon Style)
  contactRow: "flex items-start gap-3 group",
  contactIconWrapper:
    "w-9 h-9 rounded-xl bg-gradient-to-br from-[#099EC8]/40 to-[#099EC8]/10 border border-[#099EC8]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_-4px_rgba(9,158,200,0.6)] group-hover:border-[#099EC8] transition-all duration-300",
  contactIcon: "w-4 h-4 brightness-200",
  contactText:
    "text-white/90 text-[0.98rem] group-hover:text-white transition-colors break-all self-center",
  contactColFlex: "flex flex-col gap-2.5 justify-center",

  // Phone label
  phoneRow: "flex items-center gap-2 flex-wrap",
  phoneLabel:
    "inline-block text-md font-semibold tracking-[0.08em] uppercase px-2 py-[3px] rounded-md bg-[#099EC8]/15 text-[#4FC3E8] border border-[#099EC8]/35",
  phoneNumber:
    "text-white text-[0.98rem] font-medium tracking-wide group-hover:text-[#4FC3E8] transition-colors",

  // Support widget
  supportCard:
    "relative flex flex-col gap-3 rounded-2xl p-4 mt-3 overflow-hidden bg-gradient-to-br from-[#099EC8]/20 via-[#099EC8]/10 to-transparent border border-[#099EC8]/40 shadow-[0_8px_24px_-8px_rgba(9,158,200,0.5)]",
  supportGlow:
    "pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#099EC8]/30 blur-3xl",
  supportInfo: "relative flex items-center gap-3",
  supportIconWrapper:
    "w-10 h-10 rounded-xl bg-gradient-to-br from-[#099EC8]/40 to-[#099EC8]/10 border border-[#099EC8]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_-4px_rgba(9,158,200,0.7)]",
  supportLabel:
    "text-[0.95rem] font-bold text-[#4FC3E8] uppercase tracking-[0.1em] block",
  supportNumberText:
    "relative text-lg font-semibold tracking-[0.05em] text-white",
  supportNumberRow: "relative flex items-center gap-2 flex-wrap",

  // ===== Divider & copyright =====
  divider:
    "w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent mt-14",
  copyrightRow:
    "lg:flex font-bold justify-between items-center mt-6 text-white/70 text-lg",
};

// ============ COMPONENT ============
const Footer = ({ contactData, homePageData }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();

  const Links = [
    { name: t("navbar.navLinks.home"), path: `/${currentLang}` },
    { name: t("navbar.navLinks.about"), path: `/${currentLang}/about` },
    { name: t("navbar.navLinks.services"), path: `/${currentLang}/Services` },
    { name: t("navbar.navLinks.projects"), path: `/${currentLang}/Projects` },
    { name: t("navbar.navLinks.news"), path: `/${currentLang}/News` },
    { name: t("navbar.navLinks.branches"), path: `/${currentLang}/Branches` },
    { name: t("navbar.navLinks.clients"), path: `/${currentLang}/Clients` },
    { name: t("navbar.navLinks.contactUs"), path: `/${currentLang}/Contact` },
  ];

  const isActiveLink = (path) => {
    if (path === `/${currentLang}`) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const data = contactData?.data;

  const renderQuickLink = (link, index) => {
    const isActive = isActiveLink(link.path);
    return (
      <li key={index}>
        <Link
          to={link.path}
          className={`${classes.quickLinkItem} ${
            isActive ? classes.quickLinkActive : ""
          }`}
        >
          <span className={classes.quickLinkDot}></span>
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        {/* Decorative glows */}
        <div className={classes.glowTop}></div>
        <div className={classes.glowBottom}></div>

        <div className={classes.container}>
          {/* ===== 3-Column Main Grid ===== */}
          <div className={classes.mainGrid}>
            {/* ===== Column 1: Logo + Description + Quick Links ===== */}
            <div className={classes.firstCol}>
              <img
                src={homePageData?.data?.footer?.logo}
                alt="Logo"
                className={classes.logoImg}
              />
              <p className={classes.description}>
                {homePageData?.data?.footer?.description}
              </p>

              {/* Quick Links */}
              <div className={classes.quickLinksWrapper}>
                <div className={classes.quickLinksHeader}>
                  <div className={classes.quickLinksIconWrapper}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={classes.quickLinksIcon}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <span className={classes.quickLinksTitle}>
                    {t("quick_links")}
                  </span>
                </div>
                <ul className={classes.quickLinksGrid}>
                  {Links.map(renderQuickLink)}
                </ul>
              </div>
            </div>

            {/* ===== Column 2: Notice ===== */}
            <div className={classes.noticeCol}>
              {homePageData?.data?.footer?.note && (
                <div className={classes.noteWrapper}>
                  <span className={classes.noteAccent}></span>
                  <div className={classes.noteGlow}></div>

                  <div className={classes.noteHeader}>
                    <div className={classes.noteIconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={classes.noteIcon}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>
                    <span className={classes.noteTitle}>
                      {i18next.t("footer.note_title") || "Important Notice"}
                    </span>
                  </div>
                  <p className={classes.noteText}>
                    {homePageData?.data?.footer?.note}
                  </p>
                </div>
              )}
            </div>

            {/* ===== Column 3: Contact ===== */}
            <div className={classes.contactCol}>
              <h3 className={classes.contactTitle}>{t("contact_us")}</h3>
              <div className={classes.contactWrapper}>
                {/* Branch 1 */}
                <div className={classes.branchWrapper}>
                  <h3 className={classes.branchTitle}>{data?.title1}</h3>

                  {(data?.first_phone || data?.second_phone) && (
                    <div className={classes.contactRow}>
                      <div className={classes.contactIconWrapper}>
                        <img
                          src={callFooter}
                          alt="Phone"
                          className={classes.contactIcon}
                        />
                      </div>
                      <div className={classes.contactColFlex}>
                        {data?.first_phone && (
                          <div className={classes.phoneRow}>
                            <span className={classes.phoneNumber}>
                              {data.first_phone}
                            </span>
                            <span className={classes.phoneLabel}>
                              {i18next.t("footer.managing_director")}
                            </span>
                          </div>
                        )}
                        {data?.second_phone && (
                          <div className={classes.phoneRow}>
                            <span className={classes.phoneNumber}>
                              {data.second_phone}
                            </span>
                            <span className={classes.phoneLabel}>
                              {i18next.t("footer.managing_director")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {(data?.first_email || data?.second_email) && (
                    <div className={classes.contactRow}>
                      <div className={classes.contactIconWrapper}>
                        <img
                          src={emailFooter}
                          alt="Email"
                          className={classes.contactIcon}
                        />
                      </div>
                      <div className={classes.contactColFlex}>
                        {data?.first_email && (
                          <span className={classes.contactText}>
                            {data.first_email}
                          </span>
                        )}
                        {data?.second_email && (
                          <span className={classes.contactText}>
                            {data.second_email}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Branch 2 */}
                <div className={classes.branchWrapper}>
                  <h3 className={classes.branchTitle}>{data?.title2}</h3>

                  {data?.third_phone && (
                    <div className={classes.contactRow}>
                      <div className={classes.contactIconWrapper}>
                        <img
                          src={callFooter}
                          alt="Phone"
                          className={classes.contactIcon}
                        />
                      </div>
                      <div className={classes.phoneRow + " self-center"}>
                        <span className={classes.phoneNumber}>
                          {data.third_phone}
                        </span>
                        <span className={classes.phoneLabel}>
                          {i18next.t("footer.deputy_director")}
                        </span>
                      </div>
                    </div>
                  )}

                  {data?.third_email && (
                    <div className={classes.contactRow}>
                      <div className={classes.contactIconWrapper}>
                        <img
                          src={emailFooter}
                          alt="Email"
                          className={classes.contactIcon}
                        />
                      </div>
                      <span className={classes.contactText}>
                        {data.third_email}
                      </span>
                    </div>
                  )}
                </div>

                {/* Support Widget */}
                {(data?.support_number || data?.support_number_2) && (
                  <div className={classes.supportCard}>
                    <div className={classes.supportGlow}></div>

                    <div className={classes.supportInfo}>
                      <div className={classes.supportIconWrapper}>
                        <img
                          src={callFooter}
                          alt="Support"
                          className="w-4 h-4 brightness-200"
                        />
                      </div>
                      <span className={classes.supportLabel}>
                        {i18next.t("footer.customer_service")}
                      </span>
                    </div>
                    <div className="relative flex flex-col gap-2">
                      {data?.support_number && (
                        <div className={classes.supportNumberRow}>
                          <span className={classes.supportNumberText}>
                            {data.support_number}
                          </span>
                        </div>
                      )}
                      {data?.support_number_2 && (
                        <div className={classes.supportNumberRow}>
                          <span className={classes.supportNumberText}>
                            {data.support_number_2}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={classes.divider}></div>
          <div className={classes.copyrightRow}>
            <p>{homePageData?.data?.footer?.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

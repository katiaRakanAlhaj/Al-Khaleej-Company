import { useLocation, Link } from "react-router-dom";
import locationFooter from "../../assets/images/locationFooter.svg";
import emailFooter from "../../assets/images/emailFooter.svg";
import callFooter from "../../assets/images/callFooter.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// ============ EXTRACTED CLASSES ============
const classes = {
  // Wrapper
  wrapper: "lg:mt-[6rem] mt-[3rem] overflow-hidden",
  footer: "bg-[#111620] h-auto text-white pt-16 pb-8 font-sans",
  container: "container1 mx-auto",

  // Grids
  mainGrid: "grid lg:grid-cols-12 grid-cols-1",
  innerGrid: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4",

  // First column
  firstCol: "lg:col-span-4 col-span-1",
  logoImg: "",
  description:
    "text-white font-[400] whitespace-break-spaces opacity-80 mt-[1rem] leading-relaxed text-lg lg:w-[60%] w-[90%]",

  // ===== Note (Disclaimer) =====
  noteWrapper:
    "mt-[1.5rem] lg:w-[90%] w-[95%] bg-white/5 border border-white/10 border-l-4 border-l-primary rounded-lg p-4 backdrop-blur-sm",
  noteHeader: "flex items-center gap-2 mb-2",
  noteIconWrapper:
    "w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0",
  noteIcon: "w-3.5 h-3.5 text-primary",
  noteTitle: "text-primary font-bold text-lg uppercase tracking-wider",
  noteText:
    "text-white/75 text-lg leading-relaxed whitespace-pre-line font-[400]",

  // Second column
  secondCol: "lg:col-span-8 col-span-1",

  // Quick Links columns
  linkColumn1: "",
  linkColumn2: (currentLang) =>
    currentLang === "en" ? "lg:ml-[-4rem]" : "lg:mr-[-4rem]",
  linkList1: "space-y-2",
  linkList2: "space-y-2 lg:mt-[2.5rem] mt-[4rem]",

  // Section titles
  sectionTitle: "font-bold text-lg mb-4 lg:mt-0 mt-[1rem]",
  contactTitle: "font-bold text-lg text-white mb-4 lg:mt-0 mt-[1rem]",

  // Contact column
  contactWrapper: "space-y-6",
  branchWrapper: "space-y-2",
  branchTitle: "text-primary font-bold text-base text-lg",

  // Contact rows
  contactRow: "flex items-start gap-2",
  contactIcon: "w-4 h-4 mt-1 flex-shrink-0",
  contactText: "text-white opacity-80 text-lg",
  contactColFlex: "flex flex-col",

  // ===== Phone label design =====
  phoneRow: "flex items-center gap-2 flex-wrap",
  phoneLabel:
    "inline-block text-[0.9rem] font-semibold tracking-wide uppercase px-2 py-[2px] rounded-md bg-primary/15 text-primary border border-primary/30",
  phoneNumber: "text-white opacity-80 text-lg",

  // ===== Short Code / Support Number Highlight (Featured Card) =====
  supportCard:
    "flex flex-col gap-3 bg-primary/10 border border-primary/30 rounded-xl p-3 mt-4",
  supportInfo: "flex items-center gap-3",
  supportIconWrapper:
    "w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary",
  supportLabel: "text-lg font-bold text-primary block",
  supportNumberText: "text-lg font-[400] tracking-wider text-white",
  supportNumbersRow: "flex items-center gap-2 flex-wrap",
  supportNumberRow: "flex items-center gap-2 flex-wrap",

  // Links
  linkBase: "transition text-lg",
  linkActive: "text-primary font-bold opacity-100",
  linkInactive: "opacity-80 hover:opacity-100 text-white",

  // Divider & copyright
  divider: "w-full h-[0.01rem] bg-[#FFFFFF40] mt-[4rem]",
  copyrightRow:
    "lg:flex justify-between mt-[2rem] text-white text-lg opacity-80",
};

// Helper to build link className
const getLinkClass = (isActive) =>
  `${classes.linkBase} ${isActive ? classes.linkActive : classes.linkInactive}`;

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

  const midIndex = Math.ceil(Links.length / 2);
  const firstHalf = Links.slice(0, midIndex);
  const secondHalf = Links.slice(midIndex);

  const data = contactData?.data;

  // Reusable link renderer
  const renderLink = (link, index) => {
    const isActive = isActiveLink(link.path);
    return (
      <li key={index}>
        <Link to={link.path} className={getLinkClass(isActive)}>
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.mainGrid}>
            {/* First column */}
            <div className={classes.firstCol}>
              <img
                src={homePageData?.data?.footer?.logo}
                alt="Logo"
                className={classes.logoImg}
              />
              <p className={classes.description}>
                {homePageData?.data?.footer?.description}
              </p>

              {/* ===== Note / Disclaimer under description ===== */}
              {homePageData?.data?.footer?.note && (
                <div className={classes.noteWrapper}>
                  <div className={classes.noteHeader}>
                    <div className={classes.noteIconWrapper}>
                      {/* Info icon */}
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

            {/* Second column */}
            <div className={classes.secondCol}>
              <div className={classes.innerGrid}>
                {/* Column 1 - Quick Links (first half) */}
                <div className={classes.linkColumn1}>
                  <h1 className={classes.sectionTitle}>{t("quick_links")}</h1>
                  <ul className={classes.linkList1}>
                    {firstHalf.map(renderLink)}
                  </ul>
                </div>

                {/* Column 2 - Quick Links (second half) */}
                <div className={classes.linkColumn2(currentLang)}>
                  <ul className={classes.linkList2}>
                    {secondHalf.map(renderLink)}
                  </ul>
                </div>

                {/* Column 3 - Contact Us & Branches */}
                <div
                  className={`${i18next.language == "en" ? "lg:ml-[-6rem]" : "lg:mr-[-6rem]"} col-span-2 lg:col-span-1 md:col-span-2`}
                >
                  <h1 className={classes.contactTitle}>{t("contact_us")}</h1>
                  <div className={classes.contactWrapper}>
                    {/* Branch 1 - General Management */}
                    <div className={classes.branchWrapper}>
                      <h3 className={classes.branchTitle}>{data?.title1}</h3>

                      {/* Phones */}
                      {(data?.first_phone || data?.second_phone) && (
                        <div className={classes.contactRow}>
                          <img
                            src={callFooter}
                            alt="Phone"
                            className={classes.contactIcon}
                          />
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

                      {/* Emails */}
                      {(data?.first_email || data?.second_email) && (
                        <div className={classes.contactRow}>
                          <img
                            src={emailFooter}
                            alt="Email"
                            className={classes.contactIcon}
                          />
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

                    {/* Branch 2 - Al-Rusafa */}
                    <div className={classes.branchWrapper}>
                      <h3 className={classes.branchTitle}>{data?.title2}</h3>

                      {data?.third_phone && (
                        <div className={classes.contactRow}>
                          <img
                            src={callFooter}
                            alt="Phone"
                            className={classes.contactIcon}
                          />
                          <div className={classes.phoneRow}>
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
                          <img
                            src={emailFooter}
                            alt="Email"
                            className={classes.contactIcon}
                          />
                          <span className={classes.contactText}>
                            {data.third_email}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* ===== Support Number / Short Code Widget (خدمة الزبائن) ===== */}
                    {(data?.support_number || data?.support_number_2) && (
                      <div className={classes.supportCard}>
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

                        <div className="flex flex-col gap-2">
                          {/* Support Number 1 */}
                          {data?.support_number && (
                            <div className={classes.supportNumberRow}>
                              <span className={classes.supportNumberText}>
                                {data.support_number}
                              </span>
                              <span className={classes.phoneLabel}>
                                {i18next.t("footer.short_number")}
                              </span>
                            </div>
                          )}

                          {/* Support Number 2 */}
                          {data?.support_number_2 && (
                            <div className={classes.supportNumberRow}>
                              <span className={classes.supportNumberText}>
                                {data.support_number_2}
                              </span>
                              <span className={classes.phoneLabel}>
                                {i18next.t("footer.short_number")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
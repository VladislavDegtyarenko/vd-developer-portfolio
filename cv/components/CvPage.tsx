import type { CvContent, ExperienceRole } from "../types";
import styles from "./CvPage.module.scss";

const contactLinks = [
  {
    label: "Email",
    value: "vladyslav.dihtiarenko@gmail.com",
    href: "mailto:vladyslav.dihtiarenko@gmail.com",
    external: false,
  },
  {
    label: "Portfolio",
    value: "vd-developer.online",
    href: "https://www.vd-developer.online/",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vladyslavdihtiarenko",
    href: "https://www.linkedin.com/in/vladyslavdihtiarenko",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/VladislavDegtyarenko",
    href: "https://github.com/VladislavDegtyarenko/",
    external: true,
  },
  {
    label: "Telegram",
    value: "@vladyslav_dihtiarenko",
    href: "https://t.me/vladyslav_dihtiarenko",
    external: true,
  },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

function Role({ role }: { role: ExperienceRole }) {
  return (
    <section className={styles.role}>
      <header className={styles.roleHeader}>
        <h3>{role.company}</h3>
        <p>
          {role.title} <span aria-hidden="true">·</span> {role.dates}
        </p>
      </header>

      {role.bullets && (
        <ul>
          {role.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {role.projects && (
        <div className={styles.projects}>
          {role.projects.map((project) => (
            <p key={project.label}>
              <strong>{project.label}</strong> {project.text}
            </p>
          ))}
        </div>
      )}

      {role.summary && <p className={styles.roleSummary}>{role.summary}</p>}
      {role.technologies && (
        <p className={styles.technologies}>{role.technologies}</p>
      )}
    </section>
  );
}

export function CvPage({ content }: { content: CvContent }) {
  return (
    <main className={styles.document}>
      <article
        className={styles.page}
        aria-label={`Vladyslav Dihtiarenko ${content.variant} CV`}
      >
        <header className={styles.hero}>
          <h1>Vladyslav Dihtiarenko</h1>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <address className={styles.contactList}>
            <p>
              <span>Rijeka, Croatia</span>
              <a href="tel:+380977139295">+38 (097) 713-92-95</a>
              <a href={contactLinks[0].href}>{contactLinks[0].value}</a>
            </p>
            <p>
              {contactLinks.slice(1).map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {(item.label === "Portfolio" || item.label === "Telegram") &&
                    `${item.label}: `}
                  {item.value}
                </a>
              ))}
            </p>
          </address>
          <p className={styles.summary}>{content.summary}</p>
        </header>

        <section className={styles.skills}>
          <SectionTitle>Core stack</SectionTitle>
          <div className={styles.skillList}>
            {content.skills.map((skill) => (
              <p key={skill.label}>
                <strong>{skill.label}:</strong> {skill.value}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.experience}>
          <SectionTitle>Experience</SectionTitle>
          {content.experience.map((role) => (
            <Role key={`${role.company}-${role.dates}`} role={role} />
          ))}
        </section>

        <section className={styles.languages}>
          <SectionTitle>Languages</SectionTitle>
          <p>Ukrainian - Native · Russian - Native · English - B2</p>
        </section>

        <footer className={styles.footer}>
          <span>{content.footer.skills}</span>
          <span>{content.footer.availability}</span>
        </footer>
      </article>
    </main>
  );
}

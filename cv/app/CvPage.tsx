import Image from "next/image";
import Logo from "../../src/components/icons/LOGO";
import type { CvContent, ExperienceRole } from "./cv-data";
import styles from "./page.module.scss";

const contactLinks = [
  {
    label: "Email",
    value: "vladislavdegtyarenko@gmail.com",
    href: "mailto:vladislavdegtyarenko@gmail.com",
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
    value: "vladyslavdihtiarenko",
    href: "https://www.linkedin.com/in/vladyslavdihtiarenko",
    external: true,
  },
  {
    label: "GitHub",
    value: "VladislavDegtyarenko",
    href: "https://github.com/VladislavDegtyarenko/",
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
        <div>
          <h3>{role.company}</h3>
          <p>{role.title}</p>
        </div>
        <time>{role.dates}</time>
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
        <aside className={styles.sidebar}>
          <div className={styles.identityMark} aria-hidden="true">
            <Logo secondaryColor="#c1c9cc" />
          </div>

          <div className={styles.portraitWrap}>
            <Image
              className={styles.portrait}
              src="/vd-developer-july26.png"
              width={909}
              height={910}
              alt="Portrait of Vladyslav Dihtiarenko"
              preload
            />
          </div>

          <section className={styles.sidebarSection}>
            <h2>Contact</h2>
            <p className={styles.location}>Rijeka, Croatia</p>
            <a className={styles.phone} href="tel:+380977139295">
              +38 (097) 713-92-95
            </a>
            <div className={styles.contactList}>
              {contactLinks.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.sidebarSection}>
            <h2>Core stack</h2>
            <div className={styles.skillList}>
              {content.skills.map((skill) => (
                <div key={skill.label}>
                  <h3>{skill.label}</h3>
                  <p>{skill.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sidebarFooter}>
            <div>
              <h2>Languages</h2>
              <p>Ukrainian - Native</p>
              <p>Russian - Native</p>
              <p>English - B2</p>
            </div>
          </section>
        </aside>

        <div className={styles.content}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h1>Vladyslav Dihtiarenko</h1>
            <p className={styles.summary}>{content.summary}</p>
          </header>

          <div className={styles.experience}>
            <SectionTitle>Experience</SectionTitle>
            {content.experience.map((role) => (
              <Role key={`${role.company}-${role.dates}`} role={role} />
            ))}
          </div>

          <footer className={styles.footer}>
            <span>React · Next.js · TypeScript</span>
            <span>{content.footer}</span>
          </footer>
        </div>
      </article>
    </main>
  );
}

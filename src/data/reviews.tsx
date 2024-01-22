import { P1 } from "@/ui/Text";
import { Review } from "@/types";

export const reviews: Review[] = [
  {
    reviewText: (
      <>
        <P1>
          We are absolutely thrilled with the work of the{" "}
          <span className="bold-white">Vladyslav</span> who{" "}
          <span className="bold-cyan">developed our new website</span> for the drone
          manufacturing company! Not only did he bring our technical requirements to life,
          but he also added his creative touch to ensure an outstanding design and
          user-friendliness.
        </P1>
        <P1>
          The Vladyslav demonstrated a{" "}
          <span className="bold-cyan">high level of professionalism</span> and
          collaborated effectively with our team throughout the development process. His
          understanding of our needs and the speed at which he tackled tasks were truly
          impressive.
        </P1>
        <P1>
          The website is functioning excellently, and we&apos;ve already received numerous{" "}
          <span className="bold-cyan">positive reviews from our clients.</span> Thank you
          for your professionalism, creativity, and dedication to your work! We highly
          recommend this programmer with confidence!
        </P1>
      </>
    ),
    name: "Ivan Bayev",
    position: "Business Development Specialist",
    company: "Airlogix",
    photo: "i-bayev.jpg",
  },
  {
    reviewText: (
      <>
        <P1>
          I had the pleasure of working with <span className="bold-white">Vladislav</span>{" "}
          on a headless project that utilized <span className="bold-cyan">React</span> and{" "}
          <span className="bold-cyan">Salesforce Commerce Cloud</span>. His exceptional
          skills as a frontend developer were evident from the start, as he quickly
          learned and adapted to new technologies, workflow, and platforms. He
          consistently produced high-quality work, and his attention to detail was
          unparalleled.
        </P1>
        <P1>
          Not only was <span className="bold-white">Vladislav</span> a talented developer,
          but he was also an incredibly responsible and reliable team player. His
          dedication to the project was unwavering, and he always went above and beyond to
          ensure the success of the project.
        </P1>
        <P1>
          I am confident that <span className="bold-white">Vladislav</span> will make a
          valuable contribution to any frontend development role he takes on, and{" "}
          <span className="bold-cyan">recommend him</span> without hesitation.
        </P1>
      </>
    ),
    name: "Oleksiy Vasin",
    position: "Frontend Development Lead",
    company: "Astound Commerce",
    photo: "o-vasin.jpg",
  },
];

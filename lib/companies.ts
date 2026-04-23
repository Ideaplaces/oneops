export interface Company {
  name: string;
  url: string;
  host: string;
  tagline: string;
}

export const PROVEN_COMPANIES: Company[] = [
  {
    name: "IdeaPlaces",
    url: "https://ideaplaces.com",
    host: "ideaplaces.com",
    tagline: "Portfolio of products, all running on the same compiled spine.",
  },
  {
    name: "Eli",
    url: "https://eli.health",
    host: "eli.health",
    tagline: "At-home hormone testing and personalised care.",
  },
  {
    name: "Mentorly",
    url: "https://mentorly.com",
    host: "mentorly.com",
    tagline: "Coaching and mentorship at enterprise scale.",
  },
  {
    name: "Pivot",
    url: "https://pivotapp.ca",
    host: "pivotapp.ca",
    tagline: "Professional development and career pivots.",
  },
];

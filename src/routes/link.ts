export interface linkObject {
  name: string;
  url: string;
}
export const links = [
  {
    name: "LinkedIn profile",
    url: "https://www.linkedin.com/in/anish1712",
  },
  {
    name: "Github profile",
    url: "https://github.com/anishagg17",
  },
  {
    name: "Portfolio",
    url: "https://anishagg17.github.io/",
  },
];

export default (request: Request): Response => {
  const init = {
    headers: { "content-type": "application/json" },
  };
  const body = JSON.stringify(links);
  return new Response(body, init);
};

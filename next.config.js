/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["https://dog.ceo"],
    loader: "custom",
    path: "/",
  },
};

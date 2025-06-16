
export default function handler(req, res) {
    const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
    const urls = ["/", "/blog", "/contacto"];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;
  
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  }
  
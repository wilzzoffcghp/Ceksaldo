export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = req.headers["x-api-key"] || req.query.apikey;
  if (!apiKey) return res.status(400).json({ success: false, message: "API key required" });

  try {
    const response = await fetch("https://otpinstan.com/api/reseller/balance.php", {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Accept": "application/json",
      },
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ success: false, message: "Gagal menghubungi server OTP Instan." });
  }
}

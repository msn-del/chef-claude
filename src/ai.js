const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of them. You don't need to use every ingredient. You may add a few extra ingredients, but keep them to a minimum.
Format your response in markdown with: a title, an ingredients list with amounts, numbered step-by-step instructions, and the total cooking time.
`

const key = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = "gemini-3.8-flash"

export async function getRecipes(ingredientsArr) {
  if (!key) {
    throw new Error("Missing key. Add VITE_GEMINI_API_KEY to your .env file and restart the dev server.")
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": key,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `I have ${ingredientsArr.join(", ")}. Please give me a recipe you'd recommend I make!`,
              },
            ],
          },
        ],
      }),
    }
  )

  const text = await res.text()
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`)

  return JSON.parse(text).candidates[0].content.parts[0].text
}
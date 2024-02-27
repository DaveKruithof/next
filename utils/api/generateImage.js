import OpenAI from "openai";

/**
 *  Transform string into an image via DALL-E
 *
 * @param {string} prompt
 */
export default async function generateImage(prompt, skipApi = false) {
  const openai = new OpenAI();

  if (skipApi) return "https://placehold.co/1024x1024/png";

  return openai.images
    .generate({
      prompt,
      n: 1,
      model: "dall-e-2",
      size: "1024x1024",
    })
    .then((res) => res.data[0].url)
    .catch((e) => {
      console.error(`image generation failed: ${e}`);
      return "https://placehold.co/1024x1024/png";
    });
}

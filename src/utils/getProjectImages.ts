import fs from "fs";
import path from "path";

export async function getProjectImages(projectFolder: string): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", projectFolder);
  try {
    const files = await fs.promises.readdir(dir);
    return files
      .filter((file) => file.match(/^img-\d+\.jpeg$/))
      .map((file) => `/${projectFolder}/${file}`);
  } catch (e) {
    return [];
  }
}

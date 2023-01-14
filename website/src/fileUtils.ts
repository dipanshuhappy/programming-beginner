import path from "path";
import fs from "fs";
import readingTime from "reading-time";
import { sync } from "glob";
import { FileWatcherEventKind } from "typescript";

const articlesPath = path.join(process.cwd(), "..");

export function getAllMarkdownFileRecursively(folder: string, files: string[]) {
  if (files.some((value) => !value.includes("."))) {
    return;
  }
  const currentFiles = fs.readdirSync(folder);

  for (const file of currentFiles) {
    if (file.includes(".")) {
      if (file.includes(".md")) {
        files.push(file);
      }
    } else {
      const newFolder = path.join(folder, file);
      if (path.basename(newFolder) == "website") {
        continue;
      }
      getAllMarkdownFileRecursively(newFolder, files);
    }
  }
  return files;
}
getAllMarkdownFileRecursively(articlesPath, []);
export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

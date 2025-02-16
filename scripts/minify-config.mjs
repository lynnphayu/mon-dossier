import fs from "fs";
import jsonminify from "jsonminify";

const config = fs.readFileSync("src/config/site.json", "utf8");
const minified = jsonminify(config);
fs.writeFileSync("src/config/site.json", minified);

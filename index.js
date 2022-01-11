#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

let sourcePath = "";
let destinationPath = "";

program
    .version("1.0.0", "-v, --version")
    .arguments("<src> <dst>")
    .action((src, dst) => {
        sourcePath = src;
        destinationPath = dst;
    })
    .parse(process.argv);

if (!sourcePath || !fs.existsSync(sourcePath)) {
    console.error("No source path given!");
    process.exit(1);
}

if (!destinationPath || !fs.existsSync(destinationPath)) {
    console.error("No destination path given!");
    process.exit(1);
}

const filePathList = glob.sync("**/*.graphql", {
    cwd: sourcePath,
    absolute: true
});

let queryMap = {};

for (let i = 0; i < filePathList.length; i++) {
    const filePath = filePathList[i];
    const query = fs.readFileSync(filePath, {
        encoding: "utf-8"
    });

    queryMap[query] = i + 1;
}

let writePath = destinationPath;
if (fs.lstatSync(writePath).isDirectory()) {
    writePath = path.join(writePath, "extracted_queries.json");
}

const writeContent = JSON.stringify(queryMap);
fs.writeFileSync(writePath, writeContent);

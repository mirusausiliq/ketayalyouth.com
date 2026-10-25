import { execFileSync } from "node:child_process"

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" })
}

const branch = execFileSync("git", ["branch", "--show-current"], {
  encoding: "utf8",
}).trim()

if (branch !== "master") {
  throw new Error(`Deployment must run from master, but the current branch is "${branch}".`)
}

const status = execFileSync("git", ["status", "--porcelain"], {
  encoding: "utf8",
}).trim()

if (status) {
  throw new Error(
    "Deployment stopped because the worktree has uncommitted changes. Commit or stash them before deploying.",
  )
}

run("git", ["push", "origin", "master"])

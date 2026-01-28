#!/bin/bash
# Run this in your Mac Terminal (not inside Cursor) to create a GitHub repo and push.
# Usage: cd /Users/basamismaeel/Downloads/mane-baku-locale-main && chmod +x push-to-github.sh && ./push-to-github.sh

set -e
cd "$(dirname "$0")"

REPO_NAME="mane-baku-locale"

if [ ! -d .git ]; then
  echo "==> Initializing git repository..."
  git init
else
  echo "==> Git repo already exists."
fi

echo "==> Staging all files..."
git add .

echo "==> Creating initial commit..."
git commit -m "Initial commit: Mane Baku cafe website" || true

echo "==> Creating GitHub repo and pushing..."
if command -v gh &>/dev/null; then
  if gh auth status &>/dev/null; then
    gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
    echo ""
    echo "Done! Repo: https://github.com/$(gh api user -q .login)/$REPO_NAME"
  else
    echo "Run: gh auth login"
    exit 1
  fi
else
  echo "Install GitHub CLI: brew install gh   then run: gh auth login"
  echo ""
  echo "Or do it manually:"
  echo "1. Go to https://github.com/new and create repo: $REPO_NAME"
  echo "2. git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
  echo "3. git branch -M main && git push -u origin main"
fi

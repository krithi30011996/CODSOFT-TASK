<div align="center">

# 💼 InsiderJobs

A full-stack job board — candidates apply, companies hire.
Built with **MERN**, **Clerk**, **Cloudinary**, and **Sentry**. Deployed on **Vercel**.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://job-portal-eight-silk.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

---

## ✨ Features

- 🔍 Browse & filter jobs by category/location
- ✅ Apply with resume upload
- 🏢 Company registration, login & job posting
- 📋 Applicant tracking dashboard
- 🔐 Clerk auth + webhook sync
- 🐛 Sentry error monitoring

## 🛠️ Tech Stack

`React 19` · `Vite` · `Tailwind` · `Express 5` · `MongoDB` · `Clerk` · `Cloudinary` · `Sentry` · `Vercel`

## 🚀 Quick Start

```bash
git clone https://github.com/krithi30011996/CODSOFT-TASK.git
cd CODSOFT-TASK

cd server && npm install && npm run server
cd ../client && npm install && npm run dev
```

<details>
<summary><b>🔑 Environment variables</b></summary>

<br>

**`server/.env`**
```env
JWT_SECRET=
MONGODB_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLERK_WEBHOOK_SECRET=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

**`client/.env`**
```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BACKEND_URL=http://localhost:5000
```

</details>

<details>
<summary><b>📁 Project structure</b></summary>

<br>
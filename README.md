<div align="center">

# 💼 InsiderJobs

A full-stack job board — candidates apply, companies hire.
Built with **MERN**, **Clerk**, **Cloudinary**, and **Sentry**. Deployed on **Vercel**.

**🔗 https://job-portal-client-git-main-krithi30011996s-projects.vercel.app/**

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
<summary><b>📁 Project structure</b></summary>

<br>

```
CODSOFT-TASK/
├── client/    # React + Vite frontend
└── server/    # Express API + MongoDB
```

</details>

<details>
<summary><b>🔌 API routes</b></summary>

<br>

| Base | Key Routes |
|---|---|
| `/api/jobs` | `GET /`, `GET /:id` |
| `/api/users` | `GET /user`, `POST /apply`, `GET /applications`, `POST /update-resume` |
| `/api/company` | `POST /register`, `POST /login`, `POST /post-job`, `GET /applicants` |
| `/webhooks` | Clerk webhook (Svix-verified) |

</details>

## 📦 Deployment

Client and server deploy as **separate Vercel projects**, each with their own env vars set in the Vercel dashboard.

---

<div align="center">
Made by <a href="https://github.com/krithi30011996">Kavipriya Magalingam</a>
</div>

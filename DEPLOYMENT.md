# Deployment Instructions

## 1. Sanity Setup (If not done)

1. Run `npx sanity init` (or `npm create sanity@latest` if initializing a new one, but you have the code)
   - Actually, since I've set up the code, you just need the Project ID.
2. Go to [Sanity.io](https://www.sanity.io) and create a new project.
3. Get your **Project ID** from the dashboard.
4. Add `http://localhost:3000` to the API CORS origins in Sanity dashboard.

## 2. Environment Variables

Create a `.env.local` file in your project root with the following:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-24
```

## 3. Deploy to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and "Add New Project".
3. Import your GitHub repository.
4. In "Environment Variables" section, add the same variables from step 2.
5. Click "Deploy".

## 4. Sanity Studio

To deploy your Sanity Studio (so you can edit content online):

1. Your Studio is embedded in the Next.js app at `/studio`.
2. You need to add your Vercel production URL (e.g., `https://myportfolio.vercel.app`) to the **CORS Origins** in Sanity management dashboard.
3. You also need to add it to **API > CORS Origins** and make sure "Allow credentials" is checked.

## 5. Content Creation

1. Visit `/studio` on your deployed site (or localhost).
2. Login with your Sanity account.
3. **Create Author Profile**: Add your name, title (e.g., "Senior Software Engineer"), bio, and profile image.
4. **Add Experience**: Add your work history (Company, Role, Dates, Logo).
5. **Add Projects**: Add your portfolio projects and mark key ones as "Featured".
6. **Add Blog Posts**: Write and publish articles.

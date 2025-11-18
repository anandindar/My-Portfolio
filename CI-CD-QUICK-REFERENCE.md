# CI/CD Quick Reference

## 🚀 Quick Commands

### Development
```bash
# Frontend development
cd frontend && npm run dev

# Backend development
cd backend && node index.js
```

### Deployment
```bash
# Automatic deployment (commits to main branch trigger CI/CD)
git add .
git commit -m "Your message"
git push
```

## 📊 GitHub Secrets Required

Navigate to: **Settings → Secrets and variables → Actions**

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `RENDER_API_KEY` | Your Render API key | Render Dashboard → Settings → API Keys |
| `RENDER_FRONTEND_SERVICE_ID` | Frontend service ID | Render → Frontend Service → Settings |
| `RENDER_BACKEND_SERVICE_ID` | Backend service ID | Render → Backend Service → Settings |

## 🔧 Render Environment Variables

### Frontend Service
```
VITE_CONTACT_ENDPOINT=https://my-portfolio-backend-huy6.onrender.com/api/contact
```

### Backend Service
```
MONGODB_URI=mongodb+srv://[user]:[pass]@portfolio.vt6upzr.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=https://anandindar.onrender.com
PORT=10000
```

## ✅ CI/CD Workflow Steps

When you push to `main`:

1. **Frontend Build** → Builds React app
2. **Backend Validate** → Checks Node.js syntax
3. **Deploy Frontend** → Deploys to Render (anandindar.onrender.com)
4. **Deploy Backend** → Deploys to Render (my-portfolio-backend-huy6.onrender.com)

## 📍 Important URLs

- **Live Site**: https://anandindar.onrender.com
- **Backend API**: https://my-portfolio-backend-huy6.onrender.com
- **GitHub Actions**: https://github.com/anandindar/My-Portfolio/actions
- **Render Dashboard**: https://dashboard.render.com

## 🔍 Monitoring

### Check Deployment Status
1. Go to [GitHub Actions](https://github.com/anandindar/My-Portfolio/actions)
2. Click on latest workflow run
3. View logs for each job

### Check Service Health
- GitHub Actions runs health checks every 6 hours
- View results in Actions tab → "Service Health Check"
- Can manually trigger: Actions → Service Health Check → Run workflow

### Check Render Logs
1. Go to Render Dashboard
2. Select your service (Frontend or Backend)
3. Click "Logs" tab
4. Look for:
   - Frontend: Build success, "Published to CDN"
   - Backend: "Connected to MongoDB", "Server started on port"

## 🐛 Troubleshooting

### Build Fails
```bash
# Test locally first
cd frontend
npm run build

cd ../backend
node --check index.js
```

### Deployment Fails
1. Check GitHub Actions logs for errors
2. Verify secrets are set correctly
3. Check Render service logs

### Contact Form Not Working
1. Check `VITE_CONTACT_ENDPOINT` in frontend env
2. Check `MONGODB_URI` in backend env
3. Check `FRONTEND_URL` for CORS
4. Test backend directly:
   ```bash
   curl -X POST https://my-portfolio-backend-huy6.onrender.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test"}'
   ```

## 📦 Updating Dependencies

### Automatic (via Dependabot)
- Dependabot checks weekly (Mondays)
- Creates PRs for updates
- Review and merge PRs

### Manual
```bash
# Frontend
cd frontend
npm update
npm audit fix

# Backend
cd backend
npm update
npm audit fix
```

## 🎯 Common Tasks

### Add New Feature
```bash
# 1. Create feature branch (optional)
git checkout -b feature/new-feature

# 2. Make changes
# ... edit files ...

# 3. Test locally
cd frontend && npm run dev
cd backend && node index.js

# 4. Commit and push
git add .
git commit -m "Add new feature"
git push
```

### Fix Production Bug
```bash
# 1. Test fix locally first
# 2. Commit with clear message
git add .
git commit -m "Fix: [clear description]"
git push

# 3. Monitor deployment
# - Watch GitHub Actions
# - Check Render logs
# - Test live site
```

### Rollback Deployment
```bash
# Option 1: Revert last commit
git revert HEAD
git push

# Option 2: Redeploy specific commit
# Go to Render Dashboard → Manual Deploy → Select commit
```

## 📚 Documentation

- **Full CI/CD Guide**: See [CI-CD-SETUP.md](./CI-CD-SETUP.md)
- **Project README**: See [README.md](./README.md)
- **Frontend README**: See [frontend/README.md](./frontend/README.md)

## 💡 Pro Tips

1. **Always test locally before pushing**
2. **Check GitHub Actions immediately after push**
3. **Monitor Render logs for first few minutes after deploy**
4. **Use meaningful commit messages**
5. **Review Dependabot PRs before merging**
6. **Keep environment variables in sync between local and Render**

## 🆘 Emergency Contacts

If something breaks:
1. Check [GitHub Actions](https://github.com/anandindar/My-Portfolio/actions) logs
2. Check [Render Dashboard](https://dashboard.render.com) logs
3. Review recent commits for changes
4. Consider reverting to last working commit
5. Check MongoDB Atlas status
6. Verify all environment variables are set correctly

---

**Last Updated**: November 2025
**Maintained By**: Anand Kumar Gupta

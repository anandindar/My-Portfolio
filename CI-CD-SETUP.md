# CI/CD Setup Guide

## Overview
This portfolio uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to Render.

## Architecture

### Services
1. **Frontend** (Static Site): https://anandindar.onrender.com
   - Built with React + Vite
   - Deployed as static site on Render
   
2. **Backend** (Web Service): https://my-portfolio-backend-huy6.onrender.com
   - Built with Express.js + MongoDB
   - Deployed as Node.js service on Render

## GitHub Actions Workflow

### Workflow File
`.github/workflows/deploy-render.yml`

### Workflow Steps

#### 1. Frontend Build Job
- Checks out code
- Sets up Node.js 18
- Installs dependencies
- Builds the React app
- Uploads build artifacts

#### 2. Backend Validation Job
- Checks out code
- Sets up Node.js 18
- Installs dependencies
- Validates JavaScript syntax

#### 3. Deploy Frontend Job
- Runs after frontend build succeeds
- Triggers Render deployment for frontend service

#### 4. Deploy Backend Job
- Runs after backend validation succeeds
- Triggers Render deployment for backend service

## Required GitHub Secrets

Navigate to your repository: Settings → Secrets and variables → Actions

Add these secrets:

### 1. `RENDER_API_KEY`
- Your Render API key
- Get it from: https://dashboard.render.com/u/settings → API Keys
- Used by both frontend and backend deployments

### 2. `RENDER_FRONTEND_SERVICE_ID`
- Frontend service ID from Render
- Find it in: Render Dashboard → Your Frontend Service → Settings → Service ID
- Format: `srv-xxxxxxxxxxxxxxxxxxxxx`

### 3. `RENDER_BACKEND_SERVICE_ID`
- Backend service ID from Render
- Find it in: Render Dashboard → Your Backend Service → Settings → Service ID
- Format: `srv-xxxxxxxxxxxxxxxxxxxxx`

## Render Environment Variables

### Frontend Service (Static Site)
Set these in Render Dashboard → Frontend Service → Environment:

```
VITE_CONTACT_ENDPOINT=https://my-portfolio-backend-huy6.onrender.com/api/contact
```

### Backend Service (Web Service)
Set these in Render Dashboard → Backend Service → Environment:

```
MONGODB_URI=mongodb+srv://[username]:[password]@portfolio.vt6upzr.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=https://anandindar.onrender.com
PORT=10000
```

## Render Build Configuration

### Frontend Service
- **Type**: Static Site
- **Build Command**: `cd frontend && npm install && npm run build`
- **Publish Directory**: `frontend/dist`
- **Auto-Deploy**: Yes

### Backend Service
- **Type**: Static Site (with workaround)
- **Build Command**: `cd backend && npm install`
- **Publish Directory**: `backend/build`
- **Start Command**: `cd backend && node index.js`
- **Auto-Deploy**: Yes

> **Note**: Backend is configured as Static Site to use free tier. The `backend/build` folder contains a dummy `index.html` to satisfy Render's static site requirements, but the actual service runs via the start command.

## Deployment Workflow

### Automatic Deployment
1. Push code to `main` branch
2. GitHub Actions workflow triggers automatically
3. Frontend and backend are built/validated in parallel
4. If successful, both services deploy to Render
5. Render pulls latest code and deploys

### Manual Deployment
1. Go to GitHub → Actions tab
2. Select "CI/CD Render Deployment" workflow
3. Click "Run workflow" → Run workflow

## Monitoring Deployments

### GitHub Actions
- View workflow runs: Repository → Actions tab
- Check build logs for errors
- See deployment status for each job

### Render Dashboard
- Frontend: https://dashboard.render.com/web/[your-frontend-service-id]
- Backend: https://dashboard.render.com/web/[your-backend-service-id]
- Check logs for deployment status
- Look for "Connected to MongoDB" in backend logs

## Troubleshooting

### Build Failures

#### Frontend Build Fails
- Check `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check for TypeScript/ESLint errors

#### Backend Validation Fails
- Check `node --check index.js` locally
- Verify syntax is correct
- Check for missing dependencies

### Deployment Failures

#### "Render secrets not configured"
- Add required secrets to GitHub repository
- Verify secret names match exactly

#### "Publish directory does not exist"
- For frontend: Ensure `frontend/dist` is created during build
- For backend: Ensure `backend/build/index.html` exists in repository

#### CORS Errors
- Verify `FRONTEND_URL` is set correctly in backend
- Check backend CORS configuration in `app.js`

#### MongoDB Connection Fails
- Verify `MONGODB_URI` is set in Render backend environment
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for Render)
- Verify database name in connection string

### Contact Form Issues

#### Form Doesn't Submit
- Check browser console for errors
- Verify `VITE_CONTACT_ENDPOINT` points to backend URL
- Test backend endpoint directly: `POST https://my-portfolio-backend-huy6.onrender.com/api/contact`

#### No Data in MongoDB
- Check backend logs for errors
- Verify MongoDB connection string
- Check Message model in `backend/models/Message.js`

## Performance Optimization

### Frontend
- Uses Vite for optimized builds
- Static assets cached by CDN
- Lazy loading for components

### Backend
- Minimal dependencies
- MongoDB connection pooling
- CORS configured for specific origin

## Security Best Practices

✅ **Implemented**:
- Environment variables for sensitive data
- CORS restricted to frontend domain
- MongoDB connection string in env vars
- API keys stored in GitHub secrets

⚠️ **Recommended**:
- Add rate limiting to contact endpoint
- Implement CAPTCHA for contact form
- Add input validation and sanitization
- Set up monitoring/alerting

## Maintenance

### Regular Tasks
- [ ] Check GitHub Actions workflow runs weekly
- [ ] Monitor Render service health
- [ ] Review MongoDB storage usage
- [ ] Update dependencies monthly
- [ ] Check for security vulnerabilities

### Dependency Updates
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

## Useful Commands

### Local Development
```bash
# Frontend
cd frontend
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build

# Backend
cd backend
node index.js        # Start server
```

### Git Operations
```bash
git status                    # Check changes
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to GitHub (triggers CI/CD)
```

### Testing Endpoints
```bash
# Test backend health
curl https://my-portfolio-backend-huy6.onrender.com/

# Test contact endpoint
curl -X POST https://my-portfolio-backend-huy6.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Render Documentation](https://render.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)

## Support

For issues or questions:
1. Check GitHub Actions logs
2. Check Render deployment logs
3. Review this documentation
4. Check individual service READMEs

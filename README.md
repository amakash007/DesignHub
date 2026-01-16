# UI Design Marketplace - DesignHub

A production-grade SaaS platform for UI/UX design assets. Designers can monetize their work, and developers can discover production-ready components.

## Features

### For Buyers
- Browse thousands of UI design assets
- Advanced filtering and search functionality
- Secure checkout with payment integration
- Lifetime access to purchased assets
- License verification
- Download and integration support

### For Designers
- Upload and publish design assets
- Track performance analytics
- Monitor sales and revenue
- Manage asset listings
- Withdraw earnings
- Build reputation and portfolio

### Platform Features
- Role-based access control (Designer, Buyer, Admin)
- Secure authentication with JWT
- Real-time cart management
- Payment processing (Stripe & Razorpay)
- Content moderation system
- CDN-optimized asset delivery
- GDPR-compliant data handling

## Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Components**: React 18+ (Server & Client Components)

### Backend
- **Runtime**: Node.js
- **API**: REST endpoints
- **Architecture**: Clean architecture principles

### Database
- **Primary**: MongoDB with indexed schemas
- **Caching**: Redis (recommended)

### Infrastructure
- **Hosting**: Vercel or AWS
- **Storage**: AWS S3 / Firebase Storage
- **CDN**: CloudFront / Cloudflare
- **Payments**: Stripe & Razorpay

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── browse/              # Asset marketplace
│   ├── categories/          # Category browsing
│   ├── cart/                # Shopping cart
│   ├── auth/                # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   └── designer-dashboard/  # Designer portal
├── components/              # Reusable components
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   └── marketplace/        # Marketplace components
└── styles/                 # Global styles

```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ui-design-marketplace
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start              # Start production server

# Linting
npm run lint           # Run ESLint
```

## Key Pages

- **Homepage** (`/`) - Hero section, featured assets, features
- **Browse** (`/browse`) - Main marketplace with filters
- **Categories** (`/categories`) - Category-based browsing
- **Designer Dashboard** (`/designer-dashboard`) - Designer analytics & management
- **Authentication** (`/auth/login`, `/auth/signup`) - User registration
- **Cart** (`/cart`) - Shopping cart

## API Endpoints (To Be Implemented)

### Assets
- `GET /api/assets` - List all assets
- `GET /api/assets/:id` - Get asset details
- `POST /api/assets` - Create asset (Designer)
- `PUT /api/assets/:id` - Update asset (Designer)
- `DELETE /api/assets/:id` - Delete asset (Designer)

### Authentication
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout user

### Orders & Payments
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `POST /api/payments` - Process payment

### Designer Analytics
- `GET /api/designer/analytics` - Designer stats
- `GET /api/designer/earnings` - Earnings data
- `GET /api/designer/assets` - Designer assets

## Security Considerations

- JWT-based authentication with refresh tokens
- HTTPS only in production
- CORS configuration for trusted origins
- Rate limiting on API endpoints
- Input validation and sanitization
- GDPR-compliant data handling
- Secure payment processing with PCI compliance

## Performance Optimization

- Next.js Image Optimization for asset previews
- Static generation for category pages
- Edge-ready rendering
- Code splitting and lazy loading
- CSS-in-JS with Tailwind CSS
- SEO optimization with metadata

## Database Schema (MongoDB)

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (buyer|designer|admin),
  avatar: String,
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Assets Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  designerId: ObjectId (ref: Users),
  category: String,
  price: Number,
  previews: [String],
  sourceFiles: [String],
  license: String,
  downloads: Number,
  rating: Number,
  reviews: [Object],
  status: String (draft|published|archived),
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  buyerId: ObjectId (ref: Users),
  designerId: ObjectId (ref: Users),
  assetId: ObjectId (ref: Assets),
  amount: Number,
  currency: String,
  status: String (pending|completed|failed|refunded),
  paymentMethod: String,
  transactionId: String,
  createdAt: Date,
  completedAt: Date
}
```

## Roadmap

### Phase 1 - MVP (Current)
- ✅ Core marketplace UI
- ✅ Authentication pages
- ✅ Designer dashboard
- Asset upload system
- Payment integration

### Phase 2 - Growth
- Reviews and ratings system
- Designer verification badges
- Advanced search with AI
- Subscription models

### Phase 3 - Intelligence
- AI-powered recommendations
- Personalized feeds
- Designer communities
- Live collaboration tools

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For support, email support@designhub.com or open an issue in the repository.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### AWS
Deploy using AWS Amplify or EC2 with Docker.

### Self-hosted
Use Docker for containerization and deploy on any cloud provider.

## Environment Variables

Create a `.env.local` file:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication
NEXT_PUBLIC_JWT_SECRET=your-jwt-secret

# Payment Gateway
NEXT_PUBLIC_STRIPE_KEY=your-stripe-key
NEXT_PUBLIC_RAZORPAY_KEY=your-razorpay-key

# Database
MONGODB_URI=mongodb://localhost:27017/designhub

# Storage
AWS_S3_BUCKET=your-bucket-name
AWS_REGION=us-east-1

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Version

1.0.0 - Initial Release

---

Built with ❤️ for designers and developers worldwide.

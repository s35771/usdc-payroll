# USDC Payroll

A modern web application for managing and sending USDC cryptocurrency payments to employees. Built with Next.js, React, and Web3 integration.

## Features

- 💼 **Employee Management**: Add and manage employee profiles with wallet addresses
- 💰 **Payment Management**: Send USDC payments to multiple employees
- 📊 **Dashboard**: Real-time analytics and payment history
- 🔐 **Web3 Integration**: Secure wallet connection and transaction management
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Built with Tailwind CSS for a professional appearance

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Web3**: ethers.js
- **State Management**: React Hooks (and Zustand ready)
- **Charts**: Recharts (ready for integration)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MetaMask or another Web3 wallet extension
- USDC tokens on Polygon network (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/s35771/usdc-payroll.git
   cd usdc-payroll
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your settings:
   ```env
   NEXT_PUBLIC_RPC_URL=https://polygon-rpc.com/
   NEXT_PUBLIC_USDC_ADDRESS=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174
   NEXT_PUBLIC_APP_NAME=USDC Payroll
   NEXT_PUBLIC_NETWORK=polygon
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Connect Wallet

1. Click "Connect Wallet" button in the header
2. Select your wallet (MetaMask, etc.)
3. Approve the connection request

### Add Employees

1. Navigate to the "Employees" tab
2. Click "Add Employee"
3. Fill in employee details:
   - Name
   - Email
   - Wallet Address
   - Monthly Salary
4. Click "Add Employee"

### Send Payments

1. Go to the "Send Payment" tab
2. Select a recipient or enter a wallet address
3. Enter the amount in USDC
4. Review the payment summary
5. Click "Send Payment"
6. Confirm the transaction in your wallet

### View Dashboard

The Dashboard tab shows:
- Total employees
- Total amount paid this month
- Pending payments
- Monthly budget status
- Recent payment history
- Budget usage analytics

## Project Structure

```
usdc-payroll/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   ├── Dashboard.tsx       # Dashboard view
│   ├── EmployeeList.tsx    # Employee management
│   ├── SendPayment.tsx     # Payment form
│   ├── PaymentHistory.tsx  # Transaction history
│   └── StatCard.tsx        # Reusable stat card
├── lib/
│   └── web3.ts             # Web3 utilities
├── public/                 # Static files
└── .env.example            # Environment variables template
```

## API Integration (Future)

The app is ready for backend integration:

```typescript
// Example for future API calls
const response = await fetch('/api/payments', {
  method: 'POST',
  body: JSON.stringify({ recipient, amount })
})
```

## Security Considerations

⚠️ **Important**: This is a frontend application. For production use:

- Never store private keys in the browser
- Use a secure backend for transaction signing
- Implement proper authentication and authorization
- Add transaction approval workflows
- Use hardware wallets for large transactions
- Implement rate limiting and fraud detection
- Store audit logs of all transactions

## Testing on Testnet

For development, use Polygon Mumbai testnet:

1. Get test USDC from a faucet
2. Update `.env.local`:
   ```env
   NEXT_PUBLIC_RPC_URL=https://rpc-mumbai.maticvigil.com
   NEXT_PUBLIC_NETWORK=mumbai
   ```
3. Test transactions without spending real USDC

## Common Issues

### "Please install MetaMask"
- Install MetaMask extension from [metamask.io](https://metamask.io)
- Ensure it's enabled in your browser

### "Insufficient balance"
- Check your USDC balance on Polygon
- Get test USDC from a faucet if on testnet

### "Transaction failed"
- Verify the recipient address is valid
- Check gas fees and total balance
- Ensure you're on the Polygon network

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue on GitHub.

## Roadmap

- [ ] Backend API for transaction management
- [ ] Multi-signature wallets support
- [ ] Batch payment processing
- [ ] Advanced analytics and reporting
- [ ] Integration with payroll systems
- [ ] Mobile app version
- [ ] Payment scheduling
- [ ] Compliance reporting

---

**Built with ❤️ for crypto payroll management**

import { ethers } from 'ethers'

// USDC Contract ABI (minimal)
const USDC_ABI = [
  'function transfer(address to, uint256 amount) public returns (bool)',
  'function balanceOf(address account) public view returns (uint256)',
  'function approve(address spender, uint256 amount) public returns (bool)',
  'function allowance(address owner, address spender) public view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
]

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error('Please install MetaMask or another Web3 wallet')
  }

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })

  return accounts[0]
}

export async function getProvider() {
  if (!window.ethereum) {
    throw new Error('Web3 provider not found')
  }

  return new ethers.BrowserProvider(window.ethereum)
}

export async function getSigner() {
  const provider = await getProvider()
  return provider.getSigner()
}

export async function getUSDCContract(signerOrProvider: any) {
  const usdcAddress = process.env.NEXT_PUBLIC_USDC_ADDRESS || ''
  return new ethers.Contract(usdcAddress, USDC_ABI, signerOrProvider)
}

export async function getUSDCBalance(address: string) {
  try {
    const provider = await getProvider()
    const contract = await getUSDCContract(provider)
    const balance = await contract.balanceOf(address)
    return ethers.formatUnits(balance, 6) // USDC has 6 decimals
  } catch (error) {
    console.error('Error getting USDC balance:', error)
    return '0'
  }
}

export async function sendUSDC(toAddress: string, amount: string) {
  try {
    const signer = await getSigner()
    const contract = await getUSDCContract(signer)

    // Convert amount to smallest unit (6 decimals for USDC)
    const amountInSmallestUnit = ethers.parseUnits(amount, 6)

    const tx = await contract.transfer(toAddress, amountInSmallestUnit)
    const receipt = await tx.wait()

    return receipt
  } catch (error) {
    console.error('Error sending USDC:', error)
    throw error
  }
}

export async function switchToPolygon() {
  if (!window.ethereum) {
    throw new Error('Web3 provider not found')
  }

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x89' }], // Polygon mainnet
    })
  } catch (error: any) {
    if (error.code === 4902) {
      // Chain not added, add it
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x89',
            chainName: 'Polygon',
            rpcUrls: ['https://polygon-rpc.com/'],
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18,
            },
            blockExplorerUrls: ['https://polygonscan.com'],
          },
        ],
      })
    } else {
      throw error
    }
  }
}

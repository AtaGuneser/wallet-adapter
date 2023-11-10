
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  MathWalletAdapter,
  LedgerWalletAdapter,
  TorusWalletAdapter,
  SlopeWalletAdapter,
  CloverWalletAdapter
} from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

function MyApp({ Component, pageProps }) {
  const endpoint = 'https://api.devnet.solana.com';

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new SolletWalletAdapter(),
    // new MathWalletAdapter(),
    new LedgerWalletAdapter(),
    // new TorusWalletAdapter(),
    // new SlopeWalletAdapter(),
    // new CloverWalletAdapter()
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;

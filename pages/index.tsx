import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import HomeButton from '../components/HomeButton';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       {/* <HomeButton /> */}
      <WalletMultiButton />
    </div>
  );
}

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const wallet = useWallet();
  const [nfts, setNfts] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // İstemci tarafında olduğumuzu belirleyin
    if (wallet.connected) {
      fetchNFTs(wallet.publicKey.toString());
    }
  }, [wallet.connected]);

  const fetchNFTs = async (address) => {
    const url = `https://solanaapi.nftscan.com/api/sol/account/own/all/${address}?show_attribute=true`;
    const headers = {
      'X-API-KEY': 'iOtBmghX8rXD1LcKQQR4GPzZ'
    };

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      setNfts(data.data[0].assets || []); // İlk koleksiyondaki NFT'leri ayarlayın
    } catch (error) {
      console.error('NFT fetch error:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {isClient && <WalletMultiButton />} {/* İstemci tarafında WalletMultiButton'ı yükleyin */}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {/* NFT'leri Kart Formatında Listele */}
        {nfts.map((nft, index) => (
          <div key={index} style={{ width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
            <img src={nft.image_uri} alt={nft.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{nft.name}</h3>
            <p>{nft.description}</p> {/* Açıklama */}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useRouter } from 'next/router';

function HomeButton() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/'); // Anasayfaya yönlendir
  };

  return (
    <button onClick={goToHome}>Home</button>
  );
}

export default HomeButton;

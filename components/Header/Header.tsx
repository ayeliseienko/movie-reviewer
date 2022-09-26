import { useRouter } from 'next/router';
import { useCallback } from 'react';

import Button from '../../common/Button/Button';
import Logo from '../../common/Logo/Logo';

export default function Header(): JSX.Element {
  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    router.push('/movie-reviews/add');
  }, [router]);

  return (
    <header className='flex justify-between items-center bg-gray-800 p-5'>
      <Logo />
      <Button className='btn-lightGrey' onClick={handleButtonClick}>
        Create review
      </Button>
    </header>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';

const Files = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      router.replace(`${websiteUrls.files}/${parsedUserData.folder_id}`);
    } else {
      router.replace(websiteUrls.login);
    }
  }, []);

  return <FullPageLoading />;
};

export default Files;

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

const Files = () => {
  const router = useRouter();
  const userData = useAppSelector((state) => state.userData);

  useEffect(() => {
    if (!userData.isLoading) {
      if (userData.data.id) {
        router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
      } else {
        router.replace(websiteUrls.login);
      }
    }
  }, [userData]);

  return <FullPageLoading />;
};

export default Files;

import React from 'react';
import { useTranslation } from 'react-i18next';

import HeartIcon from '@icon/HeartIcon';

const Me = () => {
  const { t } = useTranslation();
  return (
    <>

    <a
      className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      target='_blank'
    >
      <HeartIcon />
      {t('author')}
    </a>

    <a
      className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      href='https://limit.dev'
      target='_blank'
    >
      <HeartIcon />
      {'Host by Limit-LAB'}
    </a>
    </>
  );
};

export default Me;

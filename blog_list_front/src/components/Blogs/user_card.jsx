import ConfigButton from './AccountConfig/config_button';
import userLogo from '../../utils/images/user.png';

export default function UserCard({ user }) {
  return (
    <header
      className='flex flex-col items-center justify-center gap-1 py-4 mb-4 rounded shadow-md bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 '
    >
      <ConfigButton />
      <img
        className='w-1/4 h-auto bg-white border rounded-full shadow md:w-1/6 lg:w-24 xl:w-28'
        src={userLogo}
        alt='user logo'
      />
      <h4 className='text-lg font-semibold text-white xl:text-2xl'>
        {user?.name}
      </h4>
    </header>
  );
}

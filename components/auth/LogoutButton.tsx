import { supabase } from '@/lib/plugins/supabase/supabaseClient';
import { useRouter } from 'next/router';
import { useUser } from '@/lib/user/UserContext'

const LogoutButton = () => {
  const router = useRouter();

  const { setUser } = useUser()  || {}

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      if (setUser) {
        setUser(null);
      }
      router.push('/login');  
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

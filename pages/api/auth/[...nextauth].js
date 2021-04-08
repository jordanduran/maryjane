import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../utils/auth';
import { getUserByEmail } from '../../../utils/Fauna';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email);

        if (!user) {
          throw new Error('User does not exist!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.data.password
        );

        if (!isValid) {
          throw new Error('Incorrect username or password');
        }

        return {
          id: user.ref.id,
          email: user.data.email,
          name: user.data.name,
        };
      },
    }),
  ],
});

import { Fragment } from 'react';
import { getUsers } from '../../utils/Fauna';
import AccountActions from '../../components/account/AccountActions';

const AccountPage = (props) => {
  return (
    <Fragment>
      <div className='max-w-5xl md:max-w-4xl lg:max-w-7xl mx-auto'>
        <AccountActions users={props.users} />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const users = await getUsers();

  console.log(
    'USERS:',
    users.map((user) => user)
  );

  return {
    props: {
      users: users.map((user) => ({
        id: user.id,
        name: user.data.name,
        email: user.data.email,
        password: user.data.password,
        phone: user.data.phone,
        isAdmin: user.data.isAdmin,
        isCompanyOwner: user.data.isCompanyOwner,
        street: user.data.address.street,
        city: user.data.address.city,
        state: user.data.address.state,
        zipcode: user.data.address.zipcode,
      })),
    },
    revalidate: 1,
  };
}

export default AccountPage;

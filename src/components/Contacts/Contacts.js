import React from 'react';
import cl from './Contacts.module.scss';
const mail = 'https://cdn-icons-png.flaticon.com/512/2791/2791398.png';
const phone = 'https://cdn.icon-icons.com/icons2/806/PNG/512/phone_icon-icons.com_65958.png';

const Contacts = () => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.title}>Contacts</h1>
      <div className={cl.links}>
        <div className={cl.tel}>
          <img src={phone} alt='phone' />
          <a href='tel:+1 236 -456 -78'> +1 236 - 456 - 78</a>
        </div>
        <div className={cl.mail}>
          <img src={mail} alt='mail' />
          <a href='mailto:cometous@gmail.com'> cometous@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

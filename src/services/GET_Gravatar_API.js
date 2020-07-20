// biblioteca crypto-js com o uso MD5 requerido
import MD5 from 'crypto-js/md5';

const getGravatarApi = (Email) => {
  // formatação do email afim de evitar erro no input
  const parseEmail = MD5(Email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${parseEmail}`;
};

export default getGravatarApi;

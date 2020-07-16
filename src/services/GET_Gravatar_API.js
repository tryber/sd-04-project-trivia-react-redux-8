// biblioteca crypto-js com o uso MD5 requerido
import MD5 from 'crypto-js/md5';

const GET_GRAVATAR_API = (email) => {
  // formatação do email afim de evitar erro no input
  const parseEmail = email.trim().toLowerCase();
  return `https://www.gravatar.com/avatar/${MD5(parseEmail)}`;
};

export default GET_GRAVATAR_API;

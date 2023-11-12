import Swal from 'sweetalert2';

export const GOOGLE_CLIENT_ID =
  '201983215769-9qqqud3f9p4ck7o1uj984dm1r9lhhb3i.apps.googleusercontent.com';

export const SwalRequestError = () => {
  Swal.fire({
    title: 'Oops',
    text: 'Houve um erro ao processar sua requisição',
    timer: 2700,
    icon: 'error',
    showConfirmButton: false,
  });
};

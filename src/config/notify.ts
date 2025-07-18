import { toast, ToastOptions } from 'react-toastify';

const TOAST: { [key: string]: ToastOptions } = {
  error: {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#B91C1C',
      minHeight: 55,
      borderRadius: 12,
      background: '#FEE2E2'
    }
  },
  success: {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#166534',
      minHeight: 55,
      borderRadius: 12,
      background: '#DCFCE7'
    }
  },
  warning: {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#92400E',
      minHeight: 55,
      borderRadius: 12,
      background: '#FEF3C7'
    }
  }
};

export class NotifyService {
  static error(e: any) {
    const data = getDataError(e);
    let message = data?.error || data?.message || e;
    if (data?.data?.errors?.[0]) message = data.data.errors[0];
    toast.error(message, TOAST.error);
  }

  static success(r: any) {
    toast.success(r?.data?.data?.success || r?.data?.message || r, TOAST.success);
  }
  static warning(r: any) {
    toast.warning(r?.data?.data?.failed || r?.data?.message || r, TOAST.warning);
  }
}

export const getDataError = <T = any>(e: any) => {
  return (e?.response?.data || e) as T;
};

export const getCodeError = <T = any>(e: any) => {
  console.log(e, 'getCodeError');
  return (e?.response?.status || e) as T;
};

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toast";

const ToastContainer = () => {
  const toastMessage = useSelector((state) => state.toast.message);
  const toastType = useSelector((state) => state.toast.type);

  const dispatch = useDispatch();

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        dispatch(toastActions.clearToast());
      }, 2000);
    }
  }, [toastMessage, dispatch]);

  return (
    <>
      {toastMessage && (
        <Toast className="fixed bottom-2 right-2 transition-all duration-200 z-50">
          {toastType === "success" && (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-700 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
          )}

          {toastType === "error" && (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
          )}

          {toastType === "info" && (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-700 dark:text-blue-200">
              <HiExclamation className="h-5 w-5" />
            </div>
          )}
          <div className="ml-3 text-sm font-normal">{toastMessage}</div>
          <Toast.Toggle />
        </Toast>
      )}
    </>
  );
};

export default ToastContainer;
